import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from './services/customer/customer.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
 
  
  providers: [
    CustomerService
  ]
})

export class CoreModule { }
