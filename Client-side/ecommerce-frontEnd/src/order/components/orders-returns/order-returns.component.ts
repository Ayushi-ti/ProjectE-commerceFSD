import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/core/services/order/order.service';


@Component({
  selector: 'app-order-returns',
  templateUrl: './order-returns.component.html',
  styleUrls: ['./order-returns.component.css']
})
export class OrderReturnsComponent implements OnInit {

  orders:any[]=[
    {order_id:1,order_date:Date.now(),status:"Shipped"},
    {order_id:2,order_date:Date.now(),status:"Pending"},
    {order_id:3,order_date:Date.now(),status:"Approved"},
    {order_id:4,order_date:Date.now(),status:"Shipped"},
    {order_id:5,order_date:Date.now(),status:"Shipped"},
    
  ];

  
  
  constructor(private orderService:OrderService,private router:Router) { }

  
  
  ngOnInit(): void {
    this.fetchAllOrders();
  }

  fetchAllOrders(){
    //this.orderService. 
  }

  
  viewOrderDetails(orderId){
    console.log(orderId);
    
    this.router.navigate(['/../admin/editproduct',orderId]);
    //by routing pass data to order-returns-detail page
  }
  

}
