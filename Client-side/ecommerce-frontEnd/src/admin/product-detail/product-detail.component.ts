import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { ProductService } from 'src/core/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product_id:number;
product_name:string;
total_quantity:number;
description:string;
category:string;
product_price:number;
pid:number;
//Product_Image:string='assets/images/profilepic.jpg';








  constructor(private productService:ProductService,private router:Router,private session: SessionStorageService,private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.product_id);
      this.pid=params.product_id;
      this.getProductInformation();

    })

  }
  getProductInformation(){
  
    this.productService.getProductById(this.pid)
     .subscribe((data:any)=>{
      console.log(data);
     this.product_id=data.product_id;
     this.product_name=data.product_name;
     this.total_quantity=data.total_quantity;
     this.description=data.description;
     this.category=data.category;
     this.product_price=data.product_price;
     
     
    }); 
    
  }
  

}
