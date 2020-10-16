import { debug } from 'debug';

enum Types {
  info = 'info',
  warn = 'warn',
  error = 'error',
  log = 'log',
}

export class ToLog {
  identifier: string
  debug: debug.Debugger

  /**
   * Use to create a new logger.
   * @this
   * @param {string} identifier - name to log
   * @param {string} [appPrefix='app'] - prefix to name log
   * @constructor
   */
  constructor(identifier: string, appPrefix: string = 'app') {
    const newIdentifier = `${appPrefix.toLowerCase()}:${identifier.toLowerCase()}`
    this.identifier = newIdentifier;
    this.debug = debug(newIdentifier);
  }

  /**
   * Parse the data to string.
   * @param {*} data - value to parse
   * @return {string} data to string or error message
   * @private
   */
  getDataToConsole(data: any): string {
    try {
      return JSON.stringify(data);
    } catch (error) {
      return `[UnexpectedJSONParseError]: ${error.message}`;
    }
  }

  /**
   * Print your log
   * @param {string} message - message to log
   * @param {*} [data=null] - complement data to log
   * @param {Types} type - type of log
   */
  toLog(message: string, data: any = null, type: Types = Types.log) {
    const typeToConsole = `[${type.toUpperCase()}]`;
    if (process.env.DEBUG) {
      if (!data) {
        this.debug('%s - %s', typeToConsole, message.trim());
        return;
      }
      this.debug('%s - %s %j', typeToConsole, message.trim(), data);
      return;
    }
    if (!data) {
      console[type](typeToConsole, message.trim());
      return;
    }
    const dataToConsole = this.getDataToConsole(data);
    console[type](
      typeToConsole,
      message.trim(),
      dataToConsole
    );
  }

  /**
   * Print a info log
   * @param {string} message - message to log
   * @param {*} [data=null] - complement data to log
   */
  info(message: string, data: any = null) {
    this.toLog(message, data, Types.info);
  }

  /**
   * Print a warning log
   * @param {string} message - message to log
   * @param {*} [data=null] - complement data to log
   */
  warn(message: string, data: any = null) {
    this.toLog(message, data, Types.warn);
  }

  /**
   * Print a error log
   * @param {string} message - message to log
   * @param {*} [data=null] - complement data to log
   */
  error(message: string, data: any = null) {
    this.toLog(message, data, Types.error);
  }
}

export default ToLog;
