import * as sessionManager from '../session/session';
import * as configManager from '../config/config';
import overlayWidget from '../widgets/overlay';
import { Logger } from '../../services/logger';
import { WidgetFlavors } from '../widgets/widget.types';
import { openWidget } from '../document/document';

import { EventTypes, MessageTypes } from './listeners.types';

function onHostEventHandler(ev: MessageEvent<unknown>): void {
  const message = ev?.data as string;

  if (!message) {
    return;
  }

  if (message.startsWith?.(MessageTypes.URL_TRIGGERED)) {
    const urlTriggeredCourses = (sessionManager.getSessionValue('urlTriggeredCourses') as string[]) || [];
    const selectedCourseId = message.split('/')[1];

    Logger.info('URL trigger message received', { selectedCourseId, urlTriggeredCourses });

    if (!selectedCourseId) {
      Logger.info('URL trigger message received without course id');

      return;
    }

    if (urlTriggeredCourses.includes(selectedCourseId)) {
      Logger.info('URL trigger message received for a course that was already opened, doing nothing');

      return;
    }

    Logger.info('URL trigger message received for a new course, opening it');

    urlTriggeredCourses.push(selectedCourseId);
    sessionManager.setSessionValue('urlTriggeredCourses', urlTriggeredCourses);

    if (sessionManager.getWidgetFlavor() === WidgetFlavors.OVERLAY) {
      openWidget();
    }

    return;
  }

  switch (ev.data) {
    case MessageTypes.MOVE: {
      Logger.info('Panel move message received');

      if (sessionManager.getWidgetFlavor() === WidgetFlavors.OVERLAY) {
        overlayWidget.move();
      }

      break;
    }

    case MessageTypes.SHUTDOWN: {
      Logger.info('Shutdown message received - will collapse panel');
      window.Strigo?.collapse();

      break;
    }

    case MessageTypes.DESTROY: {
      Logger.info('Destroy message received');
      window.Strigo?.destroy();

      break;
    }

    case MessageTypes.CHALLENGE_SUCCESS: {
      Logger.info('Challenge event success message received');

      if (sessionManager.getWidgetFlavor() === WidgetFlavors.OVERLAY) {
        overlayWidget.open();
      }

      break;
    }

    case MessageTypes.RENDERED: {
      Logger.info('Panel rendered message received');
      sessionManager.setSessionValue('isRendered', true);

      window.Strigo?.expandPanel();

      break;
    }

    default: {
      break;
    }
  }
}

// Host event listeners
export function initHostEventListeners(hostWindow: Window): void {
  hostWindow.addEventListener(EventTypes.MESSAGE, onHostEventHandler, false);
}

export function removeHostEventListeners(): void {
  window.removeEventListener(EventTypes.MESSAGE, onHostEventHandler);
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
  });
}

export function initChildEventListeners(childIframe: HTMLIFrameElement): void {
  const originalHost = configManager.getConfigValue('initSite')?.host;
  // noCodeAssessment.addDocumentObserver(childIframe.contentWindow);
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
