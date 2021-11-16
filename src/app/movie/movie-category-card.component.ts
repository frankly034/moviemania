import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieCategory } from './movie-category';

@Component({
  selector: 'mm-movie-category-card',
  templateUrl: './movie-category-card.component.html',
  styleUrls: ['./movie-category-card.component.css']
})
export class MovieCategoryCardComponent implements OnInit {
  @Input() movieCategory!: MovieCategory;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewAllCategory(category: string) {
    return this.router.navigate([`/movie/category/${category}`])
  }

}
