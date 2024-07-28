import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ThemoviedbService } from '../../../core/services/common/themoviedb.service';
import { takeUntil } from 'rxjs';
import { AutoDestroyService } from '../../../core/services/utils/auto-destroy.service';
import { Movie } from '../../../core/interfaces';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  imports: [],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss',
})
export class PopularPageComponent implements OnInit {
  private theMovieDbService = inject(ThemoviedbService);
  private autoDestroy$ = inject(AutoDestroyService);
  private currentPage: number = 1;
  public movies: WritableSignal<Movie[]> = signal([]);

  ngOnInit(): void {
    this.loadMovies();
  }

  public loadMovies() {
    this.theMovieDbService
      .getPopularMoviesAndTvPaginates('movie', this.currentPage)
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe((movies: Movie[]) => {
        this.movies.set([...this.movies(), ...movies]);
      });
  }

  public loadMoreMovies() {
    this.currentPage++;
    this.loadMovies();
  }
}
