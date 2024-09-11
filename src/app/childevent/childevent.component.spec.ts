import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildeventComponent } from './childevent.component';

describe('ChildeventComponent', () => {
  let component: ChildeventComponent;
  let fixture: ComponentFixture<ChildeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildeventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
