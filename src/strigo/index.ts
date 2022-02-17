import Split from "split.js";
import { SDKSetupData, SDK_TYPES } from "./types";
import * as documentTools from "../modules/document/document";
import * as urlTools from "../modules/url/url";
import * as configManager from "../modules/config/config";
import * as sessionManager from "../modules/session/session";
import * as eventsStorageManager from "../modules/events-storage/events-storage";

import { CSS_URL, STRIGO_IFRAME_CLASSES, ORIGINAL_WEBSITE_IFRAME_CLASSES } from "./consts";

export namespace Strigo {
  export let SDKType;

  function postEventMessage() {
    const newEvent = eventsStorageManager.getEventValue();
    if (newEvent) {
      console.log("Posting event", newEvent);
      window.frames[0].postMessage(newEvent, "*");
      const poppedEvent = eventsStorageManager.popEventValue();
      if (newEvent.eventName !== poppedEvent.eventName) {
        console.error("Events storage error: popped event doesn't match new event", { newEvent, poppedEvent });
      }
    }
  }

  function postAllEventMessages() {
    while (eventsStorageManager.getEventValue()) {
      postEventMessage();
    }
  }

  function storageChanged({ key, oldValue, newValue }) {
    const newEventsStorage = JSON.parse(newValue)?.events;
    const oldEventsStorage = JSON.parse(oldValue)?.events;
    const difference = newEventsStorage.filter(
      ({ eventName: newEventName }) =>
        !oldEventsStorage.some(({ eventName: oldEventName }) => newEventName === oldEventName)
    );

    if (difference.length > 0) {
      postEventMessage();
    }
  }

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
      minSize: 450
    });

    sessionManager.setup({
      currentUrl: configManager.getConfig().initSite.href,
      isPanelOpen: true
    });

    // Emptying events storage and posting all events
    postAllEventMessages();

    // Listen for events sent (on the HOST)
    window.addEventListener("storage", storageChanged);

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
  export function sendEvent(eventName) {
    eventsStorageManager.pushEventValue({ eventName });
    console.log("sendEvent called", { eventName });
  }
}
