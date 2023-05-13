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
  page: number = 1;
  totalPages: number = 0;
  trigger: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private toastNotificationService: ToastrNotificationService,
    private movieService: MovieService
  ) {}

  nextPage(): void {
    this.page = this.page === this.totalPages ? 1 : ++this.page;
    this.trigger = true;
  }

  prevPage(): void {
    this.page = this.page === 1 ? this.totalPages : --this.page;
    this.trigger = true;
  }

  moviesSub(category: string): void {
    this.sub = this.movieService.getMovies(category, this.page).subscribe({
      next: (movieResponse: MovieResponse) => {
        this.movies = movieResponse.results;
        this.totalPages = movieResponse.total_pages;
        this.filteredMovies = this.movies;
      },
      error: (err) => this.toastNotificationService.showError(err, 'Error'),
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
    if (this.category) {
      this.moviesSub(this.category);
    }
  }

  ngDoCheck(): void {
    const categoryParam = this.route.snapshot.paramMap.get('category');
    if (
      (categoryParam && this.category !== categoryParam) ||
      (categoryParam && this.trigger)
    ) {
      this.moviesSub(categoryParam);
      this.category = categoryParam;
      this.title = this.route.snapshot.queryParamMap.get('title');
      this.trigger = false;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
