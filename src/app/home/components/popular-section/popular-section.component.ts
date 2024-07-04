import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { Movie } from '../../../core/interfaces/movie.interface';
import { PopularTimeCategory } from '../../../core/enum/popular-category.enum';
import { TrendingTimeCategory } from '../../../core/enum/time-category.enum';
import { ThemoviedbService } from '../../../core/services/common/themoviedb.service';
import { MovieCardHomeComponent } from '../movie-card-home/movie-card-home.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'home-popular-section',
  standalone: true,
  imports: [MovieCardHomeComponent, NgClass],
  templateUrl: './popular-section.component.html',
  styleUrl: './popular-section.component.scss',
})
export class PopularSectionComponent implements OnInit {
  public movies: WritableSignal<Movie[]> = signal<Movie[]>([]);
  public currentCategory: PopularTimeCategory = PopularTimeCategory.Tv;
  public popularTimeCategory = PopularTimeCategory;
  private theMovieDbService = inject(ThemoviedbService);

  ngOnInit(): void {
    this.loadMovies(this.currentCategory);
  }

  loadMovies(category: string): void {
    this.theMovieDbService
      .getPopularMovies(category)
      .subscribe((movies) => this.movies.set(movies));
  }

  changeCategory(category: PopularTimeCategory): void {
    this.currentCategory = category;
    this.loadMovies(category);
  }
}
