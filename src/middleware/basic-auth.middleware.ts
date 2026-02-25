import { RequestHandler, Request, Response, NextFunction } from "express";
import { config } from "../config";
import bcrypt from "bcryptjs";
import { loginSchema } from "../schema/auth.schema";
import HttpErrorResponse from "../response/http-errors.response";

const basicAuthMiddleware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return HttpErrorResponse.UNAUTHORIZED.send(res);
  }
  const base64Credential = authHeader.split(" ")[1];
  const decoded = Buffer.from(base64Credential, "base64").toString("utf-8");

  const [username = "", password = ""] = decoded.split(":");

  const { error } = loginSchema.validate({ username, password });

  if (error) {
    return HttpErrorResponse.INVALID_CREDENTIAL_FORMAT.send(res);
  }
  const User = {
    username: config.app.username,
    password: bcrypt.hashSync(config.app.password, 10),
  };

  if (
    username !== User.username ||
    !bcrypt.compareSync(password, User.password)
  ) {
    return HttpErrorResponse.INVALID_CREDENTIAL.send(res);
  }
  next();
};

export default basicAuthMiddleware;
