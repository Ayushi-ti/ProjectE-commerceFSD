import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustLoginComponent } from './cust-login/cust-login.component';
import { RegisterComponent } from './register/register.component';
//import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from 'src/admin/auth-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CustLoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
    
  ]
})
export class AuthModule { }
