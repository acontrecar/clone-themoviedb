import { NgStyle, DatePipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  WritableSignal,
  signal,
} from '@angular/core';
import { MovieById } from '../../../core/interfaces';
import { TimeConvertPipe } from '../../../core/pipe';

@Component({
  selector: 'movie-movie-hero',
  standalone: true,
  imports: [NgStyle, DatePipe, TimeConvertPipe],
  templateUrl: './movie-hero.component.html',
  styleUrl: './movie-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieHeroComponent {
  @Input({ required: true })
  movie: WritableSignal<MovieById | null> = signal<MovieById | null>(null);

  redirectHomePage(): void {
    if (this.movie()) {
      window.open(this.movie()?.homepage, '_blank');
    }
  }
}
