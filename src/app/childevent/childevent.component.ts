import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childevent',
  standalone: true,
  imports: [],
  templateUrl: './childevent.component.html',
  styleUrl: './childevent.component.css'
})
export class ChildeventComponent {
   @Input() count:number=0;
   @Output() countChanged :EventEmitter<number>= new EventEmitter();

   increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
decrement() {
    this.count--;
    this.countChanged.emit(this.count);
}

}
