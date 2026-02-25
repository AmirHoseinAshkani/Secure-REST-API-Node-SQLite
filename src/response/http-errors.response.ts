import { Response } from "express";

export default class HttpErrorResponse {
  private constructor(
    private status: number,
    private message: string,
  ) {}

  send(res: Response) {
    return res.status(this.status).json({ message: this.message });
  }

  static readonly UNAUTHORIZED = new HttpErrorResponse(401, "Unauthorized");
  static readonly INVALID_CREDENTIAL = new HttpErrorResponse(
    401,
    "Invalid credential",
  );
  static readonly INVALID_CREDENTIAL_FORMAT = new HttpErrorResponse(
    401,
    "Invalid credential format",
  );
}
