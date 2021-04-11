import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustLoginComponent } from './cust-login/cust-login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    CustLoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
