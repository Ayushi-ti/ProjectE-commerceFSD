import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/core/services/order/order.service';

@Component({
  selector: 'app-success-order',
  templateUrl: './success-order.component.html',
  styleUrls: ['./success-order.component.css']
})
export class SuccessOrderComponent implements OnInit {

  orderId:any="101";
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.getOrderId();
  }

  getOrderId(){
    this.orderService.getLatestOrderId()
    .subscribe((res:any)=>{
      console.log(res);
      this.orderId = res;
    })
  }

  
}
