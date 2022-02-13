import { SDKSetupData, SDK_TYPES } from "./types";
import * as documentTools from "../modules/document/document";
import * as urlTools from "../modules/url/url";
import * as configManager from "../modules/config/config";
import * as sessionManager from "../modules/session/session";
import {
  CSS_URL,
  LIBRO_IFRAME_CLASSES,
  ORIGINAL_WEBSITE_IFRAME_CLASSES
} from "./consts";
// import * as localstorageTools from "../modules/localstorage/localstorage";

export namespace Libro {
  export let SDKType;

  export function init() {
    // Get webApiToken from script

    // Get Script parameters
    // Initialize state
    configManager.init();
    sessionManager.init();
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
      url: CSS_URL
    });

    // Append libro exercises Iframe
    documentTools.appendIFrame({
      parentElement: documentTools.getBodyElement(),
      url: urlTools.generateLibroIframeURL(configManager.getConfig()),
      classNames: LIBRO_IFRAME_CLASSES
    });

    // Append original website Iframe
    documentTools.appendIFrame({
      parentElement: documentTools.getBodyElement(),
      url: configManager.getConfig().initSite.href,
      classNames: ORIGINAL_WEBSITE_IFRAME_CLASSES
    });

    sessionManager.setup({
      currentUrl: configManager.getConfig().initSite.href,
      isPanelOpen: true
    });
    console.log("setup finished");
  }
  export function shutdown() {
    if (SDKType === SDK_TYPES.SUBSCRIBER) {
      // Send message to host
      configManager.clearConfig();
      sessionManager.clearSession();
      documentTools.reloadPage();
    }
    console.log("shutdown called");
  }
  export function sendEvent() {
    console.log("sendEvent called");
  }
}
