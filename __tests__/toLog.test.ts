import { expect, describe, it, jest } from "@jest/globals";
import { ToLog } from "../index";

describe("toLog tests", () => {
  it("should log", () => {
    const id = "test";
    const type = "log";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty("toLog");
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(console, type);
    log.toLog(message);
    expect(infoSpy).toHaveBeenCalledWith(message);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message)
    );
  });

  it("should log with data", () => {
    const id = "test";
    const data = { value: 2 };
    const type = "log";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty("toLog");
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(console, type);
    log.toLog(message, data);
    expect(infoSpy).toHaveBeenCalledWith(message, data);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message),
      expect.stringContaining(JSON.stringify(data))
    );
  });

  it("should log with invalid data", () => {
    const id = "test";
    const data = { value: 1, data: {} };
    data.data = data;
    const type = "log";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty("toLog");
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(console, type);
    log.toLog(message, data);
    expect(infoSpy).toHaveBeenCalledWith(message, data);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message),
      expect.stringContaining("UnexpectedJSONParseError")
    );
  });

  it("should log a info", () => {
    const id = "test";
    const type = "info";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty(type);
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(console, type);
    log[type](message);
    expect(infoSpy).toHaveBeenCalledWith(message, undefined, type);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message)
    );
  });

  it("should log a warn", () => {
    const id = "test";
    const type = "warn";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty(type);
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(console, type);
    log[type](message);
    expect(infoSpy).toHaveBeenCalledWith(message, undefined, type);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message)
    );
  });

  it("should log a warn with data", () => {
    const id = "test";
    const data = { value: 2 };
    const type = "warn";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty(type);
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(console, type);
    log[type](message, data);
    expect(infoSpy).toHaveBeenCalledWith(message, data, type);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message),
      expect.stringContaining(JSON.stringify(data))
    );
  });

  it("should log a error", () => {
    const id = "test";
    const type = "error";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty(type);
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(console, type);
    log[type](message);
    expect(infoSpy).toHaveBeenCalledWith(message, undefined, type);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message)
    );
  });

  it("should log a error with zero data", () => {
    const id = "test";
    const data = 0;
    const type = "error";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty(type);
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(console, type);
    log[type](message, data);
    expect(infoSpy).toHaveBeenCalledWith(message, data, type);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message),
      expect.stringContaining(JSON.stringify(data))
    );
  });

  it("should log a error with false data", () => {
    const id = "test";
    const data = false;
    const type = "error";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty(type);
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(console, type);
    log[type](message, data);
    expect(infoSpy).toHaveBeenCalledWith(message, data, type);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message),
      expect.stringContaining(JSON.stringify(data))
    );
  });

  it("should log a error with null data", () => {
    const id = "test";
    const data = null;
    const type = "error";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty(type);
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(console, type);
    log[type](message, data);
    expect(infoSpy).toHaveBeenCalledWith(message, data, type);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message),
      expect.stringContaining(JSON.stringify(data))
    );
  });

  it("should log a error with data", () => {
    const id = "test";
    const data = { value: 2 };
    const type = "error";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty(type);
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(console, type);
    log[type](message, data);
    expect(infoSpy).toHaveBeenCalledWith(message, data, type);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message),
      expect.stringContaining(JSON.stringify(data))
    );
  });

  it("should log a info with debug", () => {
    process.env.DEBUG = "app:*";
    const id = "test";
    const type = "info";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty(type);
    expect(log).toHaveProperty("debug");
    const infoSpy = jest.spyOn(log, "toLog");
    const infoDebugSpy = jest.spyOn(log, "debug");
    log[type](message);
    expect(infoSpy).toHaveBeenCalledWith(message, undefined, type);
    expect(infoDebugSpy).toHaveBeenCalledWith(
      expect.any(String),
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message)
    );
  });

  it("should log with app prefix in debug", () => {
    const prefix = "pre";
    process.env.DEBUG = `${prefix}:*`;
    const id = "test";
    const type = "log";
    const message = "hello";
    const log = new ToLog(id, prefix);
    expect(log).toHaveProperty("toLog");
    const infoSpy = jest.spyOn(log, "toLog");
    const infoLogSpy = jest.spyOn(log, "debug");
    log.toLog(message);
    expect(infoSpy).toHaveBeenCalledWith(message);
    expect(infoLogSpy).toHaveBeenCalledWith(
      expect.any(String),
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message)
    );
  });

  it("should log a info with data and debug", () => {
    process.env.DEBUG = "app:*";
    const id = "test";
    const data = { value: 2 };
    const type = "info";
    const message = "hello";
    const log = new ToLog(id);
    expect(log).toHaveProperty(type);
    expect(log).toHaveProperty("debug");
    const infoSpy = jest.spyOn(log, "toLog");
    const infoDebugSpy = jest.spyOn(log, "debug");
    log[type](message, data);
    expect(infoSpy).toHaveBeenCalledWith(message, data, type);
    expect(infoDebugSpy).toHaveBeenCalledWith(
      expect.any(String),
      expect.stringContaining(type.toUpperCase()),
      expect.stringContaining(message),
      expect.objectContaining(data)
    );
  });
});
