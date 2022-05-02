import { Logger } from '../../services/logger';
import * as documentTools from '../document/document';
import * as urlTools from '../url/url';
import * as listeners from '../listeners/listeners';
import * as configManager from '../config/config';
import * as sessionManager from '../session/session';
import { SDK_TYPES } from '../../strigo/types';
import { EVENT_TYPES } from '../listeners/listeners.types';

import { IOverlayWidget } from './widget.types';

function makeOverlayWidgetVisible(): void {
  document.getElementById('strigo-widget').classList.add('slide-in');
  document.getElementById('strigo-widget').classList.add('loaded');
}

class OverlayWidget implements IOverlayWidget {
  init(): SDK_TYPES {
    Logger.info('overlay init called');

    return SDK_TYPES.OVERLAY;
  }

  setup({ development, version }): void {
    Logger.info('overlay setup called');
    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: urlTools.generateWidgetCssURL(development, version),
    });
    const academyPlayerFrame = documentTools.createWidget(urlTools.generateStrigoIframeURL(configManager.getConfig()));
    this.initEventListeners(academyPlayerFrame);
  }

  shutdown(): void {
    Logger.info('overlay shutdown called');
    documentTools.removeWidget();
    sessionManager.setPanelClosed();
  }

  open(): void {
    documentTools.openWidget();
  }

  private initEventListeners(academyPlayerFrame: HTMLIFrameElement): void {
    listeners.initAcademyPlayerLoadedListeners(academyPlayerFrame, makeOverlayWidgetVisible);
    listeners.initHostEventListeners();
    window.addEventListener(EVENT_TYPES.OVERLAY_WIDGET_EVENT, (customEvent: CustomEvent) => {
      listeners.storageChanged(customEvent?.detail);
    });
  }
}

export default new OverlayWidget();
