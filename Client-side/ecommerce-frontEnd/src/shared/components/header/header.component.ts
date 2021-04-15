import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Product } from 'src/core/models/product.model';
import { CartService } from 'src/core/services/cart/cart.service';
import { MessengerService } from 'src/core/services/messenger/messenger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
 

  cartItems: Product[] = [];
  cartTotal = 0;
  constructor(private router: Router,private msg: MessengerService, private cartService: CartService, private session: SessionStorageService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) => {

      
      if (this.session.get("cartItems") != null) {
        this.cartItems = this.session.get("cartItems");
      }

      this.cartItems.push({
        product_id: product.product_id,
        product_name: product.product_name,
        price: product.price,
        total_quantity: 1,
        description: product.description,
        category:product.category,
        product_image: product.product_image
      });
      this.cartTotal = this.cartTotal + 1;


      this.session.set("cartItems", this.cartItems);
    })

    
    this.getCartItems();
  }

  getCartItems(){
    this.cartTotal=0;
    let Items:Product[]=this.session.get("cartItems");
    if( Items!=null && Items.length > 0){
      Items.forEach(item=>{
        this.cartTotal+=1;
      })
    }


  }

}
