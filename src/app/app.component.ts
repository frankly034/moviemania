import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from './movie/movie';
import { SideBarMenu } from './shared/side-bar/side-bar';
import * as data from './movie-category-config.json';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'moviemania';
  sideBarMenu: SideBarMenu[] = (data as any).default;

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['']);
  }
}
