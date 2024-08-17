import { CreditsResponse, Credits } from '../interfaces';

export function mapToSimplifiedCredits(credit: CreditsResponse): Credits {
  return {
    id: credit.id,
    name: credit.original_title || credit.name || 'Sin titulo',
    poster_path: credit.poster_path
      ? `https://image.tmdb.org/t/p/w500${credit.poster_path}`
      : 'https://i.stack.imgur.com/l60Hf.png',

    media_type: credit.media_type,
  };
}
