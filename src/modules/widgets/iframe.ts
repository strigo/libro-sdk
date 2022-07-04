import Split from 'split.js';

import { Logger } from '../../services/logger';
import * as documentTools from '../document/document';
import { STRIGO_IFRAME_CLASSES, ORIGINAL_WEBSITE_IFRAME_CLASSES, ACADEMY_HAT } from '../../strigo/consts';
import { hideLoader, showLoader } from '../loader/loader';
import * as configManager from '../config/config';
import * as listeners from '../listeners/listeners';
import * as urlTools from '../url/url';
import { SDK_TYPES } from '../../strigo/types';
import { EVENT_TYPES } from '../listeners/listeners.types';

import { IStrigoWidget } from './widget.types';

function setupResizeFunctionality(): Split.Instance {
  return Split(['#strigo-exercises', '#original-site'], {
    sizes: [25, 75],
    maxSize: documentTools.getSplitMaxSizes(),
    minSize: documentTools.getSplitMinSizes(),
    gutterSize: 2,
  });
}

async function makeIframeWidgetVisible(): Promise<void> {
  await hideLoader();
  const strigoIframe = document.getElementById('strigo-exercises') as HTMLIFrameElement;
  strigoIframe.contentWindow.postMessage({ dockable: 'false' }, '*');
}

class IframeWidget implements IStrigoWidget {
  splitInstance: Split.Instance;

  init(): SDK_TYPES {
    let SDKType: SDK_TYPES;

    if (urlTools.isStrigoChildIframe()) {
      Logger.info('Child SDK window');

      // Start as a subscriber
      SDKType = SDK_TYPES.CHILD;

      // Dispatch opened event
      window.dispatchEvent(new Event('strigo-opened'));

      // Remove child iframe query param from the url for it to be less intrusive into customer's application
      urlTools.removeStrigoChildIframeParam();
    } else {
      Logger.info('Parent SDK window');

      SDKType = SDK_TYPES.PARENT;
    }

    return SDKType;
  }

  setup({ development, version }): void {
    Logger.info('iframe setup started');

    // Page manipulation
    documentTools.clearDoc();

    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: urlTools.generateCssURL(development, version),
    });

    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: urlTools.generateAcademyHatCssURL(development, version),
    });

    showLoader();

    const config = configManager.getConfig();

    const mainDiv = documentTools.generatePageStructure();
    // Append academy player Iframe
    const academyPlayerFrame = documentTools.appendIFrame({
      parentElement: mainDiv,
      url: urlTools.generateStrigoIframeURL(config),
      classNames: STRIGO_IFRAME_CLASSES,
      id: 'strigo-exercises',
    });

    // Append child website Iframe
    const childFrame = documentTools.appendIFrame({
      parentElement: mainDiv,
      url: urlTools.generateStrigoChildIframeURL(config.initSite.href),
      classNames: ORIGINAL_WEBSITE_IFRAME_CLASSES,
      id: 'original-site',
    });

    // Create academy hat
    const academyHatDiv = document.createElement('div');
    academyHatDiv.className = 'strigo-academy-hat align-left';
    academyHatDiv.id = 'strigo-academy-hat';

    academyHatDiv.onclick = () => {
      const academyHat = document.getElementById('strigo-academy-hat');
      academyHat.classList.toggle('slide-in');

      this.splitInstance = setupResizeFunctionality();
    };

    const academyHatIcon = document.createElement('div');
    academyHatIcon.className = 'strigo-academy-hat-icon';
    academyHatIcon.id = 'strigo-academy-hat-icon';
    academyHatIcon.innerHTML = ACADEMY_HAT;
    academyHatDiv.appendChild(academyHatIcon);

    mainDiv.appendChild(academyHatDiv);

    this.splitInstance = setupResizeFunctionality();

    this.initEventListeners(academyPlayerFrame, childFrame);
  }

  move: () => void;

  collapse(): void {
    if (this.splitInstance) {
      // Can't override the minSize therefore we destroy and create a new instance
      this.splitInstance.destroy();
      this.splitInstance = Split(['#strigo-exercises', '#original-site'], {
        sizes: [25, 75],
        minSize: 0,
        gutterSize: 0,
      });
      this.splitInstance.collapse(0);
      const academyHat = document.getElementById('strigo-academy-hat');
      academyHat.classList.toggle('slide-in');
    }
  }

  shutdown(): void {
    Logger.info('iframe shutdown called');
    documentTools.reloadPage();
  }

  private initEventListeners(academyPlayerFrame: HTMLIFrameElement, childFrame: HTMLIFrameElement): void {
    listeners.initAcademyPlayerLoadedListeners(academyPlayerFrame, makeIframeWidgetVisible);
    listeners.initChildEventListeners(childFrame);
    listeners.initHostEventListeners();
    window.addEventListener(EVENT_TYPES.STORAGE, listeners.storageChanged);
  }
}

export default new IframeWidget();
