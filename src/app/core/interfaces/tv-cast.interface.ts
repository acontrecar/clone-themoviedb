export interface MovieDBTvCastResponse {
  cast: TvCastResponse[];
  crew: TvCastResponse[];
  id: number;
}

export interface TvCastResponse {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
}
