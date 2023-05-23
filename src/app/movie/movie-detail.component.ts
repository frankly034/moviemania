import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { MovieService } from './movie.service';
import { Movie } from './movie';
import { ToastrNotificationService } from '../shared/toastr-notification-service/toastr-notification.service';
import { Location } from '@angular/common';

@Component({
  selector: 'mm-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  private sub!: Subscription;
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private toastNotificationService: ToastrNotificationService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      const movieId = Number(this.route.snapshot.paramMap.get('id'));
      this.fetchMovieById(movieId);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  fetchMovieById(movieId: number): void {
    this.sub = this.movieService.getMovieById(movieId).subscribe({
      next: (movieResponse: Movie) => {
        this.movie = {
          ...movieResponse,
          poster_path: `${process.env.NG_APP_TMDB_BASE_IMAGE_URL}${movieResponse.poster_path}`,
          formatted_budget: new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD',
          }).format(movieResponse.budget),
        };
      },
      error: (err) => this.toastNotificationService.showError(err, 'Error'),
    });
  }

  goBack(): void {
    this.location.back();
  }
}
