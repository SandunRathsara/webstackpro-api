import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: any, res: any, next: () => void) {
    const { method, originalUrl } = req;
    res.on('finish', () => {
      const { statusCode } = res;

      this.logger.log(`[${method}] ${originalUrl} ${statusCode}`);
    });
    next();
  }
}
