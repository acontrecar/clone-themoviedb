import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { MovieDBTvResponse } from '../../../core/interfaces';
import { DatePipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'tv-tv-hero',
  standalone: true,
  imports: [NgStyle, DatePipe, NgClass],
  templateUrl: './tv-hero.component.html',
  styleUrl: './tv-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvHeroComponent {
  @Input({ required: true })
  public tv: WritableSignal<MovieDBTvResponse | null> =
    signal<MovieDBTvResponse | null>(null);

  redirectHomePage(): void {
    if (this.tv()) {
      window.open(this.tv()?.homepage, '_blank');
    }
  }
}
