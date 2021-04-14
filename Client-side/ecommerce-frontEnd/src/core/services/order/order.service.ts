import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private host:String="http://localhost:5555";//will be changed

  constructor(private http:HttpClient) { }


  getLatestOrderId(){
    return this.http.get(`${this.host}/orders`);
  }
}
