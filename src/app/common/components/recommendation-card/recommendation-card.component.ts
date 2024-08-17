import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { MediaType } from '../../../core/interfaces';
import { PercentagePipe } from '../../../core/pipe';

@Component({
  selector: 'common-recommendation-card',
  standalone: true,
  imports: [PercentagePipe, RouterLink],
  templateUrl: './recommendation-card.component.html',
  styleUrl: './recommendation-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationCardComponent {
  @Input({ required: true })
  public id: number = 0;

  @Input({ required: true })
  public media_type: MediaType = MediaType.Movie;

  @Input({ required: true })
  public poster_path: string = '';

  @Input({ required: true })
  public release_date: Date | null = null;

  @Input({ required: true })
  public title: string = '';

  @Input({ required: true })
  public vote_average: number = 0;

  constructor(private router: Router) {}

  redirectToHomePage(): void {
    // const route = `${this.media_type}/${this.id}`;
    this.router.navigate(['/' + this.media_type, this.id]);
  }
}
