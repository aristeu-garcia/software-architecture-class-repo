class LogEntry {
  constructor({ level, message, timestamp = new Date() }) {
    if (!level || !message) throw new Error('level and message are required');

    this.level = level.toUpperCase();
    this.message = message;
    this.timestamp = timestamp;
  }

  format() {
    return `[${this.timestamp.toISOString()}] [${this.level}] ${this.message}`;
  }
}

module.exports = LogEntry;
