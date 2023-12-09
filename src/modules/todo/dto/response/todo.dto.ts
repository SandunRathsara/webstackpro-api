import { Todo } from '@prisma/client';
import { formatDateTime } from '@/utils/date-time-formats';

export class TodoDto {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean = false;
  completedAt?: string = null;
  createdAt: string;

  constructor(todo: Todo) {
    this.id = todo.id;
    this.title = todo.title;
    this.description = todo.description;
    this.dueDate = formatDateTime(todo.dueDate);
    this.completed = todo.completed;
    this.createdAt = formatDateTime(todo.createdAt);
    if (todo.completed) this.completedAt = formatDateTime(todo.completedAt);
  }
}
