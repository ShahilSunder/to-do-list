import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-counter',
  templateUrl: './list-counter.component.html',
  styleUrls: ['./list-counter.component.scss']
})
export class ListCounterComponent implements OnInit {
  @Input() 
  numberOfDoneItems : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
