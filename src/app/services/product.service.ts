import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Men Shoes',
      description: 'Comfortable running shoes',
      price: 59.99,
      imageUrl: '/beach.jpeg',
      category: 'shoes',
      gender: 'men',
    },
    {
      id: 2,
      name: 'Women Dress',
      description: 'Elegant summer dress',
      price: 39.99,
      imageUrl: '/beach.jpeg',
      category: 'clothes',
      gender: 'women',
    },
    {
      id: 3,
      name: 'Cap',
      description: 'Stylish cap',
      price: 14.99,
      imageUrl: '/beach.jpeg',
      category: 'caps',
      gender: 'unisex',
    },
    {
      id: 4,
      name: 'Baby Onesie',
      description: 'Soft cotton onesie',
      price: 12.99,
      imageUrl: '/beach.jpeg',
      category: 'baby clothes',
      gender: 'baby',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }
}
