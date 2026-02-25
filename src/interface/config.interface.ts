interface Config {
  host(port: any, host: any, arg2: () => void): unknown;
  app: {
    host: string;
    port: number;
    username: string;
    password: string;
  };
  rateLimit: {
    windowMs: number;
    max: number;
    message: string;
  };
}
