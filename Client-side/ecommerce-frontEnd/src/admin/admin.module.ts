import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';



@NgModule({
  declarations: [
    AddProductComponent,
    AdminHomeComponent,
    ProductCardComponent,
    EditProductComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports:[AddProductComponent,AdminHomeComponent,ProductCardComponent,
    EditProductComponent,
    AddCategoryComponent]
})
export class AdminModule { }
