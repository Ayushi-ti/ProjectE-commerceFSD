import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/models/product.model';
import { CartService } from 'src/core/services/cart/cart.service';
import {  SessionStorageService, SessionStorage } from 'angular-web-storage';
import { CustomerService } from 'src/core/services/customer/customer.service';
import { OrderService } from 'src/core/services/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  cartItems:Product[]=[];
  totalSum:number=0;
  constructor(public cartService:CartService, public session:SessionStorageService,private customerService:CustomerService,private orderService:OrderService,private router:Router) {
   }

  ngOnInit(): void {
   this.getAllCartItems();
 
  }

  getAllCartItems(){
 //  this.cartItems=this.cartService.getCartData();
 console.log(this.session.get("cartItems"));
this.cartItems=this.session.get("cartItems");
   this.findTotalAmout();
  }

  findTotalAmout(){
    if( this.cartItems!=null && this.cartItems.length > 0){
    this.cartItems.forEach(item=>{
      this.totalSum+=(item.total_quantity*item.product_price);
    })
  }
}

  checkout(){
    //get user data from session
    let email=this.session.get("email");

      if(email == null || email == "")
        {
          this.router.navigate(['/../../login']);
        }
        else{
          
          this.router.navigate(['cart/checkout']);
  }

}
}








  