import { Component, Input, WritableSignal, signal } from '@angular/core';
import { MovieById } from '../../../core/interfaces/movie.interface';
import { DatePipe, NgStyle } from '@angular/common';
import { TimeConvertPipe } from '../../../core/pipe/time-convert.pipe';

@Component({
  selector: 'movie-movie-hero',
  standalone: true,
  imports: [NgStyle, DatePipe, TimeConvertPipe],
  templateUrl: './movie-hero.component.html',
  styleUrl: './movie-hero.component.scss',
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
