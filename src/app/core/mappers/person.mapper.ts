import {
  Person,
  PersonResponse,
  PersonResponseResult,
  PersonResult,
} from '../interfaces';

export function mapToSimplifiedPersonResponse(
  result: PersonResponse
): PersonResponseResult {
  return {
    page: result.page,
    results: result.results.map(mapToSimplifiedPerson),
    total_pages: result.total_pages,
  };
}

function mapToSimplifiedPerson(person: PersonResult): Person {
  return {
    id: person.id,
    name: person.name,
    profile_path: person.profile_path
      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
      : 'https://i.stack.imgur.com/l60Hf.png',
    known_for: person.known_for.map(
      (knownFor) => knownFor.title || knownFor.name || ''
    ),
  };
}
