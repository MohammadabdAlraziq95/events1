import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodosettingComponent } from './todosetting.component';

describe('TodosettingComponent', () => {
  let component: TodosettingComponent;
  let fixture: ComponentFixture<TodosettingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
