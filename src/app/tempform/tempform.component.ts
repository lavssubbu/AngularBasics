import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country } from '../Country';

@Component({
  selector: 'app-tempform',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tempform.component.html',
  styleUrl: './tempform.component.css'
})
export class TempformComponent {
     lstcountry:Country[]=[
      new Country(111,"India"),
      new Country(112,"US"),
      new Country(113,"UK")
     ]

     onSubmit(contactForm:any) {
      console.log(contactForm.value);
    }
}
