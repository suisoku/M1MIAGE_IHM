import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../tmdb.service';
import {Observable} from 'rxjs';
import {MovieResponse} from '../tmdb-data/Movie';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})



export class TrendingComponent implements OnInit {

  constructor(private tmdb: TmdbService) {

  }

  ngOnInit() {
  }

  getTrendingMovies() : void {
    
  }

}
