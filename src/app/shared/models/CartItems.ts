import { Food } from './food';

export class CartItem {
  constructor(food: Food) {
    this.food = food;
    this.price = this.food.price;
  }

  food!: Food;
  quantity: number = 1;
  price: number = 0;
}
