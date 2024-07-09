import { Routes } from '@angular/router';
import { TvPageComponent } from './pages/tv-page/tv-page.component';

export const TV_ROUTES: Routes = [
  {
    path: ':id',
    component: TvPageComponent,
  },
];
