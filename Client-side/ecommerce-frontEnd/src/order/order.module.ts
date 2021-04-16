import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material.module';
import { CartComponent } from './components/cart/cart.component';
import { ShowCartComponent } from './components/show-cart/show-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessOrderComponent } from './components/success-order/success-order.component';
import { OrderReturnsComponent } from './components/orders-returns/order-returns.component';
import { OrderReturnDetailsComponent } from './components/order-return-details/order-return-details.component';
import { OrderRoutingModule } from './order-routing.module';




@NgModule({
  declarations: [
   CartComponent,
    ShowCartComponent,
    CheckoutComponent,
    SuccessOrderComponent,
    OrderReturnsComponent,
    OrderReturnDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    OrderRoutingModule,
 
  
  ],
  exports:[CartComponent,ShowCartComponent,CheckoutComponent,
    SuccessOrderComponent,OrderReturnsComponent,OrderReturnDetailsComponent]
})
export class OrderModule { }
