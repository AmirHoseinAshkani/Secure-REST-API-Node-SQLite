import app from "./index";
import { config } from "./config";
import { logger } from "./middleware/logger.middleware";
(() => {
  app.listen(config.app.port, config.app.host, () => {
    logger.info(
      `Server is running on http://${config.app.host}:${config.app.port}`,
    );
  });
})();
