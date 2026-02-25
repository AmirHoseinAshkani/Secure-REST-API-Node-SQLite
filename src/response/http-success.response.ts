import { Response } from "express";

export default class HttpSuccessResponse {
  private constructor(
    private status: number,
    private message: string,
    private data?: any,
  ) {}
  send(res: Response) {
    return res
      .status(this.status)
      .json({ message: this.message, data: this.data });
  }
  static readonly OK = (data?: any) => new HttpSuccessResponse(200, "Ok", data);
}
