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

  constructor(identifier: string, appPrefix: string = 'app') {
    const newIdentifier = `${appPrefix.toLowerCase()}:${identifier.toLowerCase()}`
    this.identifier = newIdentifier;
    this.debug = debug(newIdentifier);
  }

  getDataToConsole(data: any) {
    try {
      return JSON.stringify(data);
    } catch (error) {
      return `[UnexpectedJSONParseError]: ${error.message}`;
    }
  }

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
      console[type](this.identifier, typeToConsole, message.trim());
      return;
    }
    const dataToConsole = this.getDataToConsole(data);
    console[type](
      this.identifier,
      `${typeToConsole} -`,
      message.trim(),
      dataToConsole
    );
  }

  info(message: string, data: any = null) {
    this.toLog(message, data, Types.info);
  }

  warn(message: string, data: any = null) {
    this.toLog(message, data, Types.warn);
  }

  error(message: string, data: any = null) {
    this.toLog(message, data, Types.error);
  }
}

export default ToLog;
