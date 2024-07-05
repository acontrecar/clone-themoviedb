import { Component, Input, signal, WritableSignal } from '@angular/core';
import { Cast } from '../../../core/interfaces/cast.interface';
import { CastCardComponent } from '../../../common/components/cast-card/cast-card.component';

@Component({
  selector: 'movie-movie-cast',
  standalone: true,
  imports: [CastCardComponent],
  templateUrl: './movie-cast.component.html',
  styleUrl: './movie-cast.component.scss',
})
export class MovieCastComponent {
  @Input({ required: true })
  public cast: WritableSignal<Cast[]> = signal<Cast[]>([]);
}
