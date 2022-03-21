import Split from "split.js";
import { Logger } from "../../../services/logger";
import * as documentTools from "../document/document";
import { STRIGO_IFRAME_CLASSES, ORIGINAL_WEBSITE_IFRAME_CLASSES } from "../../strigo/consts";
import { addLoader } from "../loader/loader";
import * as configManager from "../config/config";
import * as sessionManager from "../session/session";
import * as listeners from "../listeners/listeners";
import * as urlTools from "../url/url";
import { SDK_TYPES } from "../../strigo/types";

export default {
  init: function () {
    let SDKType: SDK_TYPES;

    if (sessionManager.isPanelOpen()) {
      Logger.info("SUBSCRIBER SDK");

      // Start as a subscriber
      SDKType = SDK_TYPES.CHILD;

      // Dispatch opened event
      window.dispatchEvent(new Event("strigo-opened"));
    } else {
      Logger.info("HOST SDK");

      SDKType = SDK_TYPES.PARENT;
      // Auto setup if the config exists
      const config = configManager.getConfig();
      if (config) {
        window.Strigo.setup(config);
      }
    }
    return SDKType;
  },
  setup: function ({ development, version }) {
    Logger.info("widget - iframe - setup");

    // Page manipulation
    documentTools.clearDoc();

    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: urlTools.generateCssURL(development, version)
    });

    addLoader();

    const mainDiv = documentTools.generatePageStructure();
    // Append strigo exercises Iframe
    const exercisesIframe = documentTools.appendIFrame({
      parentElement: mainDiv,
      url: urlTools.generateStrigoIframeURL(configManager.getConfig()),
      classNames: STRIGO_IFRAME_CLASSES,
      id: "strigo-exercises"
    });

    // Append original website Iframe
    documentTools.appendIFrame({
      parentElement: mainDiv,
      url: configManager.getConfig().initSite.href,
      classNames: ORIGINAL_WEBSITE_IFRAME_CLASSES,
      id: "original-site"
    });

    Split(["#strigo-exercises", "#original-site"], {
      sizes: [25, 75],
      maxSize: documentTools.getSplitMaxSizes(),
      minSize: documentTools.getSplitMinSizes(),
      gutterSize: 2
    });

    listeners.initStrigoAppEventListeners(exercisesIframe);
    listeners.initHostEventListeners();
  },
  shutdown: function () {
    Logger.info("widget - iframe - shutdown");
    documentTools.reloadPage();
  }
};
