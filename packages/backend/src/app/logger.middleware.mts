import {Injectable, Logger} from "@nestjs/common";

@Injectable()
export class LoggerMiddleware {
  use(req, res, next) {
    Logger.debug(`Request: ${req.method} ${req.url}`);
    next();
  }
}
