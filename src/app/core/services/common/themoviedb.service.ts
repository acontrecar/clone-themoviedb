import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieById } from '../../interfaces/movie.interface';
import { TrendingAllResponse } from '../../interfaces/trending-all-response.interface';
import { mapToSimplifiedMovie } from '../../mappers/movie.mapper';
import { Cast, MovieDBCastResponse } from '../../interfaces/cast.interface';
import { mapToSimplifiedCast } from '../../mappers/cast.mapper';

@Injectable({
  providedIn: 'root',
})
export class ThemoviedbService {
  private readonly baseUrl: string = environment.BASE_API_URL;
  private http = inject(HttpClient);

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

  public getPopularMovies(timeWindow: string): Observable<Movie[]> {
    const url = `${this.baseUrl}/${timeWindow}/popular`;

    return this.http
      .get<TrendingAllResponse>(url)
      .pipe(
        map((response) =>
          response.results.map((movie) => mapToSimplifiedMovie(movie))
        )
      );
  }

  public getMovieById(id: string): Observable<MovieById> {
    const url = `${this.baseUrl}/movie/${id}`;

    return this.http.get<MovieById>(url);
  }

  public getCast(id: string): Observable<Cast[]> {
    const url = `${this.baseUrl}/movie/${id}/credits`;

    return this.http
      .get<MovieDBCastResponse>(url)
      .pipe(
        map((response) =>
          response.cast.map((cast) => mapToSimplifiedCast(cast))
        )
      );
  }
}
