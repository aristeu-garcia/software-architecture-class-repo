const LogService = require("./application/services/LogService");
const WebSocketAdapter = require("./adapters/inbound/websocket/WebSocketAdapter");

const logService = new LogService();
const wsAdapter = new WebSocketAdapter(logService);

wsAdapter.start(8081);
