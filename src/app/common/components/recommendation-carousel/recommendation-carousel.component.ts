import { Component, Input } from '@angular/core';
import { Recommendation } from '../../../core/interfaces/recommendations.interfaces';
import { RecommendationCardComponent } from '../recommendation-card/recommendation-card.component';

@Component({
  selector: 'shared-recommendation-carousel',
  standalone: true,
  imports: [RecommendationCardComponent],
  templateUrl: './recommendation-carousel.component.html',
  styleUrl: './recommendation-carousel.component.scss',
})
export class RecommendationCarouselComponent {
  @Input({ required: true })
  public recommendation: Recommendation[] = [];
}
