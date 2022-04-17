import { LoggingConfig } from '../modules/config/config.types';
import * as configManager from '../modules/config/config';

class Logger {
  url: string;

  constructor(config?: LoggingConfig) {
    this.url = config?.url;
  }

  setup(config: LoggingConfig) {
    this.url = config.url;
  }

  logToRemote(level: string, message: string, context: {}) {
    fetch(this.url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        level,
        message,
        context,
      }),
    })
      .then((result) => {
        if (!result.ok) {
          console.warn('Logging to Strigo failed', { result });
        }
      })
      .catch((error) => {
        console.warn('Logging to Strigo failed', { err: error });
      });
  }

  logToConsole(level: string, message: string, context: {}) {
    const enrichedMessage = `${new Date().toISOString()} - ${message}`;
    console[level](enrichedMessage, context ? `\n${JSON.stringify(context)}` : '');
  }

  getDefaultContext() {
    const config = configManager.getConfig();

    if (!config) {
      return {};
    }

    const { token, subDomain, initSite, development, version, selectedWidgetFlavor } = config;

    // Explicitly not adding email and webApiKey because of GDPR and privacy concerns
    return {
      token: token.token,
      initSite: initSite.href,
      subDomain,
      development,
      version,
      selectedWidgetFlavor,
    };
  }

  /**
   * Writes a log message to a remote logging solution and the browser's console.
   *
   * @param {String} level a `console.log` acceptable level level (negating `trace`).
   * @param {String} message the message to convey.
   * @param {Object} context the object to provide as context.
   */
  log(level: string, message: string, context: {}) {
    const enrichedContext = { ...this.getDefaultContext(), ...context };

    try {
      if (this.url && !configManager.getConfig()?.development) {
        this.logToRemote(level, message, enrichedContext);
      }

      // also console.log always
      this.logToConsole(level, `Academy - ${message}`, enrichedContext);
    } catch (err) {
      console.log('Logging error:', { err: err });
    }
  }

  debug(message: string, context = {}) {
    this.log('debug', message, context);
  }

  info(message: string, context = {}) {
    this.log('info', message, context);
  }

  warn(message: string, context = {}) {
    this.log('warn', message, context);
  }

  error(message: string, context = {}) {
    this.log('error', message, context);
  }
}

const LoggerInstance = new Logger();

export { LoggerInstance as Logger };
