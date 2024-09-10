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
      {proid:111,proname:"Laptop",proprice:75000,proimg:"/assets/laptop.jpg",stock:10},
      {proid:112,proname:"Mac",proprice:97000,proimg:"/assets/mac.jpg",stock:5},
      {proid:113,proname:"iphone",proprice:85000,proimg:"/assets/iphone.jpg",stock:2}
    ]
    cartprod:Product[]= [];
    addtoCart(prod:Product)
    {
      if (prod && prod.stock > 0) {
        this.cartprod.push(prod);  
        prod.stock--;  
        console.log('Product added to cart:', prod);
      } else {
        console.error('Out of stock or no product selected.');
      }
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
  stock: number=0;
}