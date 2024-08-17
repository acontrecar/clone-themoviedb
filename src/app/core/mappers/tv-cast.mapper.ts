import { Cast, TvCastResponse } from '../interfaces';

export function mapToSimplifiedTvCast(cast: TvCastResponse): Cast {
  return {
    id: cast.id,
    name: cast.name,
    avatar: cast.profile_path
      ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
      : 'https://i.stack.imgur.com/l60Hf.png',
    character: cast.character || '-',
  };
}
