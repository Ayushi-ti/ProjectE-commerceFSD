import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { OrderService } from 'src/core/services/order/order.service';

@Component({
  selector: 'app-success-order',
  templateUrl: './success-order.component.html',
  styleUrls: ['./success-order.component.css']
})
export class SuccessOrderComponent implements OnInit {

  orderId:string;
  constructor(private orderService:OrderService,private _Activatedroute:ActivatedRoute,private session:SessionStorageService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.orderId = params.get('id'); 
  });
  this.session.set("cartItems","");
    
  }

  
}
