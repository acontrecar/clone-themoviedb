import { Component, Input, signal, WritableSignal } from '@angular/core';
import { Cast } from '../../../core/interfaces/cast.interface';

@Component({
  selector: 'common-cast-card',
  standalone: true,
  imports: [],
  templateUrl: './cast-card.component.html',
  styleUrl: './cast-card.component.scss',
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
