import { Component, Input, OnInit } from '@angular/core';

import { Movie } from './card-image';

@Component({
  selector: 'mm-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {
  @Input() movie!: Movie;
  ratingSize!: number[];
  releaseDate!: Date;

  constructor() { }

  ngOnInit(): void {
    this.ratingSize = [...Array(Math.round(this.movie.vote_average/2)).keys()];
    this.releaseDate = new Date(this.movie.release_date);
  }

}
