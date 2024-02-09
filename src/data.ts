import { Food } from './app/shared/models/food';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'chicken Soup',
    price: 12,
    cookTime: '40-50',
    favorite: false,
    stars: 3.0,
    imageUrl: '/assets/food1.jpg',
    tags: ['soup', 'SlowFood'],
    origins: ['pakistan', ' india'],
  },
  {
    id: '2',
    name: 'chicken ',
    price: 13,
    cookTime: '40-50',
    favorite: true,
    stars: 3.0,
    imageUrl: '/assets/food2.jpg',
    tags: ['fastFood', 'pizza'],
    origins: ['pakistan', ' india'],
  },
  {
    id: '3',
    name: 'chicken',
    price: 16,
    cookTime: '40-50',
    favorite: true,
    stars: 4.0,
    imageUrl: '/assets/food2.jpg',
    tags: ['fastFood', 'pizza'],
    origins: ['pakistan', ' india'],
  },
];
