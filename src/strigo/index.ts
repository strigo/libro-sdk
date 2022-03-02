import Split from "split.js";
import { SDKSetupData, SDK_TYPES } from "./types";
import * as documentTools from "../modules/document/document";
import * as urlTools from "../modules/url/url";
import * as configManager from "../modules/config/config";
import * as sessionManager from "../modules/session/session";
import * as eventsStorageManager from "../modules/events-storage/events-storage";
import * as listeners from "../modules/listeners/listeners";
import * as eventsSender from "../modules/events-sender/events-sender";
import { Logger } from "../../services/logger";

import { STRIGO_IFRAME_CLASSES, ORIGINAL_WEBSITE_IFRAME_CLASSES } from "./consts";
import { addLoader } from "../modules/loader/loader";

export namespace Strigo {
  export let SDKType;

  export function init() {
    Logger.info("init called");
    eventsStorageManager.init();
    // Check if other instances exists
    if (sessionManager && sessionManager.isPanelOpen()) {
      Logger.info("SUBSCRIBER SDK");

      // Start as a subscriber
      SDKType = SDK_TYPES.SUBSCRIBER;

      // Dispatch opened event
      window.dispatchEvent(new Event("strigo-opened"));
    } else {
      Logger.info("HOST SDK");

      SDKType = SDK_TYPES.HOST;
      // Auto setup if the config exists
      const config = configManager.getConfig();
      if (config) {
        setup(config);
      }
    }
  }

  export function setup(data: SDKSetupData) {
    // Setup won't do anything for now (subscriber will only be able to send events later)
    if (SDKType === SDK_TYPES.SUBSCRIBER) {
      return;
    }

    Logger.info("setup started");

    const { email, token, development = false, version } = data;

    // Get init script parameters
    const { webApiKey, subDomain } = urlTools.extractInitScriptParams();

    if (!development && (!email || !token || !webApiKey || !subDomain)) {
      Logger.error("Please provide setup data");
      return;
    }

    configManager.setup({
      email,
      initSite: urlTools.getUrlData(),
      token,
      webApiKey,
      subDomain,
      development,
      version
    });

    sessionManager.setup({
      currentUrl: configManager.getConfig().initSite.href,
      isPanelOpen: true,
      isLoading: true
    });

    // Check if iframe is supported
    if (!documentTools.isIframeSupported()) {
      Logger.info("iframe is not supported, trying other ways");
      documentTools.appendCssFile({
        parentElement: documentTools.getHeadElement(),
        url: urlTools.generateWidgetCssURL(development, version)
      });
      documentTools.createWidget(urlTools.generateStrigoIframeURL(configManager.getConfig()));

      return;
    }

    Logger.info("iframe is supported - building the side by side experience");

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
      id: "exercises"
    });

    listeners.initSubscriberEventListeners(exercisesIframe);

    // Append original website Iframe
    documentTools.appendIFrame({
      parentElement: mainDiv,
      url: configManager.getConfig().initSite.href,
      classNames: ORIGINAL_WEBSITE_IFRAME_CLASSES,
      id: "original-site"
    });

    Split(["#exercises", "#original-site"], {
      sizes: [25, 75], // +1280 [20, 80]  -1280 [25, 75]
      maxSize: documentTools.getSplitMaxSizes(),
      minSize: documentTools.getSplitMinSizes()
    });

    // Init the HOST event listeners
    listeners.initHostEventListeners();

    Logger.info("setup finished");
  }
  export function shutdown() {
    Logger.info("shutdown called");
    configManager.clearConfig();
    sessionManager.clearSession();
    documentTools.reloadPage();
  }
  export function sendEvent(eventName) {
    eventsStorageManager.pushEventValue({ eventName });
    Logger.debug("sendEvent called", { eventName });
  }
}
