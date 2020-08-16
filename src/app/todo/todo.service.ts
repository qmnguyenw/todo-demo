import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList = [
    {
      todo_name: 'Go to company 8 a.m',
      complete: false,
      editing: false,
    },
    {
      todo_name: 'Do exercise',
      complete: false,
      editing: false,
    },
    {
      todo_name: 'Buy CS books',
      complete: true,
      editing: false,
    },
    {
      todo_name: 'Learn CS courses',
      complete: false,
      editing: false,
    },
  ];

  constructor() {}
}
