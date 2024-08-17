import { TvRecommendationResult, Recommendation } from '../interfaces';

export function mapToSimplifiedTvRecommendation(
  result: TvRecommendationResult
): Recommendation {
  return {
    id: result.id,
    media_type: result.media_type,
    poster_path: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    release_date: result.first_air_date,
    title: result.name || result.original_name || 'Sin titulo',
    vote_average: result.vote_average,
  };
}
