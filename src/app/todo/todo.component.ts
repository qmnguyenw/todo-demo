import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList;
  newTodo = '';
  displayFilter = 'all';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoList = this.todoService.getTodoList(this.displayFilter);
  }

  addNewTodo() {
    this.todoService.addTodo(this.newTodo);
    this.todoList = this.todoService.getTodoList(this.displayFilter);
  }

  setFilterField(displayFilter: string) {
    this.displayFilter = displayFilter;
    this.todoList = this.todoService.getTodoList(displayFilter);
  }

  updateTodoList() {
    this.todoList = this.todoService.getTodoList(this.displayFilter);
  }
}
