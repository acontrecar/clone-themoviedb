import { Component, Input, WritableSignal, signal } from '@angular/core';
import { Movie } from '../../../core/interfaces/movie.interface';
import { DatePipe } from '@angular/common';
import { RounNumberPipe } from '../../../core/pipe/roun-number-pipe.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-movie-card-home',
  standalone: true,
  imports: [DatePipe, RounNumberPipe, RouterLink],
  templateUrl: './movie-card-home.component.html',
  styleUrl: './movie-card-home.component.scss',
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
