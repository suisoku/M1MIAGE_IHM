import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TrendingResponse, TrendingQuery, TrendingResult } from '../tmdb-data/TrendingSearch';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})


export class TrendingComponent implements OnInit {


  // here is members of the class

  public _trendsMovie: TrendingResponse;
  public _trendsTV: TrendingResponse;
  public displayTrends : string = 'movie'
  public text : string;

  constructor(private tmdb: TmdbService) {

  }

  ngOnInit() {
    this.tmdb.init('af82599daa1c8b9cef254d429ec0d436');
    this.loadTrendingMovies();
    this.loadTrendingTV();
  }

  loadTrendingMovies() {
    const tMovieQuery: TrendingQuery = { media_type: 'movie', time_window: 'week' };
    this.tmdb.getTrendingMedia(tMovieQuery)
      .then((t: TrendingResponse) => console.log('Results', this._trendsMovie = t))
      .catch(err => console.error('Error getting trends movie:', err));
  }

  loadTrendingTV() {
    const tTVQuery: TrendingQuery = { media_type: 'tv', time_window: 'week' };
    this.tmdb.getTrendingMedia(tTVQuery)
      .then((t: TrendingResponse) => console.log('Results', this._trendsTV = t))
      .catch(err => console.error('Error getting trends movie:', err));
  }

  getTrendingMovies(): TrendingResult[] {
    return this._trendsMovie.results;
  }

  getTrendingTV(): TrendingResult[] {
    return this._trendsTV.results;
  }

  getPath(path: string): string {
    return this.tmdb.getPath(path);
  }

}
