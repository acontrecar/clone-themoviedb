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
import { MovieDBTvResponse } from '../../../core/interfaces';
import { ActivatedRoute } from '@angular/router';
import { AutoDestroyService } from '../../../core/services/utils/auto-destroy.service';
import { forkJoin, takeUntil } from 'rxjs';
import { TvHeroComponent } from '../../components/tv-hero/tv-hero.component';

@Component({
  selector: 'app-tv-page',
  standalone: true,
  imports: [TvHeroComponent],
  templateUrl: './tv-page.component.html',
  styleUrl: './tv-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvPageComponent implements OnInit {
  @Input('id')
  tvId!: string;

  public tv: WritableSignal<MovieDBTvResponse | null> =
    signal<MovieDBTvResponse | null>(null);

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
    forkJoin([this.theMovieDB$.getTvById(this.tvId)])
      .pipe(takeUntil(this.autoDestroy$))
      .subscribe(([tv]) => {
        this.tv.set(tv);
      });
  }
}
