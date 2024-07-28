import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  Movie,
  TrendingAllResponse,
  MovieById,
  Cast,
  MovieDBCastResponse,
  Keyword,
  MovieDBKeywordsResponse,
  Recommendation,
  MovieDBRecommendationsResponse,
  MovieDBTvResponse,
  MovieDBTvCastResponse,
  MovieDBRecommendationsTvResponse,
  MovieDBTvKeywordsResponse,
  PersonResponse,
  PersonResponseResult,
} from '../../interfaces';
import {
  mapToSimplifiedMovie,
  mapToSimplifiedCast,
  mapToSimplifiedRecommendation,
  mapToSimplifiedTvCast,
  mapToSimplifiedTvRecommendation,
  mapToSimplifiedPersonResponse,
} from '../../mappers';

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

  // TV
  public getTvById(id: string): Observable<MovieDBTvResponse> {
    const url = `${this.baseUrl}/tv/${id}`;

    return this.http.get<MovieDBTvResponse>(url);
  }

  public getTvCast(id: string): Observable<Cast[]> {
    const url = `${this.baseUrl}/tv/${id}/credits`;

    return this.http
      .get<MovieDBTvCastResponse>(url)
      .pipe(
        map((response) =>
          response.cast.map((cast) => mapToSimplifiedTvCast(cast))
        )
      );
  }

  public getTvKeywords(id: string): Observable<Keyword[]> {
    const url = `${this.baseUrl}/tv/${id}/keywords`;

    return this.http
      .get<MovieDBTvKeywordsResponse>(url)
      .pipe(map((response) => response.results));
  }

  public getTvRecommendations(id: string): Observable<Recommendation[]> {
    const url = `${this.baseUrl}/tv/${id}/recommendations`;

    return this.http
      .get<MovieDBRecommendationsTvResponse>(url)
      .pipe(
        map((response) =>
          response.results.map((recommendation) =>
            mapToSimplifiedTvRecommendation(recommendation)
          )
        )
      );
  }
  public getPopularMoviesAndTvPaginates(
    timeWindow: string,
    page: number = 1
  ): Observable<Movie[]> {
    const url = `${this.baseUrl}/${timeWindow}/popular?page=${page}`;

    return this.http.get<TrendingAllResponse>(url).pipe(
      map((response) =>
        response.results.map((movie) => mapToSimplifiedMovie(movie))
      ),
      catchError((error) => {
        console.error('Error getting popular movies:', error);
        return [];
      })
    );
  }

  // Person
  public getPopularPersonList(
    page: number = 1
  ): Observable<PersonResponseResult> {
    const url = `${this.baseUrl}/trending/person/day?page=${page}`;

    return this.http
      .get<PersonResponse>(url)
      .pipe(map((response) => mapToSimplifiedPersonResponse(response)));
  }
}
