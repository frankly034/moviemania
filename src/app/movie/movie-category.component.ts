import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ToastrNotificationService } from '../shared/toastr-notification-service/toastr-notification.service';
import { Movie } from './movie';
import { MovieResponse } from './movie-response';
import { MovieService } from './movie.service';

@Component({
  selector: 'mm-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.css'],
})
export class MovieCategoryComponent implements OnInit, DoCheck, OnDestroy {
  sub!: Subscription;
  category!: string | null;
  title!: string | null;
  private _filterBy: string = '';
  filteredMovies: Movie[] = [];
  movies!: Movie[];

  constructor(
    private route: ActivatedRoute,
    private toastNotificationService: ToastrNotificationService,
    private movieService: MovieService
  ) {}

  moviesSub(category: string): void {
    this.sub = this.movieService.getMovies(category).subscribe({
      next: (movieResponse: MovieResponse) =>{
        this.movies = movieResponse.results;
        this.filteredMovies = this.movies;
      },
      error: (err) =>
        this.toastNotificationService.showError(err, 'Error'),
    });
  }

  set filterBy(value: string) {
    this._filterBy = value;
    this.filteredMovies = this.performFilter(value);
  }

  get filterBy(): string {
    return this._filterBy;
  }

  performFilter(searchStr: string): Movie[] {
    searchStr = searchStr.toLowerCase();
    return this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchStr.trim())
    );
  }

  ngOnInit(): void {
    if(this.category){
      this.moviesSub(this.category)
    }
  }

  ngDoCheck(): void {
    const categoryParam = this.route.snapshot.paramMap.get('category');
    if(categoryParam && this.category !== categoryParam){
      this.moviesSub(categoryParam)
      this.category = categoryParam;
      this.title = this.route.snapshot.queryParamMap.get('title');
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
