import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TrendingSectionComponent } from '../../components/trending-section/trending-section.component';
import { PopularSectionComponent } from '../../components/popular-section/popular-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TrendingSectionComponent, PopularSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
