import { Component } from '@angular/core';
import { TrendingSectionComponent } from '../../components/trending-section/trending-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TrendingSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
