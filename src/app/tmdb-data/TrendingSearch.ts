export interface trendingQuery {
  media_type: string; // default: en-US
  query: string;

}

export interface trendingResponse {
  page?: number;
  results?: MovieResult[];
  total_results?: number;
  total_pages?: number;
}

export interface trendingResult {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}
