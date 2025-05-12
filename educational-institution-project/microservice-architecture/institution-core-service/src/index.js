import { app } from "./infrastructure/web/server.js";

import { logger } from "./config/dependencies.js";
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Institution Core Server running on http://localhost:${PORT}`);
});
