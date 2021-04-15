import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/core/models/product.model';
import { ProductService } from 'src/core/services/product/product.service';
interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm:FormGroup;
  product:Product;
  productId:number=8;
  
  categories:Category[]=[{value:'Electronics',viewValue:'Electronics'},
  {value:'Clothing',viewValue:'Clothing'},{value:'Books',viewValue:'Books'},
  {value:'Accesories',viewValue:'Accesories'},{value:'Bags and Luggage',viewValue:'Bags and Luggage'},
  {value:'Footwear',viewValue:'Footwear'},{value:'Make-up',viewValue:'Make-up'}];

  constructor(private router:Router,private productService:ProductService,private activatedRoute:ActivatedRoute) { 

    this.productForm=new FormGroup({
      product_id:new FormControl({value:'',disabled:true}),
      product_name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      total_quantity:new FormControl('',Validators.required),
      category:new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void { 
  /*  this.activatedRoute.paramMap.subscribe(params => { 
    this.productId = +params.get('pid');
   
});*/
    this.getProductDetails();
  }

  getProductDetails(){
    this.productService.getProductById(this.productId)
    .subscribe((res:any)=>{
      this.product=res;
      this.initializeForm();
    })
  }


  initializeForm(){
    this.productForm=new FormGroup({
      product_id:new FormControl({value:this.product.product_id,disabled:true}),
      product_name: new FormControl(this.product.product_name, Validators.required),
      description: new FormControl(this.product.description, Validators.required),
      price: new FormControl(this.product.product_price, Validators.required),
      total_quantity:new FormControl(this.product.total_quantity,Validators.required),
      category:new FormControl(this.product.category,Validators.required)
    });
  }


  editProduct(){
    this.productService.updateProduct(this.product.product_id,this.productForm.value)
    .subscribe((res:any)=>{
      console.log(res);
      //this.router.navigate(["admin -home"]);
    })
  }


  }

