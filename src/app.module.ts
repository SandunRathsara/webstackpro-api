import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { TodoModule } from './modules/todo/todo.module';
import { RequestLoggerMiddleware } from '@/middleware/request-logger/request-logger.middleware';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
