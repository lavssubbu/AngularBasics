import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sampbind',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sampbind.component.html',
  styleUrl: './sampbind.component.css'
})
export class SampbindComponent {
    fname:string = "Payoda"
    lname:string="Organization"

    imageurl:string = "assets/mac.jpg"
     
    text:string ="SamplePropertyBinding"
    value:string=" ";
    count:number=0;
    butval:boolean = false;
    counter()
    {
      this.count++;
    }    

    display()
    {
      this.butval=true;
      this.fname="Priya",
      this.lname="Mohan"
    }

    show(event:any)
    {
      this.text =(event.target.value)
    }

}

