import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angdir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './angdir.component.html',
  styleUrl: './angdir.component.css'
})
export class AngdirComponent {
  isLoggedIn = false;
  isAdmin = false;
  notificationType = '';
   num:number=2;
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
    this.setNotificationType();
  }
  
  toggleAdminStatus() {
    this.isAdmin = !this.isAdmin;
    this.setNotificationType();
  }

    setNotificationType() {
    if (!this.isLoggedIn) {
      this.notificationType = 'info'; // If not logged in
    } else if (this.isLoggedIn && this.isAdmin) {
      this.notificationType = 'success'; 
    } else if (this.isLoggedIn && !this.isAdmin) {
      this.notificationType = 'warning'; 
    } else {
      this.notificationType = 'error'; 
    }
  }
  /*isLoggedIn =true;
  isAdmin=true;
  notificationType = 'success';

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }*/
}
