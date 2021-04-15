import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private host:String="http://localhost:8080";

  constructor(private http:HttpClient) { }


  getAllOrders(){
    return this.http.get(`${this.host}/orders/show`);
  }

  createOrder(order){
    return this.http.post(`${this.host}/orders/save`, order);
  }

}
