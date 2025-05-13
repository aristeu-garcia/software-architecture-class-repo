import WebSocketLogger from "../infrastructure/logger/WebSocketLogger.js";

const logger = new WebSocketLogger("ws://localhost:8080"); // porta do serviço de logs

export { logger };
