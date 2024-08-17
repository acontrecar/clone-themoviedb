import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Credits } from '../../../core/interfaces';

@Component({
  selector: 'person-know-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './person-know-card.component.html',
  styleUrl: './person-know-card.component.scss',
})
export class PersonKnowCardComponent {
  @Input()
  public credit: Credits = {} as Credits;
}
