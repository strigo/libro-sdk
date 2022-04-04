import { Logger } from "../../../services/logger";
import * as documentTools from "../document/document";
import * as urlTools from "../url/url";
import * as listeners from "../listeners/listeners";
import * as configManager from "../config/config";
import * as sessionManager from "../session/session";
import { OverlayWidget } from "./widget.types";
import { SDK_TYPES } from "../../strigo/types";
import { EVENT_TYPES } from "../listeners/listeners.types";

const OverlayWidget: OverlayWidget = {
  init: function () {
    Logger.info("overlay init called");
    const config = configManager.getConfig();
    if (config) {
      window.Strigo.setup(config);
    }

    return SDK_TYPES.OVERLAY;
  },

  setup: function ({ development, version }) {
    Logger.info("overlay setup called");
    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: urlTools.generateWidgetCssURL(development, version)
    });
    const academyPlayerFrame = documentTools.createWidget(urlTools.generateStrigoIframeURL(configManager.getConfig()));
    this.initEventListeners(academyPlayerFrame);
  },

  shutdown: function () {
    Logger.info("overlay shutdown called");
    documentTools.removeWidget();
    sessionManager.setPanelClosed();
  },

  open: function () {
    documentTools.openWidget();
  },

  hideLoader: function() {
    sessionManager.setSessionValue("isLoading", false);
    document.getElementById("strigo-widget").classList.add("slide-in"); 
    document.getElementById("strigo-widget").classList.add("loaded");
  },

  initEventListeners: function (academyPlayerFrame: HTMLIFrameElement) {
    listeners.initStrigoAppEventListeners(academyPlayerFrame);
    listeners.initHostEventListeners();
    window.addEventListener(EVENT_TYPES.OVERLAY_WIDGET_EVENT, (customEvent) => {
      listeners.storageChanged(customEvent?.detail);
    });
  }
};

export default OverlayWidget;
