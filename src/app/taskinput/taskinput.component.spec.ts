import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskinputComponent } from './taskinput.component';

describe('TaskinputComponent', () => {
  let component: TaskinputComponent;
  let fixture: ComponentFixture<TaskinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
