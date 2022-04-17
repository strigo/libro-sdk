import Split from 'split.js';

import { Logger } from '../../services/logger';
import * as documentTools from '../document/document';
import { STRIGO_IFRAME_CLASSES, ORIGINAL_WEBSITE_IFRAME_CLASSES } from '../../strigo/consts';
import { hideLoader, showLoader } from '../loader/loader';
import * as configManager from '../config/config';
import * as sessionManager from '../session/session';
import * as listeners from '../listeners/listeners';
import * as urlTools from '../url/url';
import { SDK_TYPES } from '../../strigo/types';
import { EVENT_TYPES } from '../listeners/listeners.types';

import { IStrigoWidget } from './widget.types';

class IframeWidget implements IStrigoWidget {
  init() {
    let SDKType: SDK_TYPES;

    if (sessionManager.isPanelOpen()) {
      Logger.info('Child SDK window');

      // Start as a subscriber
      SDKType = SDK_TYPES.CHILD;

      // Dispatch opened event
      window.dispatchEvent(new Event('strigo-opened'));
    } else {
      Logger.info('Parent SDK window');

      SDKType = SDK_TYPES.PARENT;
      // Auto setup if the config exists
      const config = configManager.getConfig();

      if (config) {
        window.Strigo.setup(config);
      }
    }

    return SDKType;
  }

  setup({ development, version }) {
    Logger.info('iframe setup started');

    // Page manipulation
    documentTools.clearDoc();

    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: urlTools.generateCssURL(development, version),
    });

    showLoader();

    const mainDiv = documentTools.generatePageStructure();
    // Append academy player Iframe
    const academyPlayerFrame = documentTools.appendIFrame({
      parentElement: mainDiv,
      url: urlTools.generateStrigoIframeURL(configManager.getConfig()),
      classNames: STRIGO_IFRAME_CLASSES,
      id: 'strigo-exercises',
    });

    // Append original website Iframe
    documentTools.appendIFrame({
      parentElement: mainDiv,
      url: configManager.getConfig().initSite.href,
      classNames: ORIGINAL_WEBSITE_IFRAME_CLASSES,
      id: 'original-site',
    });

    Split(['#strigo-exercises', '#original-site'], {
      sizes: [25, 75],
      maxSize: documentTools.getSplitMaxSizes(),
      minSize: documentTools.getSplitMinSizes(),
      gutterSize: 2,
    });

    this.initEventListeners(academyPlayerFrame);
  }

  shutdown() {
    Logger.info('iframe shutdown called');
    documentTools.reloadPage();
  }

  private initEventListeners(academyPlayerFrame: HTMLIFrameElement) {
    listeners.initAcademyPlayerLoadedListeners(academyPlayerFrame, hideLoader);
    listeners.initHostEventListeners();
    window.addEventListener(EVENT_TYPES.STORAGE, listeners.storageChanged);
  }
}

export default new IframeWidget();
