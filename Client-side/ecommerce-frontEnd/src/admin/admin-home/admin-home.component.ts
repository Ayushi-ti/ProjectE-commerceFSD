import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/models/product.model';
import { ProductService } from 'src/core/services/product/product.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  products:Product[]=[];

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

}
