import { app } from "./infrastructure/web/server.js";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Institution Core Server running on http://localhost:${PORT}`);
});
