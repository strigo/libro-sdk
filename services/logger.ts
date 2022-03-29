import { LoggingConfig } from "../src/modules/config/config.types";
import * as configManager from "../src/modules/config/config";

class Logger {
  url: string;
  token: string;

  constructor(config?: LoggingConfig) {
    this.url = config?.url;
    this.token = config?.token;
  }

  setup(config: LoggingConfig) {
    this.url = config.url;
    this.token = config.token;
  }

  logToRemote(severity: string, message: string, context: {}) {
    fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      },
      body: JSON.stringify({
        severity,
        message,
        context,
        timestamp: new Date().toISOString()
      })
    }).then((result) => {
      if (!result.ok) {
        console.warn("Logging to Strigo failed");
      }
    });
  }

  logToConsole(severity: string, message: string, context: {}) {
    const enrichedMessage = `${new Date().toISOString()} - ${message}`;
    console[severity](enrichedMessage, context ? `\n${JSON.stringify(context)}` : "");
  }

  /**
   * Writes a log message to a remote logging solution and the browser's console.
   *
   * @param {String} severity a `console.log` acceptable severity level (negating `trace`).
   * @param {String} message the message to convey.
   * @param {Object} context the object to provide as context.
   */
  log(severity: string, message: string, context: {}) {
    try {
      if (this.url && this.token && !configManager.getConfig()?.development) {
        this.logToRemote(severity, message, context);
      }

      // also console.log always
      this.logToConsole(severity, `Academy - ${message}`, context);
    } catch (err) {
      console.log("Logging error:", { err: err });
    }
  }

  debug(message: string, context = {}) {
    this.log("debug", message, context);
  }

  info(message: string, context = {}) {
    this.log("info", message, context);
  }

  warn(message: string, context = {}) {
    this.log("warn", message, context);
  }

  error(message: string, context = {}) {
    this.log("error", message, context);
  }
}

const LoggerInstance = new Logger();

export { LoggerInstance as Logger };
