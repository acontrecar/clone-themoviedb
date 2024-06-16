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

@Component({
  selector: 'home-trending-section',
  standalone: true,
  imports: [MovieCardHomeComponent],
  templateUrl: './trending-section.component.html',
  styleUrl: './trending-section.component.scss',
})
export class TrendingSectionComponent implements OnInit {
  public movies: WritableSignal<Movie[]> = signal<Movie[]>([]);

  private theMovieDbService = inject(ThemoviedbService);

  ngOnInit(): void {
    this.theMovieDbService
      .getTrendingAllByDay()
      .subscribe((movies) => this.movies.set(movies));
  }
}
