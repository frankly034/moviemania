import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MovieResponse } from './movie-response';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey = process.env.NG_APP_API_KEY;
  movieUrl = process.env.NG_APP_TMDB_URL;

  constructor(private http: HttpClient) {}

  getMovies(
    movieCategoryTag: string,
    page?: number
  ): Observable<MovieResponse> {
    const url = `${this.movieUrl}${movieCategoryTag}?api_key=${
      this.apiKey
    }&page=${page || 1}`;
    return this.http.get<MovieResponse>(url).pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = err.error.status_message || err.statusText;
    }
    return throwError(errorMessage);
  }
}
