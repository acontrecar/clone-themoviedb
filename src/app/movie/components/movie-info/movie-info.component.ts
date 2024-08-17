import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Keyword } from '../../../core/interfaces';
import { CurrencyFormatterPipe } from '../../../core/pipe';

@Component({
  selector: 'movie-movie-info',
  standalone: true,
  imports: [CurrencyFormatterPipe],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieInfoComponent {
  @Input({ required: true })
  public original_title: string = '';

  @Input({ required: true })
  public status: string = '';

  @Input({ required: true })
  public original_language: string = '';

  @Input({ required: true })
  public budget: number = 0;

  @Input({ required: true })
  public revenue: number = 0;

  @Input({ required: true })
  public homePage: string = '';

  @Input({ required: true })
  public keywords: Keyword[] = [];
}
