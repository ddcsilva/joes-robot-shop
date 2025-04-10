import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: IProduct[] = [];

  constructor() {}

  addToCart(product: IProduct) {
    this.cart.push(product);
    console.log(`Produto adicionado ao carrinho: ${product.name}`);
  }
}
