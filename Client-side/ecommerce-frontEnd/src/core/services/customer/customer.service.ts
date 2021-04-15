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

  private host:string = "http://localhost:9595";

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get(`${this.host}/customers/show`);
  }
  saveCustomer(customer){
    return this.http.post(`${this.host}/customers/register`, customer);
  }

 // deleteCustomer(id){
 //   return this.http.delete(`${this.host}/customer/${id}`);
 // }

  findCustomerById(id){
    return this.http.get(`${this.host}/customers/${id}`);
  }

  editCustomer(email, newCustomer){
    return this.http.put(`${this.host}/customers/${email}`, newCustomer);
  }
  login(email,password){
    return this.http.get(`${this.host}/customers/login/${email}/${password}`);
  }

  getCustomerDetails(email){
    return this.http.get(`${this.host}/customers/bymail/${email}`);
  }

}
