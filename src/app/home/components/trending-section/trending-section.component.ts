import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { Movie } from '../../../core/interfaces/movie.interface';
import { ThemoviedbService } from '../../../core/services/common/themoviedb.service';
import { MovieCardHomeComponent } from '../movie-card-home/movie-card-home.component';
import { TrendingTimeCategory } from '../../../core/enum/time-category.enum';

@Component({
  selector: 'home-trending-section',
  standalone: true,
  imports: [MovieCardHomeComponent],
  templateUrl: './trending-section.component.html',
  styleUrl: './trending-section.component.scss',
})
export class TrendingSectionComponent implements OnInit {
  public movies: WritableSignal<Movie[]> = signal<Movie[]>([]);
  public currentCategory: TrendingTimeCategory = TrendingTimeCategory.Day;
  public timeCategory = TrendingTimeCategory;
  private theMovieDbService = inject(ThemoviedbService);

  ngOnInit(): void {
    this.loadMovies(this.currentCategory);
  }

  loadMovies(category: string): void {
    this.theMovieDbService
      .getTrendingMovies(category)
      .subscribe((movies) => this.movies.set(movies));
  }

  changeCategory(category: TrendingTimeCategory): void {
    this.currentCategory = category;
    this.loadMovies(category);
  }
}
