import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditProductComponent } from './edit-product/edit-product.component';
//import { CustLoginComponent } from '../auth/cust-login/cust-login.component';
//import { RegisterComponent } from '../auth/register/register.component';


const routes: Routes = [
  {
    path: 'home',
    component: AdminHomeComponent
  },
  {
    path: 'editproduct',
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }