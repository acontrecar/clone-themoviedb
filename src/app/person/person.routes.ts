import { Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PersonDetailPageComponent } from './page/person-detail-page/person-detail-page.component';

export const PERSON_ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: ':id',
    component: PersonDetailPageComponent,
  },
];
