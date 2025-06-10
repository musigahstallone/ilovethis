import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <ng-container *ngIf="product; else notFound">
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <!-- Image gallery -->
          <div class="flex flex-col-reverse">
            <div class="aspect-w-1 aspect-h-1 w-full">
              <img
                [src]="product.imageUrl"
                [alt]="product.name"
                class="w-full h-full object-center object-cover sm:rounded-lg"
              />
            </div>
          </div>

          <!-- Product info -->
          <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
              {{ product.name }}
            </h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl text-gray-900">
                {{ product.price | currency }}
              </p>
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Description</h3>
              <div class="text-base text-gray-700 space-y-6">
                <p>{{ product.description }}</p>
              </div>
            </div>

            <div class="mt-8 flex">
              <button
                type="button"
                (click)="addToCart()"
                class="w-full bg-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </ng-container>
      <ng-template #notFound>
        <div class="text-center py-16">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Product not found
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <div class="mt-6">
            <a
              routerLink="/products"
              class="text-base font-medium text-primary hover:text-primary-dark"
            >
              View all products<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </ng-template>
    </div>
  `,
})
export class ProductDetailComponent {
  product?: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }
  addToCart() {
    // TODO: Add to cart logic
    alert('Added to cart!');
  }
}
