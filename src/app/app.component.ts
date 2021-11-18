import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from './movie/movie';
import { SideBarMenu } from './shared/side-bar/side-bar';
import  *  as  data  from  './movie-category-config.json';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'moviemania';
  sideBarMenu: SideBarMenu[] = (data as any).default;
  movie: Movie = {
    backdrop_path: "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
    id: 580489,
    original_language: "en",
    original_title: "Venom: Let There Be Carnage",
    overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    popularity: 4293.383,
    poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    release_date: "2021-09-30",
    title: "Venom: Let There Be Carnage",
    video: false,
    vote_average: 6.8,
    vote_count: 1798
    }

  movies: Movie[] = [
    {
    "backdrop_path": "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
    "id": 580489,
    "original_language": "en",
    "original_title": "Venom: Let There Be Carnage",
    "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    "popularity": 4293.383,
    "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    "release_date": "2021-09-30",
    "title": "Venom: Let There Be Carnage",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 1798
    },
    {
    "backdrop_path": "/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg",
    "id": 438631,
    "original_language": "en",
    "original_title": "Dune",
    "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    "popularity": 2264.439,
    "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "release_date": "2021-09-15",
    "title": "Dune",
    "video": false,
    "vote_average": 8,
    "vote_count": 3716
    },
    {
    "backdrop_path": "/fzKWwcaam9QSTaMSJlORuSojxio.jpg",
    "id": 524434,
    "original_language": "en",
    "original_title": "Eternals",
    "overview": "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
    "popularity": 2462.242,
    "poster_path": "/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg",
    "release_date": "2021-11-03",
    "title": "Eternals",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 739
    },
    {
    "backdrop_path": "/mu8RKavbv7Ml48twHQ6XVk7zw8e.jpg",
    "id": 796499,
    "original_language": "en",
    "original_title": "Army of Thieves",
    "overview": "A mysterious woman recruits bank teller Ludwig Dieter to lead a group of aspiring thieves on a top-secret heist during the early stages of the zombie apocalypse.",
    "popularity": 2654.451,
    "poster_path": "/j04Oepj3LGTWSb1ltXm0pcy50Xq.jpg",
    "release_date": "2021-10-27",
    "title": "Army of Thieves",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 590
    },
    {
    "backdrop_path": "/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
    "id": 566525,
    "original_language": "en",
    "original_title": "Shang-Chi and the Legend of the Ten Rings",
    "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
    "popularity": 2601.273,
    "poster_path": "/xeItgLK9qcafxbd8kYgv7XnMEog.jpg",
    "release_date": "2021-09-01",
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 1726
    },
    {
    "backdrop_path": "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
    "id": 550988,
    "original_language": "en",
    "original_title": "Free Guy",
    "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
    "popularity": 1576.431,
    "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
    "release_date": "2021-08-11",
    "title": "Free Guy",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 3536
    },
    {
    "backdrop_path": "/u5Fp9GBy9W8fqkuGfLBuuoJf57Z.jpg",
    "id": 370172,
    "original_language": "en",
    "original_title": "No Time to Die",
    "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    "popularity": 1184.338,
    "poster_path": "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    "release_date": "2021-09-29",
    "title": "No Time to Die",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 1399
    },
    {
    "backdrop_path": "/hugKriLPeBm3lErSCQiFOgQzpkC.jpg",
    "id": 574060,
    "original_language": "en",
    "original_title": "Gunpowder Milkshake",
    "overview": "In her turbulent life as a professional assassin, Sam has no choice but to go rogue to save the life of an innocent 8-year-old girl in the middle of the gang war she has unleashed.",
    "popularity": 1094.568,
    "poster_path": "/5AaKulwpUtkscAokKWtLenGTfVS.jpg",
    "release_date": "2021-07-14",
    "title": "Gunpowder Milkshake",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 350
    },
    {
    "backdrop_path": "/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg",
    "id": 522402,
    "original_language": "en",
    "original_title": "Finch",
    "overview": "On a post-apocalyptic Earth, a robot, built to protect the life of his dying creator's beloved dog, learns about life, love, friendship, and what it means to be human.",
    "popularity": 1077.773,
    "poster_path": "/jKuDyqx7jrjiR9cDzB5pxzhJAdv.jpg",
    "release_date": "2021-11-04",
    "title": "Finch",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 639
    },
    {
    "backdrop_path": "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
    "id": 335983,
    "original_language": "en",
    "original_title": "Venom",
    "overview": "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
    "popularity": 953.538,
    "poster_path": "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    "release_date": "2018-09-28",
    "title": "Venom",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 12144
    },
    {
    "backdrop_path": "/6xCOWFIb1Za7jeP6rqw7SfPgkNX.jpg",
    "id": 768449,
    "original_language": "en",
    "original_title": "American Badger",
    "overview": "A seemingly cold-blooded hitman is assigned to befriend a call girl, but all hell breaks loose when he is assigned to kill her.",
    "popularity": 943.442,
    "poster_path": "/8mO2ZTTOnLnaEQd1sNZAE2XBoOg.jpg",
    "release_date": "2021-03-05",
    "title": "American Badger",
    "video": false,
    "vote_average": 6.3,
    "vote_count": 14
    },
  ];

  constructor(private router: Router){}

  goHome(){
    this.router.navigate([''])
  }
}
