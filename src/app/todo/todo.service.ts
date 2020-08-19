import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList = [
    {
      todo_name: 'Go to company 8 a.m',
      completed: false,
      editing: false,
    },
    {
      todo_name: 'Do exercise',
      completed: false,
      editing: false,
    },
    {
      todo_name: 'Buy CS books',
      completed: true,
      editing: false,
    },
    {
      todo_name: 'Learn CS courses',
      completed: false,
      editing: false,
    },
  ];

  constructor() {}

  addTodo(todoItem: string): void {
    this.todoList.push({
      todo_name: todoItem,
      completed: false,
      editing: false,
    });
  }

  getTodoList(displayFilter) {
    if (displayFilter === 'all') {
      return this.todoList;
    } else if (displayFilter === 'active') {
      return this.todoList.filter((todo) => !todo.completed);
    } else {
      return this.todoList.filter((todo) => todo.completed);
    }
  }

  updateTodoState(todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todoItem) {
    this.todoList = this.todoList.filter((todo) => todo !== todoItem);
  }

  editTodo(todo) {
    todo.editing = true;
  }

  updateTodo(todo, newTodo) {
    todo.todo_name = newTodo;
    todo.editing = false;
  }

  cancelEditingTodo(todo) {
    todo.editing = false;
  }
}
