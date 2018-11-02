import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MovieGenre, ProductionCountry} from '../tmdb-data/Movie';
import {SearchPeopleResponse} from '../tmdb-data/SearchPeople';
import {TmdbService} from '../tmdb.service';
import {SearchMovieResponse} from '../tmdb-data/searchMovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }
}
