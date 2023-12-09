import { RequestLoggerMiddleware } from '@/middleware/request-logger/request-logger.middleware';

describe('RequestLoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new RequestLoggerMiddleware()).toBeDefined();
  });
});
