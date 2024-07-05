import {
  Component,
  Input,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { MovieById } from '../../../core/interfaces/movie.interface';
import { ThemoviedbService } from '../../../core/services/common/themoviedb.service';
import { MovieHeroComponent } from '../../components/movie-hero/movie-hero.component';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [MovieHeroComponent],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements OnInit {
  @Input('id')
  movieId!: string;

  public movie: WritableSignal<MovieById | null> = signal<MovieById | null>(
    null
  );

  public movieServie = inject(ThemoviedbService);

  ngOnInit(): void {
    this.movieServie
      .getMovieById(this.movieId)
      .subscribe((movie) => this.movie.set(movie));
  }
}
