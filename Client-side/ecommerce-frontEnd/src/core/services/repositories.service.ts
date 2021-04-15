import { Injectable } from '@angular/core';
import { CartService } from './cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(  public cartService: CartService) { }
}
