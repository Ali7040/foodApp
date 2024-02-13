import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../../search/search.component';
import { TagsComponent } from '../../tags/tags.component';
import { NotFoundComponent } from '../../not-found/not-found.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    StarRatingComponent,
    SearchComponent,
    TagsComponent,
    RouterLink,
    NotFoundComponent,
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
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        foodsObservable = this.foodService.getAllFoodBySearchTerm(
          params['searchTerm']
        );
      else if (params['tag'])
        foodsObservable = this.foodService.getAllFoodByTags(params['tag']);
      else foodsObservable = foodService.getAll();

      foodsObservable.subscribe((serverFood) => (this.foods = serverFood));
    });
  }
}
