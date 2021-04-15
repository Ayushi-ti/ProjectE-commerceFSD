import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/core/models/product.model';
import { RepositoriesService } from 'src/core/services/repositories.service';
import {MessengerService} from "../../core/services/messenger/messenger.service";
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input('product')
  product:Product;
  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  
  }

  addCart(){
    console.log("add to cart");
      this.msg.sendMsg(this.product);  
    }
}
