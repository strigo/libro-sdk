import debounce from 'lodash.debounce';

import { Logger } from '../../services/logger';
import { UrlTrigger, UrlTriggerMatchType } from '../config/config.types';
import { openWidget } from '../document/document';
import { StorageNames, StorageTypes } from '../storage-utils/storage-utils.types';

const bodyObserverOptions = {
  subtree: true,
  childList: true,
};

let currentLocation;

export function setupUrlTriggers(urlTriggers: UrlTrigger[]): void {
  try {
    window[StorageTypes.LOCAL_STORAGE].setItem(StorageNames.STRIGO_URL_TRIGGERS, JSON.stringify(urlTriggers));
  } catch (error) {
    Logger.error('Url triggers setup error', { error });

    return null;
  }
}

export function getUrlTriggers(): UrlTrigger[] | undefined {
  try {
    const urlTriggersValue = window[StorageTypes.LOCAL_STORAGE].getItem(StorageNames.STRIGO_URL_TRIGGERS);

    if (urlTriggersValue) {
      return JSON.parse(urlTriggersValue) as UrlTrigger[];
    }
  } catch (error) {
    Logger.error('Get url triggers error', { error });

    return null;
  }
}

export function detectUrlTrigger(currentWindow: Window): void {
  const strigoIframe = document.getElementById('strigo-exercises') as HTMLIFrameElement;
  const currentHref = currentWindow.document.location.href;
  const urlTriggers: UrlTrigger[] = getUrlTriggers();

  if (!urlTriggers) {
    return;
  }

  for (const urlTrigger of urlTriggers) {
    const { publishmentId, urlTriggerMatchType, urlTriggerUrl } = urlTrigger;

    switch (urlTriggerMatchType) {
      case UrlTriggerMatchType.EXACT: {
        if (urlTriggerUrl.trim() === currentHref.trim()) {
          strigoIframe.contentWindow.postMessage({ selectedCourseId: publishmentId }, '*');
          openWidget();
        }

        break;
      }

      case UrlTriggerMatchType.STARTS_WITH: {
        if (currentHref.trim().startsWith(urlTriggerUrl.trim())) {
          strigoIframe.contentWindow.postMessage({ selectedCourseId: publishmentId }, '*');
          openWidget();
        }

        break;
      }

      default:
        break;
    }
  }
}

const urlTriggerObserverHandler = function (pageMutations): void {
  const isAddedNodes = pageMutations.some((mutation) => mutation.addedNodes?.length > 0);

  console.log('#####', { isAddedNodes });

  if (!isAddedNodes) {
    console.log('*** No added nodes and no character data change were detected after url change.', {
      previousLocation: currentLocation || '',
      newLocation: document.location.href,
    });

    return;
  }

  if (currentLocation === document.location.href) {
    console.log('*** No URL change and no nodes were added.');
  } else {
    console.log('*** Detected URL change!', {
      previousLocation: currentLocation || '',
      newLocation: document.location.href,
    });

    // location changed!
    currentLocation = document.location.href;
  }

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  initUrlTriggerObserver(window);
};

export const initUrlTriggerObserver = debounce((windowToObserve: Window): void => {
  console.log('*** Initializing url trigger observer');

  if (!windowToObserve?.strigoUrlTriggerObserver?.observer) {
    console.log('*** Adding Strigo url trigger observer to document body');

    windowToObserve.strigoUrlTriggerObserver = {
      observer: new MutationObserver(urlTriggerObserverHandler),
      observedBodyElement: windowToObserve.document.body,
    };

    detectUrlTrigger(windowToObserve);
    console.log('*** Starting to observe document body - url trigger observer');
    windowToObserve?.strigoUrlTriggerObserver?.observer?.observe(windowToObserve.document, bodyObserverOptions);

    return;
  }

  detectUrlTrigger(windowToObserve);

  if (!windowToObserve.document.contains(windowToObserve.strigoUrlTriggerObserver.observedBodyElement)) {
    console.log(
      '*** Detected a "body" element change. Re-initializing the document observer - url trigger observer...'
    );
    windowToObserve.strigoUrlTriggerObserver.observedBodyElement = windowToObserve.document.body;
    windowToObserve.strigoUrlTriggerObserver.observer.observe(windowToObserve.document, bodyObserverOptions);
  }
}, 500);
