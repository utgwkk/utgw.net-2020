import { createApp } from "honox/server";
import { logger } from "hono/logger";
import pino from "pino";

process.env.NO_COLOR = "1";

const pinoLogger = pino({
  formatters: {
    level: (label) => ({ level: label }),
  },
});

const app = createApp();
app.use(logger((str) => pinoLogger.info(str)));

export default app;
