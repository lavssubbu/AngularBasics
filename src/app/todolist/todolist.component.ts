import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskinputComponent } from '../taskinput/taskinput.component';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule,TaskinputComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  tasks: string[] = [];

  addTask(task: string) {
    if (task) {
      this.tasks.push(task);
    }
  }
}
