import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Recommendation } from '../../../core/interfaces';
import { RecommendationCardComponent } from '../recommendation-card/recommendation-card.component';

@Component({
  selector: 'shared-recommendation-carousel',
  standalone: true,
  imports: [RecommendationCardComponent],
  templateUrl: './recommendation-carousel.component.html',
  styleUrl: './recommendation-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationCarouselComponent {
  @Input({ required: true })
  public recommendation: Recommendation[] = [];
}
