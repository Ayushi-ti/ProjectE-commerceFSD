
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
  flag:boolean=false;
  EmailId;
  emails:any[]=[];
 

  cartItems: Product[] = [];
  cartTotal = 0;
  constructor(private session: SessionStorageService,private router: Router,private msg: MessengerService, private cartService: CartService) {
  this.EmailId=this.session.get('email');

  
  if(this.EmailId!=null)
  this.flag=true;
  }
 
  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) => {

      
      if (this.session.get("cartItems") != null) {
        this.cartItems = this.session.get("cartItems");
      }

      this.cartItems.push({
        product_id: product.product_id,
        product_name: product.product_name,
        product_price: product.product_price,
        total_quantity: product.total_quantity,
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

logout(){
  this.session.remove('email');
}

goToProfile(){
  this.emails=this.session.get("email");
console.log(this.emails);
  
  if(this.emails==null ){
    this.router.navigate(['/../auth/login']);
  }
  this.router.navigate(['/../home/profile']);
}


}
