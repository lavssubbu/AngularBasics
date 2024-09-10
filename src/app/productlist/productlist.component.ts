import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
    lstproduct:Product[]=[
      {proid:111,proname:"Laptop",proprice:75000,proimg:"/assets/laptop.jpg"},
      {proid:112,proname:"Mac",proprice:97000,proimg:"/assets/mac.jpg"},
      {proid:113,proname:"iphone",proprice:85000,proimg:"/assets/iphone.jpg"}
    ]
    cartprod:Product[]= [];
    addtoCart(prod:Product)
    {
      this.cartprod.push(prod);
      console.log('Product added to cart:', prod);
    }
    product = { rating: 4.5 };

  getRatingColor(rating: number) {
    return rating >= 4 ? 'green' : rating >= 2 ? 'orange' : 'red';
  }
}
class Product{
  proid?:number
  proname?:string
  proprice?:number
  proimg?:string  
}