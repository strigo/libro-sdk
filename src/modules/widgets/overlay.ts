import interact from 'interactjs';

import { Logger } from '../../services/logger';
import * as documentTools from '../document/document';
import * as noCodeAssessment from '../no-code-assessment/no-code-assessment';
import * as urlTools from '../url/url';
import * as listeners from '../listeners/listeners';
import * as configManager from '../config/config';
import { SDK_TYPES } from '../../strigo/types';
import { EVENT_TYPES } from '../listeners/listeners.types';

import { IOverlayWidget } from './widget.types';

function makeOverlayWidgetVisible(): void {
  document.getElementById('strigo-widget').classList.add('slide-in');
  document.getElementById('strigo-widget').classList.add('loaded');
}

function setupResizeFunctionality(): void {
  interact('#strigo-widget').resizable({
    // resize from left edge
    edges: { left: '.strigo-collapse-div', right: false, bottom: false, top: false },

    listeners: {
      move(event) {
        const target = event.target;
        const x = parseFloat(target.getAttribute('data-x')) || 0;

        // update the element's style
        target.style.width = event.rect.width + 'px';

        target.setAttribute('data-x', x);
      },
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent',
      }),
    ],
  });
}

class OverlayWidget implements IOverlayWidget {
  private documentObserver: MutationObserver;

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
    this.documentObserver = noCodeAssessment.addDocumentObserver(window);

    setupResizeFunctionality();
  }

  shutdown(): void {
    Logger.info('overlay shutdown called');
    this.removeEventListeners();
    this.documentObserver.disconnect();
    documentTools.removeWidget();
  }

  collapse(): void {
    Logger.info('overlay collapse called');
    documentTools.toggleWidget();
  }

  open(): void {
    documentTools.openWidget();
  }

  move(): void {
    documentTools.move();
  }

  private onStrigoEventHandler = (customEvent: CustomEvent): void => {
    listeners.storageChanged(customEvent?.detail);
  };

  private initEventListeners(academyPlayerFrame: HTMLIFrameElement): void {
    listeners.initAcademyPlayerLoadedListeners(academyPlayerFrame, makeOverlayWidgetVisible);
    listeners.initHostEventListeners();
    window.addEventListener(EVENT_TYPES.OVERLAY_WIDGET_EVENT, this.onStrigoEventHandler);
  }

  private removeEventListeners(): void {
    listeners.removeHostEventListeners();
    window.removeEventListener(EVENT_TYPES.OVERLAY_WIDGET_EVENT, this.onStrigoEventHandler);
  }
}

export default new OverlayWidget();
