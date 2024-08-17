import {
  Component,
  ChangeDetectionStrategy,
  Input,
  WritableSignal,
  signal,
} from '@angular/core';
import { CastCardComponent } from '../../../common/components/cast-card/cast-card.component';
import { Cast } from '../../../core/interfaces';

@Component({
  selector: 'movie-movie-cast',
  standalone: true,
  imports: [CastCardComponent],
  templateUrl: './movie-cast.component.html',
  styleUrl: './movie-cast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCastComponent {
  @Input({ required: true })
  public cast: WritableSignal<Cast[]> = signal<Cast[]>([]);
}
