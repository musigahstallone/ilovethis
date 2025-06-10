import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}
