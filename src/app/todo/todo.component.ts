import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList;
  newToDoItem = '';
  displayFilter = 'all';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

}
