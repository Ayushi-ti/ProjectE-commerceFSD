import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/models/product.model';
import { ProductService } from 'src/core/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  
  //private url:string = "http://localhost:3000/Products";
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getProducts()
    .subscribe((res:any)=>{
      console.log(res);
      this.products = res;
    })
  }
 

  /*
  fetchProducts(){
    fetch(this.url, {
      method: "get",
      
    })
    .then((res:any)=>{
     let r = res.json();
      return r;
    })
    .then((data:any)=>{
      console.log(data);
      this.products = data;
    })

    .catch((err:any)=>{
      console.log("some error occurred")
      console.log(err)
    })



    }
*/


  }


