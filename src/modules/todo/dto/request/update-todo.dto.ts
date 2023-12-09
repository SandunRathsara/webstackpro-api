import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from '@/modules/todo/dto/request/create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
