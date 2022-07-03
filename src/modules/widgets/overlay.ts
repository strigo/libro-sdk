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

const MINIMUM_WIDTH = 342;

function makeOverlayWidgetVisible(): void {
  document.getElementById('strigo-widget').classList.add('slide-in');
  document.getElementById('strigo-widget').classList.add('loaded');

  const strigoIframe = document.getElementById('strigo-exercises') as HTMLIFrameElement;
  strigoIframe.contentWindow.postMessage({ dockable: 'true', dockingSide: 'right' }, '*');
}

function setupResizeFunctionality(): void {
  const [maxWidth] = documentTools.getSplitMaxSizes();
  interact('#strigo-widget').resizable({
    // resize from left edge
    edges: { left: '#strigo-collapse-div', right: '#strigo-collapse-div.align-left', bottom: false, top: false },

    listeners: {
      move(event) {
        const target = event.target;
        const x = parseFloat(target.getAttribute('data-x')) || 0;

        // update the element's style
        target.style.width =
          ((event.rect.width < MINIMUM_WIDTH
            ? MINIMUM_WIDTH
            : event.rect.width > maxWidth
            ? maxWidth
            : event.rect.width) as string) + 'px';

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

    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: urlTools.generateAcademyHatCssURL(development, version),
    });

    const academyPlayerFrame = documentTools.createWidget(urlTools.generateStrigoIframeURL(configManager.getConfig()));
    const hostingAppWindow = documentTools.getHostingAppWindow();
    this.initEventListeners(hostingAppWindow, academyPlayerFrame);
    console.log('adding observer');
    this.documentObserver = noCodeAssessment.addDocumentObserver(window);

    console.log('observer added');
    setupResizeFunctionality();
  }

  shutdown(): void {
    Logger.info('overlay shutdown called');
    const hostingAppWindow = documentTools.getHostingAppWindow();
    this.removeEventListeners(hostingAppWindow);
    hostingAppWindow?.strigoObserver?.observer?.disconnect();
    // this.documentObserver.disconnect();
    documentTools.removeWidget(hostingAppWindow);
  }

  collapse(): void {
    Logger.info('overlay collapse called');
    documentTools.toggleWidget();
  }

  open(): void {
    const hostingAppWindow = documentTools.getHostingAppWindow();
    documentTools.openWidget(hostingAppWindow);
  }

  move(): void {
    documentTools.move();
  }

  private onStrigoEventHandler = (customEvent: CustomEvent): void => {
    listeners.storageChanged(customEvent?.detail);
  };

  private initEventListeners(hostingAppWindow: Window, academyPanelFrame: HTMLIFrameElement): void {
    listeners.initAcademyPanelLoadedListeners(academyPanelFrame, makeOverlayWidgetVisible);
    listeners.initHostEventListeners(hostingAppWindow);
    hostingAppWindow.addEventListener(EVENT_TYPES.OVERLAY_WIDGET_EVENT, this.onStrigoEventHandler);
  }

  private removeEventListeners(hostingAppWindow: Window): void {
    listeners.removeHostEventListeners();
    hostingAppWindow.removeEventListener(EVENT_TYPES.OVERLAY_WIDGET_EVENT, this.onStrigoEventHandler);
  }
}

export default new OverlayWidget();
