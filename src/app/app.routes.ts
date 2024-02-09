import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {
    path:'search/:searchTerm',
    component: HomeComponent,

  }
];
