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
  /**
   * Writes a log message to the browser's console.
   * The severity level is omitted here as browsers colorize according to severity anyway.
   *
   * Example (local console):
   * 2020-04-15T06:52:21.905Z - Message...
   *   key1=value1
   *   key2=value2
   *
   * @param {String} severity a `console.log` acceptable severity level (negating `trace`).
   * @param {String} message the message to convey.
   * @param {Object} context the object to provide as context.
   */
  log(severity: string, message: any, context: {}) {
    try {
      if (this.url && this.token && !configManager.getConfig().development) {
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
            dt: new Date().toISOString()
          })
        });

        //TODO: do we wanna log to console too? maybe only from a certain severity level? or only for dev?
        return;
      }

      // If no url or token is provided, fallback to console.log
      const enrichedMessage = `${new Date().toISOString()} - ${message}`;
      console[severity](enrichedMessage, context ? `\n${JSON.stringify(context)}` : "");
    } catch (err) {
      console.log("Logging error:", err);
    }
  }

  debug(message: any, context = {}) {
    this.log("debug", message, context);
  }

  info(message: any, context = {}) {
    this.log("info", message, context);
  }

  warn(message: any, context = {}) {
    this.log("warn", message, context);
  }

  error(message: any, context = {}) {
    this.log("error", message, context);
  }
}

const LoggerInstance = new Logger();

export { LoggerInstance as Logger };
