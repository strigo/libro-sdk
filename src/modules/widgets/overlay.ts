import interact from 'interactjs';

import { Logger } from '../../services/logger';
import * as documentTools from '../document/document';
import * as noCodeAssessment from '../no-code-assessment/no-code-assessment';
import * as urlTrigger from '../url-trigger/url-trigger';
import * as urlTools from '../url/url';
import * as listeners from '../listeners/listeners';
import * as configManager from '../config/config';
import { SdkTypes } from '../../strigo/types';

import { IOverlayWidget } from './widget.types';

const MINIMUM_WIDTH = 342;

function postDockableStateToStrigo(): void {
  Logger.info('Posting dockable state to Strigo', {});
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

    const localConfig = configManager.getLocalStorageConfig();
    const strigoPreviewUserToken = sessionStorage.getItem('strigoPreviewUserToken');
    const isPreview = !!strigoPreviewUserToken;
    const academyPlayerFrame = documentTools.createWidget(
      urlTools.generateStrigoIframeURL(
        {
          ...localConfig,
          user: {
            token: {
              token: strigoPreviewUserToken ? strigoPreviewUserToken : localConfig.user.token.token,
              expiration: localConfig.user.token.expiration,
            },

            email: localConfig.user.email,
          },
        },
        isPreview
      )
    );

    const hostingAppWindow = documentTools.getHostingAppWindow();
    this.initEventListeners(hostingAppWindow, academyPlayerFrame);
    Logger.info('adding assessment document observer');
    noCodeAssessment.initDocumentObserver(hostingAppWindow);
    urlTrigger.initUrlTriggerObserver(hostingAppWindow);
    documentTools.initNavigationObserver(hostingAppWindow);

    Logger.info('assessment document observer added');
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
    documentTools.collapseWidget();
  }

  open(): void {
    documentTools.openWidget();
    postDockableStateToStrigo();
  }

  move(): void {
    documentTools.move();
  }

  private initEventListeners(hostingAppWindow: Window, academyPanelFrame: HTMLIFrameElement): void {
    listeners.initAcademyPanelLoadedListeners(academyPanelFrame, postDockableStateToStrigo);
    listeners.initHostEventListeners(hostingAppWindow);
  }

  private removeEventListeners(hostingAppWindow: Window): void {
    listeners.removeHostEventListeners();
  }
}

export default new OverlayWidget();
