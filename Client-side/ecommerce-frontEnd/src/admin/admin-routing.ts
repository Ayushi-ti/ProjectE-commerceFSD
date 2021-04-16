import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
//import { CustLoginComponent } from '../auth/cust-login/cust-login.component';
//import { RegisterComponent } from '../auth/register/register.component';


const routes: Routes = [
  {
    path: 'home',
    component: AdminHomeComponent
  },
  {
    path: 'editproduct/:product_id',
    component: EditProductComponent
  },
  {
    path: 'productdetail/:product_id',
    component: ProductDetailComponent
  },
  {
    path: 'addcategory',
    component: AddCategoryComponent
  },
  {
  path: 'addproduct',
  component: AddProductComponent
  }
  // {
  // path: '**',
  // component: AdminHomeComponent
  // },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }