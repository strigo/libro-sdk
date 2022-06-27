import { Logger } from '../../services/logger';
import { getAssessmentsStorageData } from '../assessments-storage/assessments-storage';
import { getElementSelector } from '../element-selector/element-selector';
import { AssessmentActionType } from './no-code-assessment.types';

const observerOptions = {
  subtree: true,
  // attributes: true,
  // attributeOldValue: true,
  // characterDataOldValue: true,
  characterData: true,
  childList: true,
};

// TODO: This function is not efficient - need to check by location
export const addDocumentObserver = function (windowElement: Window): MutationObserver {
  const documentElement = windowElement.document;
  const assessments = getAssessmentsStorageData().assessments;

  let locationHandlers = {};
  let assessmentStatuses = {};

  const observerHandler = function (): void {
    assessments.forEach((assessment) => {
      const { recordedAssessment, challengeSuccessEvent, _id } = assessment;
      const { actionType, expectedText } = recordedAssessment;

      const locationElementProfile = recordedAssessment?.locationElement?.profile;

      if (assessmentStatuses?.[_id] === 'success' || !locationElementProfile) {
        return;
      }

      assessmentStatuses[_id] = 'pending';

      let locationElement;
      try {
        const locationElementSelector = getElementSelector(locationElementProfile);
        locationElement = documentElement.querySelector(locationElementSelector);
      } catch (err) {
        return;
      }

      switch (actionType) {
        case AssessmentActionType.ADDED_ITEM: {
          if (locationHandlers[_id]?.observer && locationElement === locationHandlers[_id].element) {
            locationHandlers[_id].element = locationElement;
            Logger.info('Same reference - no need to observe again');
            return;
          }

          if (locationElement[_id]?.observer) {
            locationElement[_id].observer.observe(locationElement, observerOptions);
            Logger.info('DOM Reference have changed - observing again');
            return;
          }

          locationHandlers[_id] = {
            element: locationElement,
            observer: new MutationObserver(
              function () {
                const exampleElementProfile = this.assessment.recordedAssessment?.exampleElement?.profile;
                if (!exampleElementProfile) {
                  return;
                }

                let exampleElementSelector;
                try {
                  exampleElementSelector = getElementSelector(exampleElementProfile, true);
                } catch {
                  return;
                }
                const currentExampleElementCount =
                  locationElement.querySelectorAll(exampleElementSelector)?.length || 0;
                const previousExampleElementCount = window.sessionStorage.getItem(_id);

                if (!previousExampleElementCount) {
                  window.sessionStorage.setItem(_id, currentExampleElementCount);
                  return;
                }

                if (currentExampleElementCount > parseInt(previousExampleElementCount)) {
                  assessmentStatuses[_id] = 'success';
                  windowElement.Strigo.sendEvent(challengeSuccessEvent);

                  locationHandlers[_id].observer.disconnect();
                  delete locationHandlers[_id];
                }
              }.bind({ assessment })
            ),
          };

          locationHandlers[_id].observer.observe(locationElement, observerOptions);

          break;
        }
        case AssessmentActionType.TEXT_CHANGE: {
          if (locationElement?.innerText?.includes(expectedText) || locationElement?.value?.includes(expectedText)) {
            assessmentStatuses[_id] = 'success';
            Logger.info(`sent event ${challengeSuccessEvent}`);
            windowElement.Strigo.sendEvent(challengeSuccessEvent);
          }

          break;
        }

        default: {
          break;
        }
      }
    });
  };

  if (!windowElement?.strigoObserver?.observer) {
    windowElement.strigoObserver = {
      observer: new MutationObserver(observerHandler),
      element: windowElement.document.body,
    };
    windowElement?.strigoObserver?.observer?.observe(windowElement.document.body, observerOptions);
    return;
  }

  if (windowElement.strigoObserver.element !== windowElement.document.body) {
    windowElement.strigoObserver.element = windowElement.document.body;
    windowElement.strigoObserver.observer.observe(windowElement.document.body, observerOptions);
  }
};
