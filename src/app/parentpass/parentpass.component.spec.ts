import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentpassComponent } from './parentpass.component';

describe('ParentpassComponent', () => {
  let component: ParentpassComponent;
  let fixture: ComponentFixture<ParentpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentpassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
