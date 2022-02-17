import Split from "split.js";
import { SDKSetupData, SDK_TYPES } from "./types";
import * as documentTools from "../modules/document/document";
import * as urlTools from "../modules/url/url";
import * as configManager from "../modules/config/config";
import * as sessionManager from "../modules/session/session";
import * as eventsStorageManager from "../modules/events-storage/events-storage";
import * as listeners from "../modules/listeners/listeners";
import * as eventsSender from "../modules/events-sender/events-sender";

import {
  CSS_URL,
  STRIGO_IFRAME_CLASSES,
  ORIGINAL_WEBSITE_IFRAME_CLASSES,
  MINIMUM_PANE_SIZE_MOBILE,
  MINIMUM_PANE_SIZE_DESKTOP
} from "./consts";

export namespace Strigo {
  export let SDKType;

  export function init() {
    // Get webApiToken from script

    // Get Script parameters
    // Initialize state
    configManager.init();
    sessionManager.init();
    eventsStorageManager.init();
    // Check if other instances exists
    if (sessionManager && sessionManager.isPanelOpen()) {
      // Start as a subscriber
      SDKType = SDK_TYPES.SUBSCRIBER;
    } else {
      SDKType = SDK_TYPES.HOST;
    }
    console.log("init called");
  }

  export function setup(data: SDKSetupData) {
    // Setup won't do anything for now (subscriber will only be able to send events later)
    if (SDKType === SDK_TYPES.SUBSCRIBER) {
      return;
    }

    console.log("setup started");

    const { email, token, webApiKey, subDomain, development = false } = data;

    if (!development && (!email || !token || !webApiKey || !subDomain)) {
      console.log("Please provide setup data");
      return;
    }

    configManager.setup({
      email,
      initSite: urlTools.getUrlData(),
      token,
      webApiKey,
      subDomain,
      development
    });

    // TODO: Add loader?

    // Page manipulation
    documentTools.clearDoc();

    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: development ? `http://localhost:${SDK_HOSTING_PORT}/styles/strigo.css` : CSS_URL
    });

    const mainDiv = documentTools.generatePageStructure();
    // Append strigo exercises Iframe
    documentTools.appendIFrame({
      parentElement: mainDiv,
      url: urlTools.generateStrigoIframeURL(configManager.getConfig()),
      classNames: STRIGO_IFRAME_CLASSES,
      id: "exercises"
    });

    // Append original website Iframe
    documentTools.appendIFrame({
      parentElement: mainDiv,
      url: configManager.getConfig().initSite.href,
      classNames: ORIGINAL_WEBSITE_IFRAME_CLASSES,
      id: "original-site"
    });

    Split(["#exercises", "#original-site"], {
      sizes: [25, 75],
      minSize: documentTools.isMobile() ? MINIMUM_PANE_SIZE_MOBILE : MINIMUM_PANE_SIZE_DESKTOP
    });

    sessionManager.setup({
      currentUrl: configManager.getConfig().initSite.href,
      isPanelOpen: true
    });

    // Emptying events storage and posting all events
    eventsSender.postAllEventMessages();

    // Init the HOST event listeners
    listeners.initHostEventListeners();

    console.log("setup finished");
  }
  export function shutdown() {
    console.log("shutdown called");
    configManager.clearConfig();
    sessionManager.clearSession();
    documentTools.reloadPage();
  }
  export function sendEvent(eventName) {
    eventsStorageManager.pushEventValue({ eventName });
    console.log("sendEvent called", { eventName });
  }
}
