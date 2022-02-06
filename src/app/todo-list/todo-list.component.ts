import { Component, OnInit, ChangeDetectorRef,AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],

})
export class TodoListComponent implements OnInit, AfterContentChecked  {

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

  constructor(private changeDetector: ChangeDetectorRef) { }


  ngOnInit(): void {
  }

  ngAfterContentChecked() : void {
    this.changeDetector.detectChanges();
  }

  createTodoItem(newTodoItem: string){
    this.todoItems.push(
      {
        "details": newTodoItem,
        "done": false,
      }
    );

    console.log(JSON.stringify(this.todoItems, null, 1))
  }

}

interface TodoItem {
  details: string;
  done: boolean;
}