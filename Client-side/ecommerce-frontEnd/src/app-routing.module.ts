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


//http://localhost:2400
const routes: Routes = [
 // http://localhost:4200/
   {path: '',component: LayoutComponent,
   children: [
            {path: 'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
            { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
            { path: 'info', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
            { path: 'cart', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
            {path: '',redirectTo: '/home',pathMatch: 'full'}
             ]
    },

  {path: 'admin',loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];
 
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
    
  // {  
  //   path: 'admin',
  //  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // }
  // {
  //   //http://:localhost:2400/home automatically directs to home 
  //   path: '**',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  // },
//];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
