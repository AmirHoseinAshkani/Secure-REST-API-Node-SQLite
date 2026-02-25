import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import { config } from "./config";
import { loggerMiddleware } from "./middleware/logger.middleware";
import basicAuthMiddleware from "./middleware/basic-auth.middleware";
import HttpSuccessResponse from "./response/http-success.response";
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimit(config.rateLimit));
app.use(loggerMiddleware);

app.post("/user", basicAuthMiddleware, (req: Request, res: Response) => {
  HttpSuccessResponse.OK({
    id: 25,
    firstName: "AmirHossein",
    LastName: "Ashkani",
    messageforme: "hello friend",
  }).send(res);
});

export default app;
