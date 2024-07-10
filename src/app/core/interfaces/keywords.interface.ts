export interface MovieDBKeywordsResponse {
  id: number;
  keywords: Keyword[];
}
export interface MovieDBTvKeywordsResponse {
  id: number;
  results: Keyword[];
}

export interface Keyword {
  id: number;
  name: string;
}
