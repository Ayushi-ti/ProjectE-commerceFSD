import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustLoginComponent } from 'src/auth/cust-login/cust-login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShowCartComponent } from './components/show-cart/show-cart.component';
import { SuccessOrderComponent } from './components/success-order/success-order.component';



const routes: Routes = [
  {
    path: 'show',
    component: ShowCartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'success/:id',
    component: SuccessOrderComponent
  },
  {path:'login',
  component:CustLoginComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
