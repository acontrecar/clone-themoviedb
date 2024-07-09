import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/layout/home-layout/home-layout.component';
import { MovieHomeLayoutComponent } from './movie/layout/home-layout/home-layout.component';
import { TvHomeLayoutComponent } from './tv/layout/tv-home-layout/tv-home-layout.component';

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

  {
    path: 'tv',
    component: TvHomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./tv/tv.routes').then((r) => r.TV_ROUTES),
      },
    ],
  },
];
