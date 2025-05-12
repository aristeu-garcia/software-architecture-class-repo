import WebSocket from "ws";

class WebSocketLogger {
  constructor(url) {
    this.url = url;
    this.ws = null;
    this._connect();
  }

  _connect() {
    this.ws = new WebSocket(this.url);

    this.ws.on("open", () => {
      console.log("[Logger] Connected to log service");
    });

    this.ws.on("error", (err) => {
      console.error("[Logger] Connection error:", err.message);
    });

    this.ws.on("close", () => {
      console.warn("[Logger] Connection closed. Reconnecting in 2s...");
      setTimeout(() => this._connect(), 2000);
    });
  }

  log(level, message) {
    const payload = {
      level,
      message,
      timestamp: new Date().toISOString(),
    };

    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(payload));
    } else {
      console.warn("[Logger] Not connected. Log not sent:", payload);
    }
  }

  info(msg) {
    this.log("INFO", msg);
  }

  warn(msg) {
    this.log("WARN", msg);
  }

  error(msg) {
    this.log("ERROR", msg);
  }

  debug(msg) {
    this.log("DEBUG", msg);
  }
}

export default WebSocketLogger;
