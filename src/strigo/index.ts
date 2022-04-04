import { SDKSetupData, SDK_TYPES } from "./types";
import * as documentTools from "../modules/document/document";
import * as urlTools from "../modules/url/url";
import * as configManager from "../modules/config/config";
import * as sessionManager from "../modules/session/session";
import * as eventsStorageManager from "../modules/events-storage/events-storage";
import { Logger } from "../../services/logger";
import { StrigoToken } from "../modules/config/config.types";
import * as widgetFactory from "../modules/widgets/widget-factory";

export namespace Strigo {
  export let SDKType: SDK_TYPES;

  export function init() {
    Logger.info("Started initialization");
    eventsStorageManager.init();

    if (window.Strigo?.initialized) {
      return;
    }
    window.Strigo.initialized = true;

    const widget = widgetFactory.getWidget(sessionManager.getWidgetFlavor());

    if (!widget) {
      Logger.error(`Can't finish initialization. widgetFlavor is not supported.`);
      return;
    }

    SDKType = widget.init();
    Logger.info("Finished initialization");
  }

  async function fetchRemoteConfiguration(token: StrigoToken, development: boolean) {
    try {
      const configDomain = development ? "http://localhost:3000" : "https://app.strigo.io";
      const response = await fetch(`${configDomain}/api/internal/academy/v1/config`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch remote configuration: ${response.statusText}`);
      }

      const configuration = await response.json();
      return configuration.data;
    } catch (err) {
      Logger.warn("Error fetching configuration from Strigo", { err: err });
    }
  }

  export async function setup(data: SDKSetupData) {
    const { email, token, development = false, version } = data;

    if (!token) {
      Logger.error("token is not defined - exiting setup");

      return;
    }

    const configuration = await fetchRemoteConfiguration(token, development);
    if (configuration) {
      const { loggingConfig } = configuration;
      Logger.debug("Configuration fetched from Strigo");
      Logger.setup(loggingConfig);
    }

    // Setup won't do anything for now (child will only be able to send events later)
    if (SDKType === SDK_TYPES.CHILD || (SDKType === SDK_TYPES.OVERLAY && sessionManager.isPanelOpen())) {
      Logger.info("panel is already opened");
      return;
    }

    Logger.info("Started setup");

    // Get init script parameters
    const { webApiKey, subDomain, selectedWidgetFlavor } = urlTools.extractInitScriptParams();

    if (!development && (!email || !token || !webApiKey || !subDomain || !selectedWidgetFlavor)) {
      Logger.error("setup data missing - exiting setup");
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
      selectedWidgetFlavor,
      loggingConfig: configuration?.loggingConfig
    });

    const widgetFlavor = widgetFactory.getWidgetFlavor(selectedWidgetFlavor);
    sessionManager.setup({
      currentUrl: configManager.getConfig().initSite.href,
      isPanelOpen: true,
      isLoading: true,
      widgetFlavor
    });

    const widget = widgetFactory.getWidget(widgetFlavor);

    if (!widget) {
      Logger.error(`Can't finish setup. widgetFlavor is not supported.`);
      return;
    }

    widget.setup({version, development})
    Logger.info("Finished setup");
  }

  export function shutdown() {
    Logger.info("Started shutdown");
    if (SDKType === SDK_TYPES.CHILD) {
      return window.parent.postMessage("close", "*");
    }
    const widgetFlavor = sessionManager.getWidgetFlavor();
    configManager.clearConfig();
    sessionManager.clearSession();

    const widget = widgetFactory.getWidget(widgetFlavor);

    if (!widget) {
      Logger.error(`Can't finish shutdown. widgetFlavor is not supported.`);
      return;
    }

    widget.shutdown();
    Logger.info("Finished shutdown");
  }

  export function sendEvent(eventName) {
    eventsStorageManager.pushEventValue({ eventName });
    Logger.debug("sendEvent called", { eventName });
  }
}
