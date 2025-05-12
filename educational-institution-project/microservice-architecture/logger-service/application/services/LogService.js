const LogEntry = require("../../domain/entities/logEntry");

class LogService {
  async handleLog(logDTO) {
    const entry = new LogEntry(logDTO);
    this._printToConsole(entry);
  }

  _printToConsole(entry) {
    const colors = {
      INFO: "\x1b[36m",
      WARN: "\x1b[33m",
      ERROR: "\x1b[31m",
      DEBUG: "\x1b[35m",
    };

    const reset = "\x1b[0m";
    const color = colors[entry.level] || "\x1b[37m";

    console.log(color + entry.format() + reset);
  }
}

module.exports = LogService;
