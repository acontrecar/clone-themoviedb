import { Component, Input } from '@angular/core';
import { Credits } from '../../../core/interfaces';
import { PersonKnowCardComponent } from '../person-know-card/person-know-card.component';

@Component({
  selector: 'person-know-carousel',
  standalone: true,
  imports: [PersonKnowCardComponent],
  templateUrl: './person-know-carousel.component.html',
  styleUrl: './person-know-carousel.component.scss',
})
export class PersonKnowCarouselComponent {
  @Input()
  public credits: Credits[] = [];
}
