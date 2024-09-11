import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './taskinput.component.html',
  styleUrl: './taskinput.component.css'
})
export class TaskinputComponent {
  task:string=" ";
  @Output() taskAdded = new EventEmitter<string>();

  submitTask() {
    if (this.task) {
      this.taskAdded.emit(this.task);
      this.task = '';
    }
  }
}
