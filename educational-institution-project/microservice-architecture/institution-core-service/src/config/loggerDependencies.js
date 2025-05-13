import WebSocketLogger from "../infrastructure/logger/WebSocketLogger.js";

const logger = new WebSocketLogger("ws://localhost:8081"); 

export { logger };
