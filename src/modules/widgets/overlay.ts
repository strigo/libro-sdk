import { Logger } from "../../../services/logger";
import * as documentTools from "../document/document";
import * as urlTools from "../url/url";
import * as listeners from "../listeners/listeners";
import * as configManager from "../config/config";
import * as sessionManager from "../session/session";

export default {
  init: function () {
    Logger.info("overlay init called");
    const config = configManager.getConfig();
    if (config) {
      window.Strigo.setup(config);
    }
  },
  setup: function ({ development, version }) {
    Logger.info("overlay setup called");
    documentTools.appendCssFile({
      parentElement: documentTools.getHeadElement(),
      url: urlTools.generateWidgetCssURL(development, version)
    });
    const exercisesIframe = documentTools.createWidget(urlTools.generateStrigoIframeURL(configManager.getConfig()));
    listeners.initStrigoAppEventListeners(exercisesIframe);
    listeners.initHostEventListeners();
  },
  shutdown: function () {
    Logger.info("overlay shutdown called");
    documentTools.removeWidget();
    sessionManager.setPanelClosed();
  },
  open: function () {
    documentTools.openWidget();
  }
};
