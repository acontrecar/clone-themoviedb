import { NgClass } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  WritableSignal,
  signal,
  inject,
} from '@angular/core';
import { takeUntil } from 'rxjs';
import { PopularTimeCategory } from '../../../core/enum';
import { Movie } from '../../../core/interfaces';
import { ThemoviedbService } from '../../../core/services/common/themoviedb.service';
import { AutoDestroyService } from '../../../core/services/utils/auto-destroy.service';
import { MovieCardHomeComponent } from '../movie-card-home/movie-card-home.component';

@Component({
  selector: 'home-popular-section',
  standalone: true,
  imports: [MovieCardHomeComponent, NgClass],
  templateUrl: './popular-section.component.html',
  styleUrl: './popular-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularSectionComponent implements OnInit {
  public movies: WritableSignal<Movie[]> = signal<Movie[]>([]);
  public currentCategory: PopularTimeCategory = PopularTimeCategory.Tv;
  public popularTimeCategory = PopularTimeCategory;
  private theMovieDbService = inject(ThemoviedbService);
  private autoDestroy$ = inject(AutoDestroyService);

  ngOnInit(): void {
    this.loadMovies(this.currentCategory);
  }

  loadMovies(category: string): void {
    this.theMovieDbService
      .getPopularMovies(category)
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe((movies) => {
        if (this.currentCategory === this.popularTimeCategory.Movie) {
          movies.map((m) => {
            m.media_type = 'movie';
          });
        } else {
          movies.map((m) => {
            m.media_type = 'tv';
          });
        }
        this.movies.set(movies);
      });
  }

  changeCategory(category: PopularTimeCategory): void {
    this.currentCategory = category;
    this.loadMovies(category);
  }
}
