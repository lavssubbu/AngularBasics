import { Component } from '@angular/core';
import { ThemechangeComponent } from "../themechange/themechange.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [ThemechangeComponent,CommonModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {
  currentTheme: string = 'light';

  changeTheme(theme: string) {
    this.currentTheme = theme;
  }
}
