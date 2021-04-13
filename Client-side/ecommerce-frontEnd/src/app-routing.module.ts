import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


// const routes: Routes = [
//   //{ path: '',component: LayoutComponent}; 
//   {path: '', component: LayoutComponent,
//   children: [
//   {path: '',redirectTo: '/home', pathMatch: 'full' },
//   {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
//   {path: 'order',loadChildren: () => import('./order/order.module').then(m => m.OrderModule)},
//   {path: 'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
//     ]
//   },
//   {path: 'admin',loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
//   {path: '', component: LayoutComponent,
//     children: [
//    { path: '**',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
//     ]},
// ];



const routes: Routes = [
  {path: '',component: LayoutComponent,
  children: [
      {path: '',redirectTo: '/home',pathMatch: 'full',},
      {path: 'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      // { path: 'products',  loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
      {path: 'order',loadChildren: () => import('./order/order.module').then(m => m.OrderModule)},
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    ]
  },
  {
    path: 'admin',
    //canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
