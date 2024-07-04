export interface Movie {
  id: number;
  title: string;
  releaseData?: Date;
  rating: number;
  poster: string;
  backdrop: string;
  first_air_date?: Date;
}
