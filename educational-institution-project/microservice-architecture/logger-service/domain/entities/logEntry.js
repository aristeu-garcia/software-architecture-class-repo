class LogEntry {

  constructor({ level, message, timestamp = new Date() }) {
    console.log('level', level, 'message', message, 'timestamp', timestamp);
    if (!level || !message) throw new Error("level and message are required");

    this.level = level.toUpperCase();
    this.message = message;
    this.timestamp = timestamp;

  }

  format() {
    return `[${this.timestamp}] [${this.level}] ${JSON.stringify(
      this.message,
      null,
      2
    )}`;
  }
}

module.exports = LogEntry;
