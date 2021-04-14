import { Component, OnInit } from '@angular/core';
import {  SessionStorageService, SessionStorage } from 'angular-web-storage';
import { Product } from 'src/core/models/product.model';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems:Product[]=[];
  cartTotal:number=0;
  billingAddress:string="Faridabad,Haryana";
  billingMobileNumber:string="9321231121";
  constructor(public session:SessionStorageService) { }

  ngOnInit(): void {
    this.getCartTotal();
 
  }

  getCartTotal()
  {
    this.cartItems=this.session.get("cartItems");
    if( this.cartItems!=null && this.cartItems.length > 0){
      this.cartItems.forEach(item=>{
        this.cartTotal+=(item.total_quantity*item.price);
      })
    }
  }

  proceedToPayment(){
    //get cart items
    //this.session.get("cartItems");
    //get user details
    //generate order id
  }
  

}
