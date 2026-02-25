import dotenv from "dotenv";
dotenv.config();

export const config: Config = {
  app: {
    host: process.env.HOST,
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    username: process.env.APP_USERNAME,
    password: process.env.APP_PASSWORD,
  },

  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_DURATION) * 60 * 1000,
    max: parseInt(process.env.RATE_LIMIT_MAX),
    message: "Too many requests , try again later",
  },
};
