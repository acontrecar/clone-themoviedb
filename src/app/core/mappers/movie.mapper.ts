import { Movie } from '../interfaces/movie.interface';
import {
  Result,
  TrendingAllResponse,
} from '../interfaces/trending-all-response.interface';

export function mapToSimplifiedMovie(result: Result): Movie {
  return {
    id: result.id,
    title: result.title || result.original_name || 'Sin titulo',
    releaseData: result.release_date,
    rating: result.vote_average,
    poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
  };
}
