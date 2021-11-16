import { Movie } from "./movie";

export interface MovieCategory {
  title: string;
  tag: string;
  movies: Movie [];
}