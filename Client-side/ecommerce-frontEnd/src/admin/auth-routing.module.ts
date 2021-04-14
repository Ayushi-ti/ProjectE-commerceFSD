import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustLoginComponent } from '../auth/cust-login/cust-login.component';
import { RegisterComponent } from '../auth/register/register.component';


const routes: Routes = [
  {
    path: 'login',
    component: CustLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
