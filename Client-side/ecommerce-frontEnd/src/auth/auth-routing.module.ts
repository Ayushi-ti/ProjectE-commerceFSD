import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustLoginComponent } from './cust-login/cust-login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: 'login',
    component: CustLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logByAdmin',
    component: AdminLoginComponent
  }
  // {
  //   path: '',
  //   component: CustLoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
