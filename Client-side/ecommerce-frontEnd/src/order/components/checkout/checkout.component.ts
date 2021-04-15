import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {  SessionStorageService, SessionStorage } from 'angular-web-storage';
import { Customer } from 'src/core/models/customer.model';
import { Order } from 'src/core/models/Order.model';
import { Product } from 'src/core/models/product.model';
import { CustomerService } from 'src/core/services/customer/customer.service';
import { OrderService } from 'src/core/services/order/order.service';
import { Thumbs } from 'swiper';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems:Product[]=[];
  cartTotal:number=0;
  billingAddress:string;
  billingMobileNumber:number;
  order:Order=new Order();
  constructor(public session:SessionStorageService,public customerService:CustomerService,public orderService:OrderService,public router:Router) { }

  ngOnInit(): void {
    this.getCartTotal();
    this.getBillingDetails();
    
  }

  getBillingDetails(){
    let email=this.session.get("email");
    this.customerService.getCustomerDetails(email)
    .subscribe((res:Customer)=>{
      this.billingAddress=res.address;
      this.billingMobileNumber=res.phno;
    })
  }

  getCartTotal()
  {
    this.cartItems=this.session.get("cartItems");
    if( this.cartItems!=null && this.cartItems.length > 0){
      this.cartItems.forEach(item=>{
        this.cartTotal+=(item.total_quantity*item.product_price);
      })
    }
  }

  proceedToPayment(){
    let email=this.session.get("email");
    
    this.customerService.getCustomerDetails(email)
    .subscribe((res:Customer)=>{
      this.order.customerid=res.customerId;
      console.log(this.order.customerid);
      this.order.status="Ordered";
      this.order.total_amount=this.cartTotal;
      
      //save order data
      this.orderService.createOrder(this.order)
      .subscribe((res:number)=>{
        //get order id
          this.order.orderid=res;
          console.log(res);
          this.router.navigate(['/cart/success/' + this.order.orderid]);
          
      });
      
    })

   
/*
     
  */    
    //order_details
    //order_id from order table
    //prod_id from session
    //quantity:session
  }
  

}
