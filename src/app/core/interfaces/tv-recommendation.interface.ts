import { OriginalLanguage, MediaType, OriginCountry } from '.';

export interface MovieDBRecommendationsTvResponse {
  page: number;
  results: TvRecommendationResult[];
  total_pages: number;
  total_results: number;
}

export interface TvRecommendationResult {
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  adult: boolean;
  original_language: OriginalLanguage;
  genre_ids: number[];
  popularity: number;
  first_air_date: Date;
  vote_average: number;
  vote_count: number;
  origin_country: OriginCountry[];
}

export interface TvRecommendation {
  id: number;
  media_type: MediaType;
  poster_path: string;
  release_date: Date;
  title: string;
  vote_average: number;
}
