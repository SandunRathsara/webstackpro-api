import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from '@/modules/todo/todo.service';
import { CreateTodoDto } from '@/modules/todo/dto/request/create-todo.dto';
import { UpdateTodoDto } from '@/modules/todo/dto/request/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id/complete')
  complete(@Param('id') id: string) {
    return this.todoService.complete(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }
}
