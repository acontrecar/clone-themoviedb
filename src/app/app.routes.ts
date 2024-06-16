import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/layout/home-layout/home-layout.component';

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
];
