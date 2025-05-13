const WebSocket = require("ws");

class WebSocketAdapter {
  constructor(logInputPort) {
    this.logInputPort = logInputPort;
  }

  start(port = 8081) {
    const wss = new WebSocket.Server({ port });

    console.log(`🟢 WebSocket Server listening on ws://localhost:${port}`);

    wss.on("connection", (ws) => {
      ws.on("message", async (msg) => {
        try {
          const parsedMessage = JSON.parse(msg);
          await this.logInputPort.handleLog({
            message: parsedMessage.message,
            level: parsedMessage.level,
            timestamp: parsedMessage.timestamp,
          });
        } catch (err) {
          console.error("❌ Invalid log message:", err.message);
        }
      });

      ws.send(
        JSON.stringify({
          status: "connected",
          message: "Ready to receive logs",
        })
      );
    });
  }
}

module.exports = WebSocketAdapter;
