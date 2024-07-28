import { Routes } from '@angular/router';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';

export const MOVIE_ROUTES: Routes = [
  {
    path: 'popular',
    component: PopularPageComponent,
  },
  {
    path: ':id',
    component: MoviePageComponent,
  },
];
