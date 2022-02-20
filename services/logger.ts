export const Logger = {
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
  log(severity, message, context) {
    try {
      const enrichedMessage = `${new Date().toISOString()} - ${message}`;
      console[severity](enrichedMessage, context ? `\n${JSON.stringify(context)}` : "");
    } catch (err) {
      console.log("Logging error:", err);
    }
  },

  debug(message, context) {
    this.log("debug", message, context);
  },

  info(message, context) {
    this.log("info", message, context);
  },

  warn(message, context) {
    this.log("warn", message, context);
  },

  error(message, context) {
    this.log("error", message, context);
  }
};
