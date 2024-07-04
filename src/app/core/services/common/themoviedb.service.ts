import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../interfaces/movie.interface';
import { TrendingAllResponse } from '../../interfaces/trending-all-response.interface';
import { mapToSimplifiedMovie } from '../../mappers/movie.mapper';

@Injectable({
  providedIn: 'root',
})
export class ThemoviedbService {
  private readonly baseUrl: string = environment.BASE_API_URL;
  private http = inject(HttpClient);

  // public getTrendingAllByDay(): Observable<Movie[]> {
  //   const url = `${this.baseUrl}/trending/all/day`;

  //   return this.http
  //     .get<TrendingAllResponse>(url)
  //     .pipe(
  //       map((response) =>
  //         response.results.map((movie) => mapToSimplifiedMovie(movie))
  //       )
  //     );
  // }

  public getTrendingMovies(timeWindow: string): Observable<Movie[]> {
    const url = `${this.baseUrl}/trending/all/${timeWindow}`;

    return this.http
      .get<TrendingAllResponse>(url)
      .pipe(
        map((response) =>
          response.results.map((movie) => mapToSimplifiedMovie(movie))
        )
      );
  }

  // public getTrendingAllByWeek(): Observable<Movie[]> {
  //   const url = `${this.baseUrl}/trending/all/week`;

  //   return this.http
  //     .get<TrendingAllResponse>(url)
  //     .pipe(
  //       map((response) =>
  //         response.results.map((movie) => mapToSimplifiedMovie(movie))
  //       )
  //     );
  // }
}
