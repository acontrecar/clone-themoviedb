import { MediaType, OriginalLanguage, OriginCountry } from '.';

export interface Credits {
  id: number;
  name: string;
  poster_path: string;
  media_type: MediaType;
}

export interface MovieDBCreditstResponse {
  cast: CreditsResponse[];
  crew: CreditsResponse[];
  id: number;
}

export interface CreditsResponse {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  character?: string;
  credit_id: string;
  order?: number;
  media_type: MediaType;
  origin_country?: OriginCountry[];
  original_name?: string;
  first_air_date?: string;
  name?: string;
  episode_count?: number;
  department?: Department;
  job?: Job;
}

export enum Department {
  Production = 'Production',
  Writing = 'Writing',
}

export enum Job {
  ExecutiveProducer = 'Executive Producer',
  Producer = 'Producer',
  Screenplay = 'Screenplay',
  Writer = 'Writer',
}
