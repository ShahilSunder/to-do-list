import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCounterComponent } from './list-counter.component';

describe('ListCounterComponent', () => {
  let component: ListCounterComponent;
  let fixture: ComponentFixture<ListCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
