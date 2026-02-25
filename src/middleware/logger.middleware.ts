import { RequestHandler } from "express";
import morgan from "morgan";
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level.toUpperCase()}] : ${message}`;
    }),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" }),
  ],
});

const loggerMiddleware: RequestHandler = morgan("combined", {
  stream: {
    write: (message) => {
      logger.info(message.trim());
    },
  },
});

export { logger, loggerMiddleware };
