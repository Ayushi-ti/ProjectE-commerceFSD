import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { OrderService } from 'src/core/services/order/order.service';

@Component({
  selector: 'app-success-order',
  templateUrl: './success-order.component.html',
  styleUrls: ['./success-order.component.css']
})
export class SuccessOrderComponent implements OnInit {

  orderId:string;
  constructor(private orderService:OrderService,private _Activatedroute:ActivatedRoute,private session:SessionStorageService) { 
  this.session.set("cartItems","");
  }
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.orderId = params.get('id'); 
  });
 
    
  }

  routeToHome(){
    this.session.set("cartItems","");
    
  }
  
}
