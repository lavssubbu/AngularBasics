import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-themechange',
  standalone: true,
  imports: [],
  templateUrl: './themechange.component.html',
  styleUrl: './themechange.component.css'
})
export class ThemechangeComponent {
  private isDark: boolean = false;
   @Output() ThemeChange = new EventEmitter<string>();

   toggleTheme() {
    this.isDark = !this.isDark;
    this.ThemeChange.emit(this.isDark ? 'dark' : 'light');
  }
}
