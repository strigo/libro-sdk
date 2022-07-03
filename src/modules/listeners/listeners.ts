import * as eventsSender from '../events-sender/events-sender';
import * as sessionManager from '../session/session';
import * as configManager from '../config/config';
import * as noCodeAssessment from '../no-code-assessment/no-code-assessment';
import { STORAGE_NAMES } from '../storage-utils/storage-utils.types';
import ovelayWidget from '../widgets/overlay';
import { Logger } from '../../services/logger';
import { WIDGET_FLAVORS } from '../widgets/widget.types';
import { StrigoEventsStorage } from '../events-storage/events-storage.types';

import { EVENT_TYPES, MESSAGE_TYPES } from './listeners.types';

export function storageChanged({ key, oldValue, newValue }): void {
  if (key !== STORAGE_NAMES.STRIGO_EVENTS) {
    return;
  }

  const newEventsStorage = (JSON.parse(newValue) as StrigoEventsStorage)?.events;
  const oldEventsStorage = (JSON.parse(oldValue) as StrigoEventsStorage)?.events;
  const difference = newEventsStorage.filter(
    ({ eventName: newEventName }) =>
      !oldEventsStorage.some(({ eventName: oldEventName }) => newEventName === oldEventName)
  );

  if (difference.length > 0) {
    eventsSender.postEventMessage();
  }
}

function onHostEventHandler(ev: MessageEvent<any>): void {
  if (!ev || !ev.data) {
    return;
  }

  switch (ev.data) {
    case MESSAGE_TYPES.MOVE: {
      Logger.info('Panel move message received');

      if (sessionManager.getWidgetFlavor() === WIDGET_FLAVORS.OVERLAY) {
        ovelayWidget.move();
      }

      break;
    }

    case MESSAGE_TYPES.SHUTDOWN: {
      Logger.info('Shutdown message received - will collapse panel');
      window.Strigo?.collapse();

      break;
    }

    case MESSAGE_TYPES.DESTROY: {
      Logger.info('Destroy message received');
      window.Strigo?.destroy();

      break;
    }

    case MESSAGE_TYPES.CHALLENGE_SUCCESS: {
      Logger.info('Challenge event success received');

      if (sessionManager.getWidgetFlavor() === WIDGET_FLAVORS.OVERLAY) {
        ovelayWidget.open();
      }

      break;
    }

    default: {
      break;
    }
  }
}

// Host event listeners
export function initHostEventListeners(hostWindow: Window): void {
  hostWindow.addEventListener(EVENT_TYPES.MESSAGE, onHostEventHandler, false);
}

export function removeHostEventListeners(): void {
  window.removeEventListener(EVENT_TYPES.MESSAGE, onHostEventHandler);
}

export function initAcademyPanelLoadedListeners(
  academyPanelframe: HTMLIFrameElement,
  onLoadCallback?: () => Promise<void> | void
): void {
  academyPanelframe.addEventListener('load', async () => {
    if (!!sessionManager.getSessionValue('isLoading')) {
      if (onLoadCallback) {
        await onLoadCallback();
      }

      sessionManager.setSessionValue('isLoading', false);
    }

    // Emptying events storage and posting all events
    eventsSender.postAllEventMessages();
  });
}

export function initChildEventListeners(childIframe: HTMLIFrameElement): void {
  const originalHost = configManager.getConfigValue('initSite')?.host;
  noCodeAssessment.addDocumentObserver(childIframe.contentWindow);
  childIframe.addEventListener('load', function () {
    try {
      const currentHost = this.contentWindow.location.host;

      if (currentHost !== originalHost) {
        window.Strigo.shutdown();
      }
    } catch (error) {
      Logger.error(error);
      window.Strigo.shutdown();
    }
  });
}
