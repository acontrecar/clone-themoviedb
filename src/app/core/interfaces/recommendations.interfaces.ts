export interface MovieDBRecommendationsResponse {
  page: number;
  results: RecommendationResult[];
  total_pages: number;
  total_results: number;
}

export interface RecommendationResult {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: Date;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}

export interface Recommendation {
  id: number;
  media_type: MediaType;
  poster_path: string;
  release_date: Date;
  title: string;
  vote_average: number;
}
