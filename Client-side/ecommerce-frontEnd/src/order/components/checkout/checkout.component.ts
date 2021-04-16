import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {  SessionStorageService, SessionStorage } from 'angular-web-storage';
import { Customer } from 'src/core/models/customer.model';
import { Order } from 'src/core/models/Order.model';
import { OrderDetails } from 'src/core/models/OrderDetails.model';
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
  orderDetails:OrderDetails=new OrderDetails();
  product:Product;

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
      

      this.createOrderData();
      //save order data
      
    })

   }


   
   createOrderData(){
     
    this.orderService.createOrder(this.order)
    .subscribe((res:number)=>{
      //get order id
        this.order.orderid=res;
        this.createOrderDetailsData();
        //add data to orderdetails table

        
        
    });
   }



   createOrderDetailsData(){
      this.orderDetails.orderid=this.order.orderid;
     let productArray=this.session.get("cartItems");
     if( productArray.length > 0){
        productArray.forEach(item=>{
            this.orderDetails.productid=item.product_id;
            this.orderDetails.quantity=item.total_quantity;
          this.orderService.createOrderDetails(this.orderDetails)
          .subscribe((res:any)=>{
            console.log(res);
          })
      })
    }
      
    this.router.navigate(['/cart/success/' + this.order.orderid]);
   }
  

}
