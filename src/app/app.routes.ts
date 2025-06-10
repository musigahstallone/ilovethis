import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AuthComponent } from './pages/auth/auth.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'products',
    component: ProductListComponent,
    title: 'Products',
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    title: 'Product Details',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Shopping Cart',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout',
  },
  {
    path: 'auth',
    component: AuthComponent,
    title: 'Authentication',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
