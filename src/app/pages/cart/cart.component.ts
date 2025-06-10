import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-white">
      <div
        class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h1
          class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Shopping Cart
        </h1>

        <div class="mt-12">
          <div *ngIf="items.length; else empty">
            <div class="flow-root">
              <ul role="list" class="-my-6 divide-y divide-gray-200">
                <li *ngFor="let item of items" class="py-6 flex">
                  <div
                    class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden"
                  >
                    <img
                      [src]="item.imageUrl || 'assets/placeholder.jpg'"
                      [alt]="item.name"
                      class="w-full h-full object-center object-cover"
                    />
                  </div>

                  <div class="ml-4 flex-1 flex flex-col">
                    <div>
                      <div
                        class="flex justify-between text-base font-medium text-gray-900"
                      >
                        <h3>{{ item.name }}</h3>
                        <p class="ml-4">{{ item.price | currency }}</p>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">
                        {{ item.description }}
                      </p>
                    </div>
                    <div class="flex-1 flex items-end justify-between text-sm">
                      <div class="flex items-center">
                        <button
                          type="button"
                          class="font-medium text-primary hover:text-primary-dark"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-10 border-t border-gray-200 pt-6">
              <div
                class="flex justify-between text-base font-medium text-gray-900"
              >
                <p>Subtotal</p>
                <p>{{ getTotal() | currency }}</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>

              <div class="mt-6">
                <button
                  (click)="checkout()"
                  class="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Checkout
                </button>
              </div>

              <div
                class="mt-6 flex justify-center text-sm text-center text-gray-500"
              >
                <p>
                  or
                  <a
                    routerLink="/products"
                    class="text-primary hover:text-primary-dark font-medium"
                  >
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <ng-template #empty>
            <div class="text-center py-12">
              <svg
                class="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  vector-effect="non-scaling-stroke"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 class="mt-2 text-sm font-medium text-gray-900">
                Your cart is empty
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                Start adding some items to your cart!
              </p>
              <div class="mt-6">
                <a
                  routerLink="/products"
                  class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  View Products
                </a>
              </div>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
  `,
})
export class CartComponent {
  items: Product[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  checkout() {
    // TODO: Navigate to checkout
    alert('Proceeding to checkout...');
  }
}
