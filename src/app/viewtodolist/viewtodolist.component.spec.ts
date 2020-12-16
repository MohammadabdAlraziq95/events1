import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewtodolistComponent } from './viewtodolist.component';

describe('ViewtodolistComponent', () => {
  let component: ViewtodolistComponent;
  let fixture: ComponentFixture<ViewtodolistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
