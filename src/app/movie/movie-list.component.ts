import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MovieCategory } from './movie-category';
import { MovieService } from './movie.service';
import * as data from '../movie-category-config.json';
import { SideBarMenu } from '../shared/side-bar/side-bar';
import { MovieResponse } from './movie-response';
import { ToastrNotificationService } from '../shared/toastr-notification-service/toastr-notification.service';

@Component({
  selector: 'mm-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  movieCategories: MovieCategory[] = [];
  sideBarMenu: SideBarMenu[] = (data as any).default;

  constructor(
    private movieService: MovieService,
    private toastNotificationService: ToastrNotificationService
  ) {}

  moviesSub(category: string, index: number): void {
    this.sub = this.movieService.getMovies(category).subscribe({
      next: (movieResponse: MovieResponse) => {
        this.movieCategories[index].movies = movieResponse.results;
      },
      error: (err) => this.toastNotificationService.showError(err, 'Error'),
    });
  }

  ngOnInit(): void {
    this.sideBarMenu.forEach((menu, index) => {
      this.movieCategories.push({
        movies: [],
        tag: menu.tag,
        title: menu.title,
      });
      this.moviesSub(menu.tag, index);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
