import { Routes } from '@angular/router';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

export const MOVIE_ROUTES: Routes = [
  {
    path: ':id',
    component: MoviePageComponent,
  },
];
