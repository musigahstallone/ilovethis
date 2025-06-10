// Product model for ecommerce app
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  gender: 'men' | 'women' | 'baby' | 'unisex';
}
