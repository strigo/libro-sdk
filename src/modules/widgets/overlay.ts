import interact from 'interactjs';

import { Logger } from '../../services/logger';
import * as documentTools from '../document/document';
import * as noCodeAssessment from '../no-code-assessment/no-code-assessment';
import * as urlTools from '../url/url';
import * as listeners from '../listeners/listeners';
import * as configManager from '../config/config';
import { SdkTypes } from '../../strigo/types';
import { EventTypes } from '../listeners/listeners.types';

import { IOverlayWidget } from './widget.types';

const MINIMUM_WIDTH = 342;

function postDockableStateToStrigo(): void {
  console.log('Posting dockable state to Strigo...');
  const dockingSide = configManager.getConfigValue('dockingSide');
  const strigoIframe = document.getElementById('strigo-exercises') as HTMLIFrameElement;
  strigoIframe.contentWindow.postMessage({ dockable: true, dockingSide }, '*');
}

function setupResizeFunctionality(): void {
  const [maxWidth] = documentTools.getSplitMaxSizes();

  interact('#strigo-widget').resizable({
    // resize from left edge
    edges: { left: '#strigo-collapse-div', right: '#strigo-collapse-div.align-left', bottom: false, top: false },
    listeners: {
      move(event) {
        const target = event.target;
        target.style.width = `${
          event.rect.width < MINIMUM_WIDTH ? MINIMUM_WIDTH : event.rect.width > maxWidth ? maxWidth : event.rect.width
        }px`;
      },
      start() {
        const strigoExercisesIframe = document.getElementById('strigo-exercises');
        strigoExercisesIframe.style.pointerEvents = 'none';
      },
      end() {
        const strigoExercisesIframe = document.getElementById('strigo-exercises');
        strigoExercisesIframe.style.pointerEvents = 'auto';
      },
    },
    modifiers: [
      interact.modifiers.restrictEdges({
        outer: 'parent',
      }),
    ],
  });
}

class OverlayWidget implements IOverlayWidget {
  private documentObserver: MutationObserver;

  init(): SdkTypes {
    Logger.info('overlay init called');

    return SdkTypes.OVERLAY;
  }

  setup({ version }): void {
    Logger.info('overlay setup called');

    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: urlTools.generateWidgetCssURL(version),
    });

    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: urlTools.generateAcademyHatCssURL(version),
    });

    const academyPlayerFrame = documentTools.createWidget(
      urlTools.generateStrigoIframeURL(configManager.getLocalStorageConfig())
    );
    const hostingAppWindow = documentTools.getHostingAppWindow();
    this.initEventListeners(hostingAppWindow, academyPlayerFrame);
    console.log('adding observer');
    noCodeAssessment.initDocumentObserver(hostingAppWindow);
    documentTools.initNavigationObserver(hostingAppWindow);

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
    documentTools.openWidget();
    postDockableStateToStrigo();
  }

  move(): void {
    documentTools.move();
  }

  private onStrigoEventHandler = (customEvent: CustomEvent): void => {
    listeners.storageChanged(customEvent?.detail);
  };

  private initEventListeners(hostingAppWindow: Window, academyPanelFrame: HTMLIFrameElement): void {
    listeners.initAcademyPanelLoadedListeners(academyPanelFrame, postDockableStateToStrigo);
    listeners.initHostEventListeners(hostingAppWindow);
    hostingAppWindow.addEventListener(EventTypes.OVERLAY_WIDGET_EVENT, this.onStrigoEventHandler);
  }

  private removeEventListeners(hostingAppWindow: Window): void {
    listeners.removeHostEventListeners();
    hostingAppWindow.removeEventListener(EventTypes.OVERLAY_WIDGET_EVENT, this.onStrigoEventHandler);
  }
}

export default new OverlayWidget();
