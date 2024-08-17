import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ThemoviedbService } from '../../../core/services/common/themoviedb.service';
import {
  Cast,
  Keyword,
  MovieDBTvResponse,
  Recommendation,
} from '../../../core/interfaces';
import { ActivatedRoute } from '@angular/router';
import { AutoDestroyService } from '../../../core/services/utils/auto-destroy.service';
import { forkJoin, takeUntil } from 'rxjs';
import { TvHeroComponent } from '../../components/tv-hero/tv-hero.component';
import { MovieCastComponent } from '../../../movie/components/movie-cast/movie-cast.component';
import { RecommendationCarouselComponent } from '../../../common/components/recommendation-carousel/recommendation-carousel.component';
import { TvInfoComponent } from '../../components/tv-info/tv-info.component';

@Component({
  selector: 'app-tv-page',
  standalone: true,
  imports: [
    TvHeroComponent,
    MovieCastComponent,
    RecommendationCarouselComponent,
    TvInfoComponent,
  ],
  templateUrl: './tv-page.component.html',
  styleUrl: './tv-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvPageComponent implements OnInit {
  @Input('id')
  tvId!: string;

  public tv: WritableSignal<MovieDBTvResponse | null> =
    signal<MovieDBTvResponse | null>(null);
  public cast: WritableSignal<Cast[]> = signal<Cast[]>([]);
  public recommendation: Recommendation[] = [];
  public keyWords: Keyword[] = [];

  private theMovieDB$ = inject(ThemoviedbService);
  private autoDestroy$ = inject(AutoDestroyService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.tvId = params['id'];
      this.loadData();
    });
  }

  public loadData(): void {
    forkJoin([
      this.theMovieDB$.getTvById(this.tvId),
      this.theMovieDB$.getTvCast(this.tvId),
      this.theMovieDB$.getTvRecommendations(this.tvId),
      this.theMovieDB$.getTvKeywords(this.tvId),
    ])
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe(([tv, cast, recommendation, keywords]) => {
        this.tv.set(tv);
        this.cast.set(cast);
        this.recommendation = recommendation;
        this.keyWords = keywords;
      });
  }
}
