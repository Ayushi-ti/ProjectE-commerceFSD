import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';


import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from './core/services/customer/customer.service';
import { HomeModule } from './home/home.module';





@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ProductsModule,
    OrderModule,
    AdminModule,
    SharedModule,
    FormsModule,
    CoreModule,
    NgbModule
  ],

  providers: [
    MaterialModule,
    SharedModule,
    FormsModule,
    CoreModule,
    NgbModule,
    HttpClientModule
    
   
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
