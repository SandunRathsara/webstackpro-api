import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from '@/modules/todo/dto/request/create-todo.dto';
import { UpdateTodoDto } from '@/modules/todo/dto/request/update-todo.dto';
import { PrismaService } from 'nestjs-prisma';
import { TodoDto } from '@/modules/todo/dto/response/todo.dto';

// This function is written to emulate slow network connection
const delay = async (seconds: number) => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(true), seconds * 1000);
  });
};

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    const newTodo = await this.prisma.todo.create({
      data: {
        title: createTodoDto.title,
        description: createTodoDto.description,
        dueDate: createTodoDto.dueDate,
        completed: false,
        completedAt: null,
      },
    });

    return new TodoDto(newTodo);
  }

  async findAll() {
    // await delay(1);
    const todos = await this.prisma.todo.findMany({
      orderBy: { createdAt: 'asc' },
    });
    return todos.map((todo) => new TodoDto(todo));
  }

  async findOne(id: number) {
    const todo = await this.prisma.todo.findUnique({ where: { id } });
    return new TodoDto(todo);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
    return new TodoDto(todo);
  }

  async complete(id: number) {
    // await delay(1);
    const todo = await this.prisma.todo.update({
      where: { id },
      data: { completed: true, completedAt: new Date() },
    });
    return new TodoDto(todo);
  }
}
