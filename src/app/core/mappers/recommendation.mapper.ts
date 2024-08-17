import {
  RecommendationResult,
  Recommendation,
} from '../interfaces/recommendations.interfaces';

export function mapToSimplifiedRecommendation(
  result: RecommendationResult
): Recommendation {
  return {
    id: result.id,
    media_type: result.media_type,
    poster_path: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    release_date: result.release_date,
    title: result.title || result.original_title || 'Sin titulo',
    vote_average: result.vote_average,
  };
}
