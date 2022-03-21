import { SDKSetupData, SDK_TYPES } from "./types";
import * as documentTools from "../modules/document/document";
import * as urlTools from "../modules/url/url";
import * as configManager from "../modules/config/config";
import * as sessionManager from "../modules/session/session";
import * as eventsStorageManager from "../modules/events-storage/events-storage";
import iframeWidget from "../modules/widgets/iframe";
import overlayWidget from "../modules/widgets/overlay";
import { Logger } from "../../services/logger";

import { WIDGET_FLAVORS } from "../modules/session/session.types";

export namespace Strigo {
  export let SDKType: SDK_TYPES;

  export function init() {
    Logger.info("init called - main");
    eventsStorageManager.init();
    if (window.Strigo?.initialized) {
      return;
    }
    window.Strigo.initialized = true;

    // Check if other instances exists
    switch (sessionManager.getWidgetFlavor()) {
      case WIDGET_FLAVORS.IFRAME: {
        SDKType = iframeWidget.init();
        break;
      }
      case WIDGET_FLAVORS.OVERLAY: {
        SDKType = SDK_TYPES.OVERLAY;
        overlayWidget.init();
        break;
      }
      default:
        break;
    }
  }

  export function setup(data: SDKSetupData) {
    // Setup won't do anything for now (subscriber will only be able to send events later)
    if (SDKType === SDK_TYPES.CHILD || (SDKType === SDK_TYPES.OVERLAY && sessionManager.isPanelOpen())) {
      Logger.info("panel is already opened");
      return;
    }

    Logger.info("setup started");

    const { email, token, development = false, version } = data;

    // Get init script parameters
    const { webApiKey, subDomain, selectedWidgetFlavor} = urlTools.extractInitScriptParams();

    if (!development && (!email || !token || !webApiKey || !subDomain || !selectedWidgetFlavor)) {
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
      version,
      selectedWidgetFlavor
    });

    const widgetFlavor = documentTools.getWidgetFlavor(selectedWidgetFlavor);
    sessionManager.setup({
      currentUrl: configManager.getConfig().initSite.href,
      isPanelOpen: true,
      isLoading: true,
      widgetFlavor
    });

    switch (widgetFlavor) {
      case WIDGET_FLAVORS.IFRAME: {
        iframeWidget.setup({
          version,
          development
        });
        break;
      }
      case WIDGET_FLAVORS.OVERLAY: {
        overlayWidget.setup({
          version,
          development
        });
        break;
      }
      default: {
        Logger.error("widgetFlavor is not supported - setup");
        break;
      }
    }

    Logger.info("setup finished");
  }
  export function shutdown() {
    Logger.info("shutdown called");
    if (SDKType === SDK_TYPES.CHILD) {
      return window.parent.postMessage("close", "*");
    }
    const widgetFlavor = sessionManager.getWidgetFlavor();
    configManager.clearConfig();
    sessionManager.clearSession();

    switch (widgetFlavor) {
      case WIDGET_FLAVORS.IFRAME: {
        iframeWidget.shutdown();
        break;
      }
      case WIDGET_FLAVORS.OVERLAY: {
        overlayWidget.shutdown();
        break;
      }
      default: {
        Logger.error("widgetFlavor is not supported");
        break;
      }
    }
  }
  export function sendEvent(eventName) {
    eventsStorageManager.pushEventValue({ eventName });
    Logger.debug("sendEvent called", { eventName });
  }
}
