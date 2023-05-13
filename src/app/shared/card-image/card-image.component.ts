import { Component, Input, OnInit } from '@angular/core';

import { Movie } from '../../movie/movie';

@Component({
  selector: 'mm-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css'],
})
export class CardImageComponent implements OnInit {
  @Input() movie!: Movie;
  ratingSize!: number[];
  releaseDate!: Date;
  poasterLoaded!: boolean;
  poaster!: HTMLImageElement;

  constructor() {}

  checkIfImageExists() {
    this.poaster = new Image();
    this.poaster.src = `${process.env.NG_APP_TMDB_BASE_IMAGE_URL}${this.movie.poster_path}`;

    if (this.poaster.complete) {
      this.poasterLoaded = true;
    }

    this.poaster.onload = () => {
      this.poasterLoaded = true;
    };

    this.poaster.onerror = () => {
      this.poaster.src = '../../../assets/clapper-board.jpg';
    };
  }

  ngOnInit(): void {
    this.ratingSize = Array(Math.round(this.movie.vote_average / 2));
    this.releaseDate = new Date(this.movie.release_date);
    this.checkIfImageExists();
  }
}
