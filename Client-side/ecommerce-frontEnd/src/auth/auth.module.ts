import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustLoginComponent } from './cust-login/cust-login.component';
import { RegisterComponent } from './register/register.component';
//import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from 'src/auth/auth-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { MatDialog } from '@angular/material/dialog';



@NgModule({
  declarations: [
    CustLoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    ForgotPassComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule    
  ],
  providers:[MatDialog]
})
export class AuthModule { }
