import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/core/models/product.model';
import { ProductService } from 'src/core/services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product')
  product:Product;
  constructor(private route:Router,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  
  editProduct(product_id){
    console.log(product_id);
    this.router.navigate(['/../admin/editproduct/'+ product_id]);
    
  }
  removeProduct(pid){
    console.log(pid);
    this.productService.deleteProduct(pid)
    .subscribe((res:any)=>{
      this.router.navigate(['/../admin/home/']);
        
    }); 
    
   
  }
  
 

}
