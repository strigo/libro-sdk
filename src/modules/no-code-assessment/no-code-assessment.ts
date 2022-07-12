import debounce from 'lodash.debounce';

import { Logger } from '../../services/logger';
import { getAssessmentsStorageData } from '../assessments-storage/assessments-storage';
import { getElementSelector } from '../element-selector/element-selector';

import {
  Assessment,
  AssessmentActionType,
  AssessmentItemCountRecord,
  AssessmentItemCountState,
  AssessmentState,
  AssessmentStatus,
} from './no-code-assessment.types';

const exampleElementCountObserverOptions = {
  subtree: true,
  childList: true,
};

const bodyObserverOptions = {
  subtree: true,
  characterData: true,
  childList: true,
};

const locationHandlers = {};
const assessmentState: AssessmentState = {};
let windowElement;
let documentElement;
let currentLocation;
let assessments;

function updateAssessmentState(assessmentId: string, updatedFields: AssessmentState): void {
  assessmentState[assessmentId] = { ...assessmentState[assessmentId], ...updatedFields };
}

function updateAssessmentStorageState(assessmentId: string, updatedRecord: AssessmentItemCountRecord): void {
  const previousState = window.sessionStorage.getItem(assessmentId);
  const parsedPreviousState: AssessmentItemCountState = previousState ? JSON.parse(previousState) : {};
  const stateToUpdate: AssessmentItemCountState = { ...parsedPreviousState, ...updatedRecord };
  window.sessionStorage.setItem(assessmentId, JSON.stringify(stateToUpdate));
}

function countAndUpdateExampleElements(assessment: Assessment, locationElement: HTMLElement): number {
  const exampleElementProfile = assessment.recordedAssessment?.exampleElement?.profile;

  const softProfile = exampleElementProfile.map(({ nodeIdentifiers, level }) => {
    return {
      level,
      nodeIdentifiers: nodeIdentifiers.filter(({ identifier }) => identifier !== 'className'),
    };
  });

  let exampleElementSelector;

  try {
    exampleElementSelector = getElementSelector(exampleElementProfile, {
      allowDuplicates: true,
      fallbackNodesInfo: softProfile,
    });
  } catch (e) {
    console.log('*** Failed to retrieve a selector for the example element');

    return;
  }

  const { _id } = assessment;

  // TODO: narrow the query down to start from the location element instead of the entire document
  const exampleElements = document.querySelectorAll(exampleElementSelector) || [];
  console.log('*** Example elements found:', exampleElements);
  const exampleElementsInsideTheLocationElement = Array.from(exampleElements).filter((exampleElement) =>
    locationElement.contains(exampleElement)
  );

  console.log('*** Example elements that are inside the location element:', exampleElementsInsideTheLocationElement);

  const currentExampleElementCount = exampleElementsInsideTheLocationElement?.length || 0;
  const previousAssessmentStorageState = window.sessionStorage.getItem(_id);
  const parsedPreviousAssessmentStorageState = previousAssessmentStorageState
    ? JSON.parse(previousAssessmentStorageState)
    : {};
  const previousExampleElementCount = parsedPreviousAssessmentStorageState?.[document.location.href];

  console.log('*** evaluating example element count', {
    currentExampleElementCount,
    previousExampleElementCount,
    exampleElementSelector,
    documentText: document.body.innerText.slice(0, 10),
  });

  if (!previousExampleElementCount) {
    console.log('*** Persisting example element count to local storage', { currentExampleElementCount });
    updateAssessmentStorageState(_id, { [document.location.href]: currentExampleElementCount });

    return currentExampleElementCount;
  }

  return currentExampleElementCount;
}

const onAssessmentSuccess = (assessment): void => {
  const { assessmentId, challengeSuccessEvent } = assessment;
  updateAssessmentState(assessmentId, { status: AssessmentStatus.SUCCESS });
  Logger.info(`sent event ${challengeSuccessEvent}`);
  windowElement.Strigo.sendEvent(challengeSuccessEvent);
};


function assessAddedItems(mutations): void {
  console.log('*** Got an item count mutation in the location element!');

  // Abort counting example elements and updating since when the url has changed,
  // since this is handled at the document observer level
  if (currentLocation !== document.location.href) {
    console.log('*** Aborting element count due to race condition');

    return;
  }

  const { challengeSuccessEvent, _id } = this.assessment;

  if (assessmentState[_id]?.status === AssessmentStatus.SUCCESS) {
    console.log('*** Assessment already completed successfully.');

    return;
  }

  let currentExampleElementCount;

  try {
    currentExampleElementCount = countAndUpdateExampleElements(this.assessment, this.locationElement);
  } catch (e) {
    return;
  }

  const previousAssessmentStorageState = window.sessionStorage.getItem(_id);
  const parsedPreviousAssessmentStorageState = previousAssessmentStorageState
    ? JSON.parse(previousAssessmentStorageState)
    : {};
  const previousExampleElementCount = parsedPreviousAssessmentStorageState?.[document.location.href];

  if (previousExampleElementCount && currentExampleElementCount > parseInt(previousExampleElementCount)) {
    console.log('*** Yo! we got a successfully added item!', {
      currentExampleElementCount,
      previousExampleElementCount,
    });
    updateAssessmentStorageState(_id, { [document.location.href]: currentExampleElementCount });
    onAssessmentSuccess(this.assessment)
    locationHandlers[_id].observer.disconnect();
    delete locationHandlers[_id];
  }
}

const getLocationElement = (assessmentId, locationElementProfile): HTMLElement | HTMLInputElement => {
  let locationElement;

  const cachedLocationElement = assessmentState[assessmentId]?.locationElement;

  if (cachedLocationElement) {
    console.log('*** Got a cached location element...', cachedLocationElement);
    locationElement = cachedLocationElement;
  } else {
    try {
      const softProfile = locationElementProfile.map(({ nodeIdentifiers, level }) => {
        return {
          level,
          nodeIdentifiers: nodeIdentifiers.filter(({ identifier }) => identifier !== 'className'),
        };
      });

      const locationElementSelector = getElementSelector(locationElementProfile, { fallbackNodesInfo: softProfile });
      console.log('*** Retrieving location element by selector:', locationElementSelector);
      locationElement = documentElement.querySelector(locationElementSelector);
      console.log('*** Found location element:', locationElement);
      updateAssessmentState(assessmentId, { locationElement });
      console.log('*** Identified a "Location Element" on the page!', { locationElement, locationElementSelector });
    } catch (err) {
      console.log('*** Error in selecting Location element', err);

      return;
    }
  }

  return locationElement;
};

const evaluateAssessments = function (): void {
  console.log('*** Evaluating Assessments...', {
    bodyTextDuringAssessment: window.document.body.innerText.slice(0, 50),
  });
  assessments.forEach((assessment) => {
    const { recordedAssessment, challengeSuccessEvent, _id } = assessment;
    const { actionType, expectedText } = recordedAssessment;

    const locationElementProfile = recordedAssessment?.locationElement?.profile;

    if (!locationElementProfile) {
      console.log('*** missing location element profile. Aborting...');

      return;
    }

    if (assessmentState?.[_id]?.status === AssessmentStatus.SUCCESS) {
      console.log('*** Assessment already in "success" status. Aborting...');

      return;
    }

    updateAssessmentState(_id, { status: AssessmentStatus.PENDING });

    const locationElement = getLocationElement(_id, locationElementProfile);

    if (!locationElement) {
      console.log('*** Failed to find location element. Aborting assessment evaluation...');

      return;
    }

    switch (actionType) {
      case AssessmentActionType.ADDED_ITEM: {
        const boundedAssessAddedItems = assessAddedItems.bind({ assessment, locationElement, windowElement });

        if (locationHandlers[_id]?.observer && locationElement === locationHandlers[_id].element) {
          locationHandlers[_id].element = locationElement;

          try {
            boundedAssessAddedItems([]);
            locationHandlers[_id].observer.observe(locationElement, exampleElementCountObserverOptions);
            Logger.info('Same reference - no need to observe again');
            console.log(' *** Same reference - no need to observe again', locationElement);
          } catch (e) {
            console.log('*** Got an error in item count', e);
            break;
          }

          break;
        }

        if (locationHandlers[_id]?.observer) {
          try {
            boundedAssessAddedItems([]);
            locationHandlers[_id].observer.observe(locationElement, exampleElementCountObserverOptions);
            Logger.info('DOM Reference have changed - observing again');
            console.log(' *** DOM Reference have changed - observing again', locationElement);
          } catch (e) {
            console.log('*** Got an error in item count', e);
            break;
          }

          break;
        }

        locationHandlers[_id] = {
          element: locationElement, // TODO: pass the entire doc? or the location element?
          observer: new MutationObserver(boundedAssessAddedItems),
        };

        try {
          boundedAssessAddedItems([]);
          locationHandlers[_id].observer.observe(locationElement, exampleElementCountObserverOptions);
        } catch (e) {
          console.log('*** Got an error in item count', e);
          break;
        }

        break;
      }

      case AssessmentActionType.TEXT_CHANGE: {
        if (locationElement instanceof HTMLInputElement) {
          if (locationElement?.value?.includes(expectedText)) {
            onAssessmentSuccess(assessment);
            break;
          }
        }

        if (locationElement?.innerText?.includes(expectedText)) {
          onAssessmentSuccess(assessment);
          break;
        }

        break;
      }

      default: {
        break;
      }
    }
  });
};

const documentObserverHandler = function (pageMutations): void {
  const isAddedNodes = pageMutations.some((mutation) => mutation.addedNodes?.length > 0);
  const isCharacterDataChanged = pageMutations.some((mutation) => mutation.type == 'characterData');

  console.log('#####', { isAddedNodes, isCharacterDataChanged });

  if (!isAddedNodes && !isCharacterDataChanged) {
    console.log('*** No added nodes and no character data change were detected after url change.', {
      previousLocation: currentLocation || '',
      newLocation: document.location.href,
    });

    return;
  }

  if (currentLocation === document.location.href) {
    console.log('*** No URL change and no nodes were added.');
  } else {
    // TODO: Reload the widget
    console.log('*** Detected URL change!', {
      previousLocation: currentLocation || '',
      newLocation: document.location.href,
    });

    // location changed!
    currentLocation = document.location.href;
  }

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  initDocumentObserver(window);
};

export const initDocumentObserver = debounce((windowToObserve: Window): void => {
  windowElement = windowToObserve;
  documentElement = windowElement.document;

  console.log('*** Initializing document observer');

  assessments = getAssessmentsStorageData().assessments.filter(
    ({ assessmentType }) => assessmentType === 'recorded-flow'
  );

  if (!windowElement?.strigoObserver?.observer) {
    console.log('*** Adding Strigo observer to document body');

    windowElement.strigoObserver = {
      observer: new MutationObserver(documentObserverHandler),
      element: windowElement.document.body,
    };

    evaluateAssessments();
    console.log('*** Starting to observe document body');
    windowElement?.strigoObserver?.observer?.observe(windowElement.document, bodyObserverOptions);

    return;
  }

  evaluateAssessments();

  if (windowElement.strigoObserver.element !== windowElement.document.body) {
    console.log('*** Detected a "body" element change. Re-initializing the document observer...');
    windowElement.strigoObserver.element = windowElement.document.body;
    windowElement.strigoObserver.observer.observe(windowElement.document.body, bodyObserverOptions);
  }
}, 500);
