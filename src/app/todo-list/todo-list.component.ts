import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],

})
export class TodoListComponent implements OnInit, AfterContentChecked {

  todoItems: TodoItem[] = [
    {
      "details": "Do some work",
      "done": false,
    }
  ]

  newTodoItemDetails: string ="";

  constructor(private changeDetector: ChangeDetectorRef) { }


  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  createTodoItem() {
    this.todoItems.push(
      {
        "details": this.newTodoItemDetails,
        "done": false,
      }
    );
    this.newTodoItemDetails = "";

    console.log(JSON.stringify(this.todoItems, null, 1))
  }

  removeTodoItem(index: number) {
    if (index > -1) {
      this.todoItems.splice(index, 1);
    }
  }

}

interface TodoItem {
  details: string;
  done: boolean;
}