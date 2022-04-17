import * as urlTools from '../modules/url/url';
import * as configManager from '../modules/config/config';
import * as sessionManager from '../modules/session/session';
import * as eventsStorageManager from '../modules/events-storage/events-storage';
import { Logger } from '../services/logger';
import * as widgetFactory from '../modules/widgets/widget-factory';
import { MESSAGE_TYPES } from '../modules/listeners/listeners.types';

import { SDKSetupData, SDK_TYPES, IStrigoSDK } from './types';

class StrigoSDK implements IStrigoSDK {
  initialized = false;

  sdkType = undefined;

  init(): void {
    try {
      Logger.info('Initializing SDK...');
      eventsStorageManager.init();

      if (this.initialized) {
        return;
      }

      this.initialized = true;

      const widget = widgetFactory.getWidget(sessionManager.getWidgetFlavor());

      this.sdkType = widget.init();
      Logger.info('Initialized SDK.');
    } catch (err) {
      Logger.error('Could not initialize SDK', { err });
    }
  }

  async setup(data: SDKSetupData): Promise<void> {
    try {
      Logger.info('Starting to setup SDK...');
      const { email, token, development = false, version } = data;

      if (!token) {
        throw new Error('Token is not defined');
      }

      const configuration = await configManager.fetchRemoteConfiguration(token, development);

      if (configuration) {
        const { loggingConfig } = configuration;
        Logger.debug('Configuration fetched from Strigo');
        Logger.setup(loggingConfig);
      }

      // Setup won't do anything for now (child will only be able to send events later)
      if (this.sdkType === SDK_TYPES.CHILD || (this.sdkType === SDK_TYPES.OVERLAY && sessionManager.isPanelOpen())) {
        Logger.info('panel is already opened');

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
        loggingConfig: configuration?.loggingConfig,
      });

      const widgetFlavor = widgetFactory.getWidgetFlavor(selectedWidgetFlavor);
      sessionManager.setup({
        currentUrl: configManager.getConfig().initSite.href,
        isPanelOpen: true,
        isLoading: true,
        widgetFlavor,
      });

      const widget = widgetFactory.getWidget(widgetFlavor);
      widget.setup({ version, development });
      Logger.info('Finished SDK setup.');
    } catch (err) {
      Logger.error('Could not setup SDK', { err });
    }
  }

  shutdown(): void {
    try {
      Logger.info('Shutting down SDK...');

      if (this.sdkType === SDK_TYPES.CHILD) {
        window.parent.postMessage(MESSAGE_TYPES.SHUTDOWN, '*');

        return;
      }

      const widget = widgetFactory.getWidget(sessionManager.getWidgetFlavor());
      configManager.clearConfig();
      sessionManager.clearSession();

      widget.shutdown();
      Logger.info('Finished SDK shutdown.');
    } catch (err) {
      Logger.error('Could not shutdown SDK', { err });
    }
  }

  sendEvent(eventName: string): void {
    eventsStorageManager.pushEventValue({ eventName });
    Logger.debug('sendEvent called', { eventName });
  }
}

export const Strigo = new StrigoSDK();
