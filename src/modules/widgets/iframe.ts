import Split from 'split.js';

import { Logger } from '../../services/logger';
import * as documentTools from '../document/document';
import { STRIGO_IFRAME_CLASSES, ORIGINAL_WEBSITE_IFRAME_CLASSES } from '../../strigo/consts';
import { hideLoader, showLoader } from '../loader/loader';
import * as configManager from '../config/config';
import * as listeners from '../listeners/listeners';
import * as urlTools from '../url/url';
import { SDK_TYPES } from '../../strigo/types';
import { EVENT_TYPES } from '../listeners/listeners.types';

import { IStrigoWidget } from './widget.types';

class IframeWidget implements IStrigoWidget {
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

    Split(['#strigo-exercises', '#original-site'], {
      sizes: [25, 75],
      maxSize: documentTools.getSplitMaxSizes(),
      minSize: documentTools.getSplitMinSizes(),
      gutterSize: 2,
    });

    this.initEventListeners(academyPlayerFrame, childFrame);
  }

  shutdown(): void {
    Logger.info('iframe shutdown called');
    documentTools.reloadPage();
  }

  private initEventListeners(academyPlayerFrame: HTMLIFrameElement, childFrame: HTMLIFrameElement): void {
    listeners.initAcademyPlayerLoadedListeners(academyPlayerFrame, hideLoader);
    listeners.initChildEventListeners(childFrame);
    listeners.initHostEventListeners();
    window.addEventListener(EVENT_TYPES.STORAGE, listeners.storageChanged);
  }
}

export default new IframeWidget();
