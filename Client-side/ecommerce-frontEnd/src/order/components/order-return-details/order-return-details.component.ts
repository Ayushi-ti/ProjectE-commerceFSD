import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/models/product.model';

@Component({
  selector: 'app-order-return-details',
  templateUrl: './order-return-details.component.html',
  styleUrls: ['./order-return-details.component.css']
})
export class OrderReturnDetailsComponent implements OnInit {

  orderId:number;
  products:any[];
  totalSum:number;
  orderStatus:string;

  data:any=[{name:"Product1",Price:1000,quantity:3}
  ,{name:"Product2",Price:600,quantity:3}
  ,{name:"Product3",Price:700,quantity:2}
  ,{name:"Product4",Price:1000,quantity:3}]

  constructor() { }

  ngOnInit(): void {
    //get order id form order-return component

    this.getOrderDetails();
  }

  getOrderDetails(){
    this.orderId=101;
    this.getOrderedProducts();
  }

  getOrderedProducts(){
    //using order id get all products
    this.products=this.data;
    this.totalSum=7000;
    this.orderStatus="Deliverd";  
  }

}
