import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private data:any[] = [];

  public set customers(customers){
    this.data = customers;
  }

  public get customers(){
    return this.data;
  }

  private host:string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get(`${this.host}/customer/show`);
  }
  saveCustomer(customer){
    return this.http.post(`${this.host}/customer/register`, customer);
  }

 // deleteCustomer(id){
 //   return this.http.delete(`${this.host}/customer/${id}`);
 // }

  findCustomerById(id){
    return this.http.get(`${this.host}/customer/${id}`);
  }

  editCustomer(id, newCustomer){
    return this.http.put(`${this.host}/customer/${id}`, newCustomer);
  }
  login(email,password){
    return this.http.get(`${this.host}/customer/${email}/${password}`);
  }
}
