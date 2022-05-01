// Page listener will be created this way
// 1. Listen in intervals until getting the actual element
// 2. Define a mutation observer for the element
// 3. Send the event back to strigo-app

import { getAssessmentsStorageData } from '../assessments-storage/assessments-storage';

export const addDocumentObserver = function (windowElement: Window): void {
  const documentElement = windowElement.document;
  const assessments = getAssessmentsStorageData().assessments;

  const observerHandler = function (): void {
    assessments.forEach((assessment) => {
      const { eventName, expectedResult, selector } = assessment;
      const element: any = documentElement.querySelector(selector);

      if (element?.innerText?.includes(expectedResult) || element?.value?.includes(expectedResult)) {
        windowElement.Strigo.sendEvent(eventName);
      }
    });
  };

  const observer = new MutationObserver(observerHandler);

  observer.observe(documentElement, {
    subtree: true,
    attributes: true,
    attributeOldValue: true,
    characterDataOldValue: true,
    characterData: true,
  });
};
