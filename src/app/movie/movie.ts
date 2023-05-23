export interface Movie {
  backdrop_path: string;
  budget: number;
  formatted_budget?: string;
  genres: { id: number; name: string }[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
