import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../../search/search.component';
import { TagsComponent } from '../../tags/tags.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    StarRatingComponent,
    SearchComponent,
    TagsComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodBySearchTerm(
          params['searchTerm']
        );
      } else if (params['tag']) {
        this.foods = this.foodService.getAllFoodByTags(params['tag']);
      } else {
        this.foods = foodService.getAll();
      }
    });
  }
}
