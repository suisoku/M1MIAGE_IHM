import {Component, OnInit } from '@angular/core';
import {TmdbService} from '../tmdb.service';
import {TrendingResponse, TrendingQuery } from '../tmdb-data/TrendingSearch';
import {Tile} from './utilities';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})


//here is class
export class TrendingComponent implements OnInit {


  // here is members of the class

  private _trendsMovie: TrendingResponse;
  private _trendsTV;  TrendingResponse;   
  protected tiles: Tile[];

  // the consonsecteur ( will be injected by injectables)
  constructor(private tmdb: TmdbService) {

   
    this.tiles = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
  }

  //will be called on instanciation 
  ngOnInit() {
    let tMovieQuery: TrendingQuery = {media_type:"movie", time_window:"week"};
    let tTVQuery: TrendingQuery = {media_type:"tv", time_window:"week"};

    this.tmdb.init('af82599daa1c8b9cef254d429ec0d436');

    this.tmdb.getTrendingMedia(tMovieQuery)
    .then( (tm: TrendingResponse) => this._trendsMovie = tm) 
    .catch( err => console.error('Error getting trends movie:', err));

    this.tmdb.getTrendingMedia(tTVQuery)
    .then( (tm: TrendingResponse) => this._trendsTV = tm) 
    .catch( err => console.error('Error getting trends tv:', err));
  }

  getTrendingMovies() : TrendingResponse {
    return this._trendsMovie;
  }
  getTrendingTV() : TrendingResponse {
    return this._trendsTV;
  }
}