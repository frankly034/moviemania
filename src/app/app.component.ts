import { Component } from '@angular/core';

import { SideBarMenu } from './shared/side-bar/side-bar';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'moviemania';
  sideBarMenu: SideBarMenu[] = [
    {
      title: 'Latest',
      tag: 'latest',
    },
    {
      title: 'Now Playing',
      tag: 'now_playing',
    },
    {
      title: 'Popular',
      tag: 'popular',
    },
    {
      title: 'Top Rated',
      tag: 'top_rated',
    },
    {
      title: 'Upcoming',
      tag: 'upcoming',
    },
  ];
}
