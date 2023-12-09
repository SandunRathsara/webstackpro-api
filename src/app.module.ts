import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrismaModule} from "nestjs-prisma";
import { TodoModule } from './modules/todo/todo.module';


@Module({
  imports: [PrismaModule.forRoot({isGlobal: true}), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
