import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
<<<<<<< HEAD
<<<<<<< HEAD




// here is class
=======
>>>>>>> parent of 00f93bc... Merge pull request #2 from suisoku/feature_trending
export class TrendingComponent implements OnInit {

  constructor() { }

<<<<<<< HEAD

  // here is members of the class

  private _trendsMovie: TrendingResponse;
  private _trendsTV: TrendingResponse;
  protected tilesMovies: Tile[];
  protected tilesTV: Tile[];

  // the constructor ( will be injected by injectables)
  constructor(private tmdb: TmdbService) {

    const tMovieQuery: TrendingQuery = { media_type: 'movie', time_window: 'week' };
    const tTVQuery: TrendingQuery = { media_type: 'tv', time_window: 'week' };

    setTimeout(() => {
      this.tmdb.init('af82599daa1c8b9cef254d429ec0d436');

      this.tmdb.getTrendingMedia(tMovieQuery)
        .then((t: TrendingResponse) => console.log('Results', this._trendsMovie = t))
        .catch(err => console.error('Error getting trends movie:', err));

      this.tmdb.getTrendingMedia(tTVQuery)
      .then((t: TrendingResponse) => console.log('Results', this._trendsTV = t))
      .catch(err => console.error('Error getting trends movie:', err));
    }, 1000);
  }

  // will be called on instanciation
  ngOnInit() {}



  getTrendingMovies(): TrendingResult[] {return this._trendsMovie.results; }
  getTrendingTV(): TrendingResult[] {return this._trendsTV.results; }
  getPath(path: string): string {return `https://image.tmdb.org/t/p/w500${path}`; }



/*   fillTiles(tr : TrendingResponse){
    let tiles : Tile[] = [];
    tr.results.forEach(e => {
        tiles.push({imgUrl:this.getPath(e.poster_path), cols: 20 , title: e.title});
        tiles.push({imgUrl:"", cols: 5});
      });
   // console.log(tiles);
    return tiles;

  } */
=======
  ngOnInit() {
  }

>>>>>>> parent of 00f93bc... Merge pull request #2 from suisoku/feature_trending
=======
export class TrendingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> parent of 00f93bc... Merge pull request #2 from suisoku/feature_trending
}
