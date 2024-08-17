import { DatePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../../core/interfaces';
import { RounNumberPipe } from '../../../core/pipe';

@Component({
  selector: 'home-movie-card-home',
  standalone: true,
  imports: [DatePipe, RounNumberPipe, RouterLink],
  templateUrl: './movie-card-home.component.html',
  styleUrl: './movie-card-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardHomeComponent {
  @Input({ required: true })
  public movie: Movie = {
    id: 0,
    title: '',
    rating: 0,
    poster: '',
    backdrop: '',
    media_type: '',
  };
}
