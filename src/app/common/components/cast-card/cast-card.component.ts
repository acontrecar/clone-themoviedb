import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cast } from '../../../core/interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'common-cast-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cast-card.component.html',
  styleUrl: './cast-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CastCardComponent {
  @Input({ required: true })
  public cast: Cast = {
    id: 0,
    name: '',
    character: '',
    avatar: '',
  };
}
