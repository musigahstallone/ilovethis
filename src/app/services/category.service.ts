import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private categories: Category[] = [
    { id: 1, name: 'Shoes' },
    { id: 2, name: 'Clothes' },
    { id: 3, name: 'Caps' },
    { id: 4, name: 'Baby Clothes' },
    { id: 5, name: 'Men' },
    { id: 6, name: 'Women' },
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}
