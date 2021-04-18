import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  categories:Category[]=[{value:'Electronics',viewValue:'Electronics'},
  {value:'Clothing',viewValue:'Clothing'},{value:'Books',viewValue:'Books'},
  {value:'Accesories',viewValue:'Accesories'},{value:'Bags and Luggage',viewValue:'Bags and Luggage'},
  {value:'Footwear',viewValue:'Footwear'},{value:'Make-up',viewValue:'Make-up'}];
  

  constructor(private productService:ProductService,private router: Router) { 
    this.productForm = new FormGroup({

      product_name: new FormControl('', Validators.required),
      
      description: new FormControl('', Validators.required),

      product_price: new FormControl('', Validators.required),
      total_quantity:new FormControl('',Validators.required),
      category:new FormControl('',Validators.required)

  
  });
  }

  ngOnInit(): void {
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
  
}
