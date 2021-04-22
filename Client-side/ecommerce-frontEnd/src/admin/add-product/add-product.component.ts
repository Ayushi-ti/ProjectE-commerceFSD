import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/core/services/category/category.service';
import { ProductService } from 'src/core/services/product/product.service';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm:FormGroup;
  categories:Category[];

  constructor(private productService:ProductService,private router: Router,private categoryService:CategoryService) { 
    this.productForm = new FormGroup({

      product_name: new FormControl('', Validators.required),
      
      description: new FormControl('', Validators.required),

      product_price: new FormControl('', Validators.required),
      total_quantity:new FormControl('',Validators.required),
      category:new FormControl('',Validators.required)

  
  });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getCategory()
    .subscribe((res:any)=>{
      this.categories=res;
    })
  }


  saveProduct(){
  console.log(this.productForm.value);
    const product=this.productForm.value;
      
     this.productService.saveProduct(this.productForm.value)
     .subscribe((res:any)=>{
      console.log(res);
    })
  
    alert("Product added successfully");
    this.router.navigate(['/../admin/home']);
  }
  
  addCategory(){
    this.router.navigate(['/../admin/addcategory/0']);
  }




}
