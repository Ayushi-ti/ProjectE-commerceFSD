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
  customer:Customer;
  cartTotal:number=0;
  billingAddress:string;
  billingMobileNumber:number;
  order:Order=new Order();
  orderDetails:OrderDetails=new OrderDetails();
  product:Product;
  newCust:Customer=new Customer();
  editFlag:boolean=false;
  constructor(public session:SessionStorageService,public customerService:CustomerService,public orderService:OrderService,public router:Router) { }

  ngOnInit(): void {
    this.getCartTotal();
    this.getCustomerDetails();
    
    
  }

  getCustomerDetails(){
    let email=this.session.get("email");
    this.customerService.getCustomerDetails(email)
    .subscribe((res:Customer)=>{
      this.customer=res;
      console.log(this.customer);
      this.getBillingDetails();
    })

  }

  getBillingDetails(){
   
    this.billingAddress=this.customer.address;
      this.billingMobileNumber=this.customer.phno;
   
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
      this.order.customerid=this.customer.customerId;
      console.log(this.order.customerid);
      this.order.status="Ordered";
      this.order.total_amount=this.cartTotal;
      this.createOrderData();
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
  

EditableFields(){
  this.editFlag=true;
}

updateCustomerOrderDetails(newAddress){

 
 console.log(newAddress);
 //console.log(JSON.stringify(this.customer));
  this.customer.delivery_address=newAddress;
  let email=this.session.get("email");
 /* this.newCust.customerId=this.customer.customerId
  this.newCust.email=this.customer.email;
  this.newCust.password=this.customer.password;
  this.newCust.phno=this.customer.phno;
  this.newCust.customerName=this.customer.customerName;
  this.newCust.address=this.customer.address;
  */
  //this.newCust.delivery_address=this.customer.delivery_address;
  //this.customer.delivery_address=newAddress
  console.log(this.customer);
 this.customerService.updateCustomer(email,this.customer)
  .subscribe((res:any)=>{
    console.log(res);
  })
  
  }

  




}

