import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],

})
export class TodoListComponent implements OnInit {

  todoItems: TodoItem[] = [
    {
      "details": "Do some work",
      "done": false,
    },
    {
      "details": "Write some code",
      "done": true,
    }
  ]

  constructor() { }


  ngOnInit(): void {
  }

}

interface TodoItem {
  details: string;
  done: boolean;
}