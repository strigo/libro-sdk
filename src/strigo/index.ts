import { SDKSetupData, SDK_TYPES } from "./types";
import * as urlTools from "../modules/url/url";
import * as configManager from "../modules/config/config";
import * as sessionManager from "../modules/session/session";
import * as eventsStorageManager from "../modules/events-storage/events-storage";
import { Logger } from "../../services/logger";
import { StrigoToken } from "../modules/config/config.types";
import * as widgetFactory from "../modules/widgets/widget-factory";
import { MESSAGE_TYPES } from "../modules/listeners/listeners.types";

export namespace Strigo {
  export let SDKType: SDK_TYPES;

  export function init() {
    try {
      Logger.info("Initializing SDK...");
      eventsStorageManager.init();
  
      if (window.Strigo?.initialized) {
        return;
      }
      window.Strigo.initialized = true;
  
      const widget = widgetFactory.getWidget(sessionManager.getWidgetFlavor());
  
      SDKType = widget.init();
      Logger.info("Initialized SDK.");
    }catch(err) {
      Logger.error('Could not initialize SDK', {err});
    }
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
    try {
      Logger.info("Starting to setup SDK...");
      const { email, token, development = false, version } = data;
  
      if (!token) {
        throw new Error('Token is not defined');
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

      // Get init script parameters
      const { webApiKey, subDomain, selectedWidgetFlavor } = urlTools.extractInitScriptParams();
  
      if (!development && (!email || !token || !webApiKey || !subDomain || !selectedWidgetFlavor)) {
        throw new Error('Setup data is missing');
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
      widget.setup({version, development})
      Logger.info("Finished SDK setup.");
    } catch(err) {
      Logger.error('Could not setup SDK', {err});
    }
  }

  export function shutdown() {
    try{
      Logger.info("Shutting down SDK...");

      if (SDKType === SDK_TYPES.CHILD) {
        window.parent.postMessage(MESSAGE_TYPES.SHUTDOWN, "*");
        return;
      }

      const widget = widgetFactory.getWidget(sessionManager.getWidgetFlavor());
      configManager.clearConfig();
      sessionManager.clearSession();
  
      widget.shutdown();
      Logger.info("Finished SDK shutdown.");
    }catch(err){
      Logger.error('Could not shutdown SDK', {err});
    }
  }

  export function sendEvent(eventName) {
    eventsStorageManager.pushEventValue({ eventName });
    Logger.debug("sendEvent called", { eventName });
  }
}
