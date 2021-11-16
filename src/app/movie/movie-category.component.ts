import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from './movie';

@Component({
  selector: 'mm-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.css'],
})
export class MovieCategoryComponent implements OnInit, DoCheck {
  category!: string | null;
  title!: string | null;
  private _filterBy: string = '';
  filteredMovies: Movie[] = [];

  movies: Movie[] = [
    {
      "backdrop_path": "/5hNcsnMkwU2LknLoru73c76el3z.jpg",
      "id": 19404,
      "original_language": "hi",
      "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
      "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      "popularity": 27.72,
      "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
      "release_date": "1995-10-20",
      "title": "Dilwale Dulhania Le Jayenge",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 3215
      },
      {
      "backdrop_path": "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
      "id": 278,
      "original_language": "en",
      "original_title": "The Shawshank Redemption",
      "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      "popularity": 63.357,
      "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "release_date": "1994-09-23",
      "title": "The Shawshank Redemption",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 20082
      },
      {
      "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
      "id": 238,
      "original_language": "en",
      "original_title": "The Godfather",
      "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "popularity": 55.854,
      "poster_path": "/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
      "release_date": "1972-03-14",
      "title": "The Godfather",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 15045
      },
      {
      "backdrop_path": "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",
      "id": 724089,
      "original_language": "en",
      "original_title": "Gabriel's Inferno Part II",
      "overview": "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
      "popularity": 8.818,
      "poster_path": "/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
      "release_date": "2020-07-31",
      "title": "Gabriel's Inferno Part II",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 1320
      },
      {
      "backdrop_path": "/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg",
      "id": 761053,
      "original_language": "en",
      "original_title": "Gabriel's Inferno Part III",
      "overview": "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
      "popularity": 26.744,
      "poster_path": "/qtX2Fg9MTmrbgN1UUvGoCsImTM8.jpg",
      "release_date": "2020-11-19",
      "title": "Gabriel's Inferno Part III",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 889
      },
      {
      "backdrop_path": "/w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg",
      "id": 696374,
      "original_language": "en",
      "original_title": "Gabriel's Inferno",
      "overview": "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
      "popularity": 10.413,
      "poster_path": "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
      "release_date": "2020-05-29",
      "title": "Gabriel's Inferno",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 2140
      },
      {
      "backdrop_path": "/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",
      "id": 424,
      "original_language": "en",
      "original_title": "Schindler's List",
      "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      "popularity": 43.408,
      "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      "release_date": "1993-11-30",
      "title": "Schindler's List",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 12007
      },
      {
      "backdrop_path": "/1EAxNqdkVnp48a7NUuNBHGflowM.jpg",
      "id": 283566,
      "original_language": "ja",
      "original_title": "シン・エヴァンゲリオン劇場版:||",
      "overview": "In the aftermath of the Fourth Impact, stranded without their Evangelions, Shinji, Asuka, and Rei find refuge in one of the rare pockets of humanity that still exist on the ruined planet Earth. There, each of them live a life far different from their days as an Evangelion pilot. However, the danger to the world is far from over. A new impact is looming on the horizon—one that will prove to be the true end of Evangelion.",
      "popularity": 199.267,
      "poster_path": "/jDwZavHo99JtGsCyRzp4epeeBHx.jpg",
      "release_date": "2021-03-08",
      "title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 366
      },
      {
      "backdrop_path": "/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg",
      "id": 240,
      "original_language": "en",
      "original_title": "The Godfather: Part II",
      "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      "popularity": 37.31,
      "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      "release_date": "1974-12-20",
      "title": "The Godfather: Part II",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 9042
      },
      {
      "backdrop_path": "/l5K9elugftlcyIHHm4nylvsn26X.jpg",
      "id": 255709,
      "original_language": "ko",
      "original_title": "소원",
      "overview": "After 8-year-old So-won narrowly survives a brutal sexual assault, her family labors to help her heal while coping with their own rage and grief.",
      "popularity": 6.968,
      "poster_path": "/x9yjkm9gIz5qI5fJMUTfBnWiB2o.jpg",
      "release_date": "2013-10-02",
      "title": "Hope",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 226
      },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.filteredMovies = this.movies;
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
    return this.movies.filter(movie => movie.title.toLowerCase().includes(searchStr.trim()))
  }

  ngDoCheck(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    this.title = this.route.snapshot.queryParamMap.get('title');
  }
}
