import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AuthComponent } from './pages/auth/auth.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

const canActivate = () => {
  const authService = inject(AuthService);
  if (!authService.isLoggedIn()) {
    window.alert('Please login first');
    return false;
  }
  return true;
};

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
    canActivate: [canActivate],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout',
    canActivate: [canActivate],
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
