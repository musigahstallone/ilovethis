import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="bg-white">
      <div
        class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Our Products</h2>

        <div
          class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <a
            *ngFor="let product of products"
            [routerLink]="['/products', product.id]"
            class="group"
          >
            <div
              class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
            >
              <img
                [src]="product.imageUrl || 'assets/placeholder.jpg'"
                [alt]="product.name"
                class="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ product.price | currency }}
            </p>
            <p class="mt-1 text-sm text-gray-500 line-clamp-2">
              {{ product.description }}
            </p>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class ProductListComponent {
  products: Product[];
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
