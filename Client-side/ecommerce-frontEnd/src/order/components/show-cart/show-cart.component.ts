import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/models/product.model';
import { CartService } from 'src/core/services/cart/cart.service';
import {  SessionStorageService, SessionStorage } from 'angular-web-storage';
import { CustomerService } from 'src/core/services/customer/customer.service';
import { OrderService } from 'src/core/services/order/order.service';
import { Router } from '@angular/router';
import { isTemplateSpan } from 'typescript';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  cartItems:any[]=[];
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

  decreaseQauntity(items){
    if(items.quantity == 1){
      alert("You cannot decrease more");
    }else{
    items.quantity--;
    this.findTotalAmout();
    }
  }

  increaseQauntity(items){
    if(items.quantity ==  items.total_quantity){
      alert("You cannot increase more");
    }else{
      items.quantity++;
      this.findTotalAmout();
    }
  }

  findTotalAmout(){
    this.totalSum=0;
    if( this.cartItems!=null && this.cartItems.length > 0){
    this.cartItems.forEach(item=>{
      this.totalSum+=(item.quantity*item.product_price);
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
          this.session.set("cartItems",this.cartItems);
          this.router.navigate(['cart/checkout']);
  }

}
}








  