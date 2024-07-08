export interface MovieDBKeywordsResponse {
  id: number;
  keywords: Keyword[];
}

export interface Keyword {
  id: number;
  name: string;
}
