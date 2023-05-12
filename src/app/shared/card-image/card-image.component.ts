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
  imageLoaded!: boolean;
  poasterPath!: string;

  constructor() {}

  checkIfImageExists() {
    const img = new Image();
    img.src = this.poasterPath;

    if (img.complete) {
      this.imageLoaded = true;
    } else {
      img.onload = () => {
        this.imageLoaded = true;
      };

      img.onerror = () => {
        this.imageLoaded = false;
      };
    }
  }

  ngOnInit(): void {
    this.ratingSize = [
      ...Array(Math.round(this.movie.vote_average / 2)).keys(),
    ];
    this.releaseDate = new Date(this.movie.release_date);
    this.poasterPath = `https://image.tmdb.org/t/p/original${this.movie.poster_path}`;
    this.checkIfImageExists();
  }
}
