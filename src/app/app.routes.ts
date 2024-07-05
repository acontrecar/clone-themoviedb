import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/layout/home-layout/home-layout.component';
import { MovieHomeLayoutComponent } from './movie/layout/home-layout/home-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.routes').then((r) => r.HOME_ROUTES),
      },
    ],
  },
  {
    path: 'movie',
    component: MovieHomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./movie/movie.routes').then((r) => r.MOVIE_ROUTES),
      },
    ],
  },
];
