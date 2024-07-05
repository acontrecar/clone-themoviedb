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
import { Cast } from '../../../core/interfaces/cast.interface';
import { MovieCastComponent } from '../../components/movie-cast/movie-cast.component';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [MovieHeroComponent, MovieCastComponent],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements OnInit {
  @Input('id')
  movieId!: string;

  public movie: WritableSignal<MovieById | null> = signal<MovieById | null>(
    null
  );

  public cast: WritableSignal<Cast[]> = signal<Cast[]>([]);

  public movieServie = inject(ThemoviedbService);

  ngOnInit(): void {
    this.movieServie
      .getMovieById(this.movieId)
      .subscribe((movie) => this.movie.set(movie));

    this.movieServie
      .getCast(this.movieId)
      .subscribe((cast) => this.cast.set(cast));
  }
}
