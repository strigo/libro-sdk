import { Logger } from "../../services/logger";
import * as documentTools from "../document/document";
import * as urlTools from "../url/url";
import * as listeners from "../listeners/listeners";
import * as configManager from "../config/config";
import * as sessionManager from "../session/session";
import { IOverlayWidget } from "./widget.types";
import { SDK_TYPES } from "../../strigo/types";
import { EVENT_TYPES } from "../listeners/listeners.types";

function makeOverlayWidgetVisible() {
  document.getElementById("strigo-widget").classList.add("slide-in"); 
  document.getElementById("strigo-widget").classList.add("loaded");  
}

class OverlayWidget implements IOverlayWidget  {
  init(){
    Logger.info("overlay init called");
    const config = configManager.getConfig();
    if (config) {
      window.Strigo.setup(config);
    }

    return SDK_TYPES.OVERLAY;
  }

  setup({ development, version }) {
    Logger.info("overlay setup called");
    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: urlTools.generateWidgetCssURL(development, version)
    });
    const academyPlayerFrame = documentTools.createWidget(urlTools.generateStrigoIframeURL(configManager.getConfig()));
    this.initEventListeners(academyPlayerFrame);
  }

  shutdown() {
    Logger.info("overlay shutdown called");
    documentTools.removeWidget();
    sessionManager.setPanelClosed();
  }

  open() {
    documentTools.openWidget();
  }

  private initEventListeners(academyPlayerFrame: HTMLIFrameElement) {
    listeners.initAcademyPlayerLoadedListeners(academyPlayerFrame, makeOverlayWidgetVisible);
    listeners.initHostEventListeners();
    window.addEventListener(EVENT_TYPES.OVERLAY_WIDGET_EVENT, (customEvent) => {
      listeners.storageChanged(customEvent?.detail);
    });
  }
};

export default new OverlayWidget();
