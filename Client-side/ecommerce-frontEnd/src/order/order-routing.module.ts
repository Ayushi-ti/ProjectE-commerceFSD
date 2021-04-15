import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: 'success',
    component: SuccessOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
