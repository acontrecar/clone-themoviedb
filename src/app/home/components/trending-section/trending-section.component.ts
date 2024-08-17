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
import { TrendingTimeCategory } from '../../../core/enum';
import { Movie } from '../../../core/interfaces';
import { ThemoviedbService } from '../../../core/services/common/themoviedb.service';
import { AutoDestroyService } from '../../../core/services/utils/auto-destroy.service';
import { MovieCardHomeComponent } from '../movie-card-home/movie-card-home.component';

@Component({
  selector: 'home-trending-section',
  standalone: true,
  imports: [MovieCardHomeComponent, NgClass],
  templateUrl: './trending-section.component.html',
  styleUrl: './trending-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingSectionComponent implements OnInit {
  public movies: WritableSignal<Movie[]> = signal<Movie[]>([]);
  public currentCategory: TrendingTimeCategory = TrendingTimeCategory.Day;
  public timeCategory = TrendingTimeCategory;
  private theMovieDbService = inject(ThemoviedbService);
  private autoDestroy$ = inject(AutoDestroyService);

  ngOnInit(): void {
    this.loadMovies(this.currentCategory);
  }

  loadMovies(category: string): void {
    this.theMovieDbService
      .getTrendingMovies(category)
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe((movies) => this.movies.set(movies));
  }

  changeCategory(category: TrendingTimeCategory): void {
    this.currentCategory = category;
    this.loadMovies(category);
  }
}
