import { Component } from '@angular/core';
import { ChildeventComponent } from "../childevent/childevent.component";

@Component({
  selector: 'app-parentpass',
  standalone: true,
  imports: [ChildeventComponent],
  templateUrl: './parentpass.component.html',
  styleUrl: './parentpass.component.css'
})
export class ParentpassComponent {
    counter :number=0;

    countChangedHandler(count:number) {
      this.counter = count;
      console.log(count);
    }
  
}
