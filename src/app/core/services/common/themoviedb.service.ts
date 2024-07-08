import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieById } from '../../interfaces/movie.interface';
import { TrendingAllResponse } from '../../interfaces/trending-all-response.interface';
import { mapToSimplifiedMovie } from '../../mappers/movie.mapper';
import { Cast, MovieDBCastResponse } from '../../interfaces/cast.interface';
import { mapToSimplifiedCast } from '../../mappers/cast.mapper';
import {
  Keyword,
  MovieDBKeywordsResponse,
} from '../../interfaces/keywords.interface';
import {
  MovieDBRecommendationsResponse,
  Recommendation,
} from '../../interfaces/recommendations.interfaces';
import { mapToSimplifiedRecommendation } from '../../mappers/recommendation.mapper';

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

  public getKeywords(id: string): Observable<Keyword[]> {
    const url = `${this.baseUrl}/movie/${id}/keywords`;

    return this.http
      .get<MovieDBKeywordsResponse>(url)
      .pipe(map((response) => response.keywords));
  }

  public getRecommendations(id: string): Observable<Recommendation[]> {
    const url = `${this.baseUrl}/movie/${id}/recommendations`;

    return this.http
      .get<MovieDBRecommendationsResponse>(url)
      .pipe(
        map((response) =>
          response.results.map((recommendation) =>
            mapToSimplifiedRecommendation(recommendation)
          )
        )
      );
  }
}
