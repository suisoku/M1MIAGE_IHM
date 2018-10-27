import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TrendingResponse, TrendingQuery, TrendingResult } from '../tmdb-data/TrendingSearch';
import { Tile } from './utilities';




@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})




//here is class
export class TrendingComponent implements OnInit {


 
  // here is members of the class

  private _trendsMovie: TrendingResponse;
  private _trendsTV: TrendingResponse;
  protected tilesMovies: Tile[];
  protected tilesTV: Tile[];

  // the constructor ( will be injected by injectables)
  constructor(private tmdb: TmdbService) {

    let tMovieQuery: TrendingQuery = { media_type: "movie", time_window: "week" };
    let tTVQuery: TrendingQuery = { media_type: "tv", time_window: "week" };

    setTimeout(() => {
      this.tmdb.init('af82599daa1c8b9cef254d429ec0d436');

      this.tmdb.getTrendingMedia(tMovieQuery)
        .then((t: TrendingResponse) => console.log("Results", this._trendsMovie = t))
        .catch(err => console.error('Error getting trends movie:', err));
      
      this.tmdb.getTrendingMedia(tTVQuery)
      .then((t: TrendingResponse) => console.log("Results", this._trendsTV = t))
      .catch(err => console.error('Error getting trends movie:', err));
    }, 1000);
  }

  //will be called on instanciation 
  ngOnInit() {
    /* this.tmdb.getTrendingMedia(tTVQuery)
    .then( (tm: TrendingResponse) => { console.log("Hhh", tm) }) 
    .catch( err => console.error('Error getting trends tv:', err)); */
  }



  getTrendingMovies() : TrendingResult[] {return this._trendsMovie.results;}
  getTrendingTV() : TrendingResult[] {return this._trendsTV.results;}

  getPath(path: string): string {return `https://image.tmdb.org/t/p/w500${path}`;}

/*   fillTiles(tr : TrendingResponse){
    let tiles : Tile[] = [];
    tr.results.forEach(e => {
        tiles.push({imgUrl:this.getPath(e.poster_path), cols: 20 , title: e.title});
        tiles.push({imgUrl:"", cols: 5});
      });
   // console.log(tiles);
    return tiles;
    
  } */
}