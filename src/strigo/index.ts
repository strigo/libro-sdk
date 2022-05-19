import * as rrweb from 'rrweb';

import * as urlTools from '../modules/url/url';
import * as configManager from '../modules/config/config';
import * as sessionManager from '../modules/session/session';
import * as eventsStorageManager from '../modules/events-storage/events-storage';
import { Logger } from '../services/logger';
import * as widgetFactory from '../modules/widgets/widget-factory';
import { MESSAGE_TYPES } from '../modules/listeners/listeners.types';

import { SDKSetupData, SDK_TYPES, IStrigoSDK, SdkConfig } from './types';

class StrigoSDK implements IStrigoSDK {
  private config: SdkConfig = {};

  init(): void {
    try {
      Logger.info('Initializing SDK...');

      if (this.config.initialized) {
        Logger.info('SDK was already initialized');

        return;
      }

      eventsStorageManager.init();

      // Get init script parameters
      const { webApiKey, subDomain, selectedWidgetFlavor } = urlTools.extractInitScriptParams();

      if (!webApiKey || !subDomain || !selectedWidgetFlavor) {
        throw new Error('Init data is missing');
      }

      const widgetFlavor = widgetFactory.getWidgetFlavor(selectedWidgetFlavor);

      configManager.init({ webApiKey, subDomain, selectedWidgetFlavor: widgetFlavor });

      const widget = widgetFactory.getWidget(widgetFlavor);
      this.config.sdkType = widget.init();
      this.config.initialized = true;

      Logger.info('Initialized SDK.');

      // Auto open academy if it was opened in this session before.
      if (this.config.sdkType !== SDK_TYPES.CHILD && sessionManager.isPanelOpen()) {
        this.setup();
      }
    } catch (err) {
      Logger.error('Could not initialize SDK', { err });
    }
  }

  async setup(data?: SDKSetupData): Promise<void> {
    try {
      Logger.info('Starting to setup SDK...');

      // Setup won't do anything for now (child will only be able to send events later)
      if (this.config.isOpen || this.config.sdkType === SDK_TYPES.CHILD) {
        Logger.info('panel is already opened');

        return;
      }

      if (!this.config.initialized) {
        throw new Error('SDK was not initialized');
      }

      const config = configManager.getConfig();

      const { email, token, development = false, version, openWidget = true } = { ...config.user, ...config, ...data };

      if (!development && (!email || !token)) {
        throw new Error('Setup data is missing');
      }

      const configuration = await configManager.fetchRemoteConfiguration(token, development);

      if (configuration) {
        const { loggingConfig } = configuration;
        Logger.debug('Configuration fetched from Strigo');
        Logger.setup(loggingConfig);
      }

      configManager.setup({
        user: {
          email,
          token,
        },
        initSite: urlTools.getUrlData(),
        development,
        version,
        loggingConfig: configuration?.loggingConfig,
      });

      this.config.configured = true;
      Logger.info('Finished SDK setup.');

      if (openWidget) {
        this.open();
      }
    } catch (err) {
      Logger.error('Could not setup SDK', { err });
    }
  }

  open(): void {
    try {
      Logger.info('Opening academy panel...');

      if (!this.config.configured) {
        throw new Error('SDK was not set up');
      }

      if (this.config.isOpen || this.config.sdkType === SDK_TYPES.CHILD) {
        Logger.info('Panel is already opened');

        return;
      }

      const config = configManager.getConfig();

      sessionManager.setup({
        currentUrl: config.initSite.href,
        isPanelOpen: true,
        isLoading: true,
        widgetFlavor: config.selectedWidgetFlavor,
      });

      const widget = widgetFactory.getWidget(config.selectedWidgetFlavor);
      widget.setup({ version: config.version, development: config.development });
      this.config.isOpen = true;
      Logger.info('Opened academy panel.');

      //------- RRWEB POC
      let counter = 0;
      let firstSnapshot = { str: '', raw: [] };
      let events = [];
      console.log('------- RRWEB POC INIT');
      rrweb.record({
        emit(event) {
          // push event into the events array
          events.push(event);
        },
        hooks: {
          mouseInteraction: (params) => {
            const idString = `"id":${params.id}`;
            console.log('---mouse interaction--', { params });
            console.log(
              '----- is in firstSnapshot',
              idString,
              firstSnapshot.str.includes(idString),
              firstSnapshot.str.search(idString),
              firstSnapshot.str.slice(firstSnapshot.str.search(idString) - 50, firstSnapshot.str.search(idString) + 50)
            );
            console.log(
              '--------',
              firstSnapshot.raw.find((el) => {
                console.log(el);

                return el.id === params.id;
              })
            );
          },
        },
      });

      // this function will send events to the backend and reset the events array
      function save(): void {
        const body = JSON.stringify({ events });

        if (counter === 0) {
          firstSnapshot = { str: body, raw: events };
        }

        console.log('Last events recorded:', body);
        events = [];

        counter++;
      }

      // save events every 10 seconds
      setInterval(save, 2 * 1000);

      //----End RRWEB POC
    } catch (err) {
      Logger.error('Could not open academy panel', { err });
    }
  }

  shutdown(): void {
    try {
      Logger.info('Closing academy panel...');

      if (this.config.sdkType === SDK_TYPES.CHILD) {
        window.parent.postMessage(MESSAGE_TYPES.SHUTDOWN, '*');
        Logger.info('Notified parent frame to close academy panel.');

        return;
      }

      if (!this.config.isOpen) {
        Logger.info('Tried to close unopened academy panel');

        return;
      }

      const widget = widgetFactory.getWidget(sessionManager.getWidgetFlavor());
      sessionManager.clearSession();

      widget.shutdown();
      this.config.isOpen = false;
      Logger.info('Closed academy panel.');
    } catch (err) {
      Logger.error('Could not close academy panel', { err });
    }
  }

  destroy(): void {
    try {
      Logger.info('Destroying SDK...');

      if (this.config.sdkType === SDK_TYPES.CHILD) {
        window.parent.postMessage(MESSAGE_TYPES.DESTROY, '*');
        Logger.info('Notified parent frame to destroy SDK.');

        return;
      }

      // Clear the local storage configs before widget shutdown to ensure that
      // the config will be erased even for iframe widget that reloads the page on shutdown.
      configManager.clearConfig();
      eventsStorageManager.clearEventsStorage();
      this.shutdown();

      this.config = {};

      Logger.info('Destroyed SDK.');
    } catch (err) {
      Logger.error('Could not destroy SDK', { err });
    }
  }

  sendEvent(eventName: string): void {
    eventsStorageManager.pushEventValue({ eventName });
    Logger.debug('sendEvent called', { eventName });
  }
}

export const Strigo = new StrigoSDK();
