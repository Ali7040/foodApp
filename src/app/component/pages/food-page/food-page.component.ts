import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { TagsComponent } from '../../tags/tags.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, TagsComponent, RouterLink],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss',
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    activatedRoute: ActivatedRoute,
    foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodService.getFoodById(params['id']);
      }
    });
  }
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
