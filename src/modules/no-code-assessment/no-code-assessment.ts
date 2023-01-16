import debounce from 'lodash.debounce';

import { Logger } from '../../services/logger';
import { getAssessmentsStorageData } from '../assessments-storage/assessments-storage';
import { getElementSelector } from '../element-selector/element-selector';
import * as configManager from '../config/config';

import { isSimilar, isUrlStructureFormatSimilar } from './element-similarity';
import {
  Assessment,
  AssessmentActionType,
  AssessmentItemCountRecord,
  AssessmentItemCountState,
  AssessmentState,
  AssessmentStatus,
} from './no-code-assessment.types';

const strigoLocationDataIdCamelCased = 'strigoLocationId';
const strigoLocationDataIdSnakeCased = 'strigo-location-id';

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
  const elementProfile = assessment.recordedAssessment?.exampleElement?.profile;

  if (elementProfile) {
    Logger.info('*** No example element profile. Aborting count...');

    return;
  }

  const { nodeTree, recordedElementInfo } = elementProfile;

  let exampleElementSelector;

  try {
    exampleElementSelector = getElementSelector(nodeTree, {
      allowDuplicates: true,
    });
  } catch (e) {
    Logger.info('*** Failed to retrieve a selector for the example element');

    return;
  }

  const { _id } = assessment;

  // TODO: narrow the query down to start from the location element instead of the entire document
  const exampleElements = document.querySelectorAll(exampleElementSelector) || [];
  Logger.info('*** Example elements found:', { exampleElements });
  const exampleElementsInsideTheLocationElement = Array.from(exampleElements).filter((exampleElement) =>
    locationElement.contains(exampleElement)
  );

  Logger.info('*** Example elements that are inside the location element:', {
    exampleElementsInsideTheLocationElement,
  });

  const currentExampleElementCount = exampleElementsInsideTheLocationElement?.length || 0;
  const previousAssessmentStorageState = window.sessionStorage.getItem(_id);
  const parsedPreviousAssessmentStorageState = previousAssessmentStorageState
    ? JSON.parse(previousAssessmentStorageState)
    : {};
  const previousExampleElementCount = parsedPreviousAssessmentStorageState?.[document.location.href];

  Logger.info('*** evaluating example element count', {
    currentExampleElementCount,
    previousExampleElementCount,
    exampleElementSelector,
    documentText: document.body.innerText.slice(0, 10),
  });

  if (!previousExampleElementCount) {
    Logger.info('*** Persisting example element count to local storage', { currentExampleElementCount });
    updateAssessmentStorageState(_id, { [document.location.href]: currentExampleElementCount });

    return currentExampleElementCount;
  }

  return currentExampleElementCount;
}

const onAssessmentSuccess = async (assessment, detectedMeta = {}): Promise<void> => {
  const { _id: assessmentId, challengeSuccessEvent } = assessment;
  Logger.info('*** Successfully detected assessment criteria!', {
    assessmentId,
    challengeSuccessEvent,
    ...assessment,
    window,
    ...detectedMeta,
  });
  updateAssessmentState(assessmentId, { status: AssessmentStatus.SUCCESS });
  Logger.info(`sent event ${challengeSuccessEvent}`);
  await window.Strigo.sendEvent(challengeSuccessEvent);
};

function assessAddedItems(mutations): void {
  Logger.info('*** Got an item count mutation in the location element!');

  // Abort counting example elements and updating since when the url has changed,
  // since this is handled at the document observer level
  if (currentLocation !== document.location.href) {
    Logger.info('*** Aborting element count due to race condition');

    return;
  }

  const { challengeSuccessEvent, _id } = this.assessment;

  if (assessmentState[_id]?.status === AssessmentStatus.SUCCESS) {
    Logger.info('*** Assessment already completed successfully.');

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
    Logger.info('*** Yo! we got a successfully added item!', {
      currentExampleElementCount,
      previousExampleElementCount,
    });
    updateAssessmentStorageState(_id, { [document.location.href]: currentExampleElementCount });
    onAssessmentSuccess(this.assessment);
    locationHandlers[_id].observer.disconnect();
    delete locationHandlers[_id];
  }
}

const getLocationElement = (
  assessmentId,
  locationElementProfile
): { locationElement: HTMLElement | HTMLInputElement; locationElementSelector: string } => {
  let locationElement;
  let locationElementSelector;

  const cachedLocationElement = assessmentState[assessmentId]?.locationElement;

  const isLocationElementStillOnDOM = window.document.contains(cachedLocationElement);

  if (cachedLocationElement && isLocationElementStillOnDOM) {
    Logger.info('*** Got a cached location element...', { cachedLocationElement });
    locationElement = cachedLocationElement;
    locationElementSelector = assessmentState[assessmentId]?.locationElementSelector;
  } else {
    const { nodeTree, recordedElementInfo } = locationElementProfile;
    locationElementSelector = getElementSelector(nodeTree, { threshold: 5000 });

    if (!locationElementSelector) {
      throw new Error('*** No location element selector was found fitting.');
    }

    Logger.info('*** Retrieving location element by selector:', { locationElementSelector });
    locationElement = window.document.querySelector(locationElementSelector);
    Logger.info('*** Found location element:', {
      locationElement,
      locationElementSelector,
    });

    if (locationElement) {
      const isSimilarToRecordedElement = isSimilar(recordedElementInfo, locationElement);

      if (!isSimilarToRecordedElement) {
        throw new Error('*** Not similar to the recorded element.');
      }
    }

    updateAssessmentState(assessmentId, { locationElement, locationElementSelector });
  }

  return { locationElement, locationElementSelector };
};

const addLocationContextElement = function (
  locationElementToDebug: HTMLElement,
  locationElementSelector: string
): HTMLElement {
  const newStrigoContextElement = window.document.createElement('div') as HTMLElement;
  newStrigoContextElement.dataset[strigoLocationDataIdCamelCased] = locationElementSelector;

  const calcDimensions = {
    top: -window.scrollY,
    left: -window.scrollX,
  };

  let elem: HTMLElement = locationElementToDebug;

  while (elem && elem !== window.document.body) {
    calcDimensions.top += elem.offsetTop;
    calcDimensions.left += elem.offsetLeft;
    elem = elem.offsetParent as HTMLElement;
  }

  const locationContextElementStyle = `
      position: fixed;
      top: ${calcDimensions.top - 40}px;
      left: ${calcDimensions.left}px;
      z-index: 2147483646;
      position: fixed;
    `;

  newStrigoContextElement.setAttribute('style', locationContextElementStyle);

  window.document.body.appendChild(newStrigoContextElement);

  return newStrigoContextElement;
};

const addAssessmentDebugUI = function (
  locationElementToDebug: HTMLElement,
  locationElementSelector: string,
  assessment
): void {
  const previousDebugAssessmentContextElement = window.document.getElementById(`${assessment._id}-context-overlay`);

  if (previousDebugAssessmentContextElement) {
    Logger.info('*** Already got an existing debug element for this assessment.', { assessment });

    return;
  }

  // eslint-disable-next-line no-param-reassign
  locationElementToDebug.style.border = '2px dashed #696CBF';
  // eslint-disable-next-line no-param-reassign
  locationElementToDebug.style['border-radius'] = '4px';

  const assessmentContextElement = window.document.createElement('div');
  assessmentContextElement.setAttribute('id', `${assessment._id}-context-overlay`);
  const assessmentContextElementStyle = `
      width: 400px;
      padding: 1px;
      background: rgba(226, 226, 252, 0.90);
      border: 1px solid #696CBF;
      box-sizing: border-box;
      border-radius: 4px;
      color: #696CBF;
  `;

  assessmentContextElement.setAttribute('style', assessmentContextElementStyle);
  const closeButton = document.createElement('button');
  closeButton.innerHTML = 'X';
  const assessmentIdStyle = `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  closeButton.onclick = () => {
    const assessmentDebugElement = window.document.querySelectorAll(
      `[data-${strigoLocationDataIdSnakeCased}="${locationElementSelector}"]`
    )?.[0];
    assessmentDebugElement.remove();
  };

  assessmentContextElement.innerHTML = `
    <div style="${assessmentIdStyle}">
      <span>assessmentId: ${assessment?._id}</span>
      <span class="closeButton"></span>
    </div>
    <div>Expected text: ${assessment?.recordedAssessment?.expectedText}</div>
    <div>Selector used: ${locationElementSelector}</div>
  `;

  assessmentContextElement.children[0].children[1].appendChild(closeButton);

  Logger.info('*** Appending assessment debug context element.');

  const strigoContextElement = window.document.querySelectorAll(
    `[data-${strigoLocationDataIdSnakeCased}="${locationElementSelector}"]`
  )?.[0];

  if (strigoContextElement) {
    strigoContextElement.appendChild(assessmentContextElement);
  } else {
    const newLocationContextElement = addLocationContextElement(locationElementToDebug, locationElementSelector);
    newLocationContextElement.appendChild(assessmentContextElement);
  }
};

const evaluateAssessments = function (): void {
  Logger.info('*** Evaluating Assessments...', {
    bodyTextDuringAssessment: window.document.body.innerText.slice(0, 50),
  });
  console.log('assessments', assessments);
  const relevantAssessments = assessments.filter(({ recordedAssessment }) => {
    const recordedElementUrl =
      recordedAssessment?.locationElement?.profile?.recordedElementInfo?.url || recordedAssessment?.url;
    if (!recordedElementUrl) {
      
      return false;
    }

    const currentUrl = window.location.href;

    return isUrlStructureFormatSimilar(recordedElementUrl, currentUrl);
  });

  relevantAssessments.forEach((assessment) => {
    const { recordedAssessment, challengeSuccessEvent, _id } = assessment;
    const { actionType, expectedText } = recordedAssessment;

    if (actionType === AssessmentActionType.NOTIFICATION && expectedText) {
      const notificationText = window.document.body.innerText?.toLowerCase();

      if (notificationText.indexOf(expectedText.toLowerCase())) {
        Logger.info('*** Found notification text. Sending success event...');

        window.Strigo.sendEvent(challengeSuccessEvent);
      }

      return;
    }

    const locationElementProfile = recordedAssessment?.locationElement?.profile;

    if (!locationElementProfile) {
      Logger.info('*** missing location element profile. Aborting...');

      return;
    }

    if (assessmentState?.[_id]?.status === AssessmentStatus.SUCCESS) {
      Logger.info('*** Assessment already in "success" status. Aborting...');

      return;
    }

    updateAssessmentState(_id, { status: AssessmentStatus.PENDING });

    let locationElementResult;

    try {
      locationElementResult = getLocationElement(_id, locationElementProfile);
    } catch (err) {
      Logger.info('*** Failed to find location element. Aborting assessment evaluation...');

      return;
    }

    const isInDebugMode = configManager.getLocalStorageConfig()?.isAcademyAssessmentDebug;

    const { locationElement, locationElementSelector } = locationElementResult;

    if (isInDebugMode) {
      addAssessmentDebugUI(locationElement, locationElementSelector, assessment);
    }

    switch (actionType) {
      case AssessmentActionType.ADDED_ITEM: {
        const boundedAssessAddedItems = assessAddedItems.bind({ assessment, locationElement, window });

        if (locationHandlers[_id]?.observer && locationElement === locationHandlers[_id].element) {
          locationHandlers[_id].element = locationElement;

          try {
            boundedAssessAddedItems([]);
            locationHandlers[_id].observer.observe(locationElement, exampleElementCountObserverOptions);
            Logger.info('Same reference - no need to observe again');
            Logger.info(' *** Same reference - no need to observe again', { locationElement });
          } catch (e) {
            Logger.error('*** Got an error in item count', { err: e });
            break;
          }

          break;
        }

        if (locationHandlers[_id]?.observer) {
          try {
            boundedAssessAddedItems([]);
            locationHandlers[_id].observer.observe(locationElement, exampleElementCountObserverOptions);
            Logger.info('DOM Reference have changed - observing again');
            Logger.info(' *** DOM Reference have changed - observing again', { locationElement });
          } catch (e) {
            Logger.error('*** Got an error in item count', { err: e });
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
          Logger.info('*** Got an error in item count', e);
          break;
        }

        break;
      }

      case AssessmentActionType.TEXT_CHANGE: {
        Logger.info('*** Assessing text changes in location element...', {
          locationElement,
          locationElementType: locationElement instanceof HTMLInputElement ? 'input' : 'non-input',
          innerTextValue:
            locationElement instanceof HTMLInputElement ? locationElement?.value : locationElement?.innerText,
          expectedText,
        });

        if (locationElement instanceof HTMLInputElement) {
          if (locationElement?.value?.includes(expectedText)) {
            onAssessmentSuccess(assessment, { locationElement });
            break;
          }
        }

        if (locationElement?.innerText?.includes(expectedText)) {
          onAssessmentSuccess(assessment, { locationElement });
          break;
        }

        break;
      }

      // case AssessmentActionType.NOTIFICATION: {
      //   Logger.info('*** Assessing text detected on the document...', {
      //     locationElement,
      //     locationElementType: locationElement instanceof HTMLInputElement ? 'input' : 'non-input',
      //     innerTextValue:
      //       locationElement instanceof HTMLInputElement ? locationElement?.value : locationElement?.innerText,
      //     expectedText,
      //   });

      //   if (locationElement instanceof HTMLInputElement) {
      //     if (locationElement?.value?.includes(expectedText)) {
      //       onAssessmentSuccess(assessment, { locationElement });
      //       break;
      //     }
      //   }

      //   if (locationElement?.innerText?.includes(expectedText)) {
      //     onAssessmentSuccess(assessment, { locationElement });
      //     break;
      //   }

      //   break;
      // }

      default: {
        break;
      }
    }
  });
};

const documentObserverHandler = function (pageMutations): void {
  const isAddedNodes = pageMutations.some((mutation) => mutation.addedNodes?.length > 0);
  const isCharacterDataChanged = pageMutations.some((mutation) => mutation.type == 'characterData');

  Logger.info('#####', { isAddedNodes, isCharacterDataChanged });

  if (!isAddedNodes && !isCharacterDataChanged) {
    Logger.info('*** No added nodes and no character data change were detected after url change.', {
      previousLocation: currentLocation || '',
      newLocation: document.location.href,
    });

    return;
  }

  if (currentLocation === document.location.href) {
    Logger.info('*** No URL change and no nodes were added.');
  } else {
    Logger.info('*** Detected URL change!', {
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
  Logger.info('*** Initializing document observer');

  assessments = getAssessmentsStorageData().assessments.filter(
    ({ assessmentType }) => assessmentType === 'recorded-flow'
  );

  if (!window?.strigoObserver?.observer) {
    Logger.info('*** Adding Strigo observer to document body');

    window.strigoObserver = {
      observer: new MutationObserver(documentObserverHandler),
      observedBodyElement: window.document.body,
    };

    evaluateAssessments();
    Logger.info('*** Starting to observe document body');
    window?.strigoObserver?.observer?.observe(window.document, bodyObserverOptions);

    return;
  }

  evaluateAssessments();

  if (!window.document.contains(window.strigoObserver.observedBodyElement)) {
    Logger.info('*** Detected a "body" element change. Re-initializing the document observer...');
    window.strigoObserver.observedBodyElement = window.document.body;
    window.strigoObserver.observer.observe(window.document, bodyObserverOptions);
  }
}, 500);
