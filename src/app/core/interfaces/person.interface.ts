import { OriginalLanguage } from './trending-all-response.interface';

export interface PersonResponse {
  page: number;
  results: PersonResult[];
  total_pages: number;
  total_results: number;
}

export interface PersonResult {
  id: number;
  name: string;
  original_name: string;
  media_type: ResultMediaType;
  adult: boolean;
  popularity: number;
  gender: number;
  known_for_department: KnownForDepartment;
  profile_path: null | string;
  known_for: KnownFor[];
}

export interface PersonResponseResult {
  page: number;
  results: Person[];
  total_pages: number;
}

export interface Person {
  id: number;
  name: string;
  profile_path: string;
  known_for: string[];
}

export interface KnownFor {
  backdrop_path: null | string;
  id: number;
  title?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: KnownForMediaType;
  adult: boolean;
  original_language: OriginalLanguage;
  genre_ids: number[];
  popularity: number;
  release_date?: Date;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: Date;
  origin_country?: string[];
}

export enum KnownForMediaType {
  Movie = 'movie',
  Tv = 'tv',
}

export enum KnownForDepartment {
  Acting = 'Acting',
  Directing = 'Directing',
  Sound = 'Sound',
}

export enum ResultMediaType {
  Person = 'person',
}
