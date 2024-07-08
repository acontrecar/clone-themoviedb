import {
  ChangeDetectionStrategy,
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
import { MovieInfoComponent } from '../../components/movie-info/movie-info.component';
import { AutoDestroyService } from '../../../core/services/utils/auto-destroy.service';
import { forkJoin, takeUntil } from 'rxjs';
import { Keyword } from '../../../core/interfaces/keywords.interface';
import { Recommendation } from '../../../core/interfaces/recommendations.interfaces';
import { RecommendationCarouselComponent } from '../../../common/components/recommendation-carousel/recommendation-carousel.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [
    MovieHeroComponent,
    RecommendationCarouselComponent,
    MovieCastComponent,
    MovieInfoComponent,
  ],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviePageComponent implements OnInit {
  @Input('id')
  movieId!: string;

  public movie: WritableSignal<MovieById | null> = signal<MovieById | null>(
    null
  );
  public cast: WritableSignal<Cast[]> = signal<Cast[]>([]);
  public keyWords: Keyword[] = [];
  public recommendation: Recommendation[] = [];

  public movieService = inject(ThemoviedbService);
  public autoDestroy$ = inject(AutoDestroyService);

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = params['id'];
      this.loadData();
    });
  }

  loadData(): void {
    forkJoin([
      this.movieService.getMovieById(this.movieId),
      this.movieService.getCast(this.movieId),
      this.movieService.getKeywords(this.movieId),
      this.movieService.getRecommendations(this.movieId),
    ])
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe(([movie, cast, keywords, recommendation]) => {
        this.movie.set(movie);
        this.cast.set(cast);
        this.keyWords = keywords;
        this.recommendation = recommendation;

        console.log(recommendation);
      });
  }
}
