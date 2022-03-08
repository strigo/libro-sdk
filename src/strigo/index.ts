import { SDKSetupData, SDK_TYPES } from "./types";
import * as documentTools from "../modules/document/document";
import * as urlTools from "../modules/url/url";
import * as configManager from "../modules/config/config";
import * as sessionManager from "../modules/session/session";
import * as eventsStorageManager from "../modules/events-storage/events-storage";
import iframeWidget from "../modules/widgets/iframe";
import overlayWidget from "../modules/widgets/overlay";
import { Logger } from "../../services/logger";

import { WIDGET_TYPES } from "../modules/session/session.types";

export namespace Strigo {
  export let SDKType: SDK_TYPES;

  export function init() {
    Logger.info("init called");
    eventsStorageManager.init();
    // Check if other instances exists
    switch (sessionManager.getWidgetType()) {
      case WIDGET_TYPES.IFRAME: {
        SDKType = iframeWidget.init();
      }
      case WIDGET_TYPES.OVERLAY: {
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

    const widgetType = documentTools.getWidgetType();
    sessionManager.setup({
      currentUrl: configManager.getConfig().initSite.href,
      isPanelOpen: true,
      isLoading: true,
      widgetType
    });

    switch (widgetType) {
      case WIDGET_TYPES.IFRAME: {
        iframeWidget.setup({
          version,
          development
        });
        break;
      }
      case WIDGET_TYPES.OVERLAY: {
        overlayWidget.setup({
          version,
          development
        });
        break;
      }
      default: {
        Logger.error("widgetType is not supported - setup");
        break;
      }
    }

    Logger.info("setup finished");
  }
  export function shutdown() {
    Logger.info("shutdown called");
    const widgetType = sessionManager.getWidgetType();
    configManager.clearConfig();
    sessionManager.clearSession();

    switch (widgetType) {
      case WIDGET_TYPES.IFRAME: {
        iframeWidget.shutdown();
        break;
      }
      case WIDGET_TYPES.OVERLAY: {
        overlayWidget.shutdown();
        break;
      }
      default: {
        Logger.error("widgetType is not supported");
        break;
      }
    }
  }
  export function sendEvent(eventName) {
    eventsStorageManager.pushEventValue({ eventName });
    Logger.debug("sendEvent called", { eventName });
  }
}
