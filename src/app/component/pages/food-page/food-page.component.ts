import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { TagsComponent } from '../../tags/tags.component';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../not-found/not-found.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [
    CommonModule,
    StarRatingComponent,
    TagsComponent,
    RouterLink,
    NotFoundComponent,
  ],
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
        foodService
          .getFoodById(params['id'])
          .subscribe((serverFood) => (this.food = serverFood));
      }
    });
  }
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
