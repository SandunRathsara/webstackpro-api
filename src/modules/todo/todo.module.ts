import { Module } from '@nestjs/common';
import { TodoService } from '@/modules/todo/todo.service';
import { TodoController } from '@/modules/todo/todo.controller';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
