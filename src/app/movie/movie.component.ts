import { Component, OnInit } from '@angular/core';
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
  title = new FormControl();
  genreControl = new FormControl();
  genres: MovieGenre[] = [];
  productorControl = new FormControl();
  producotrsSearched: string[] = [];
  actorControl = new FormControl();
  actorsSearched: string[] = [];
  people: SearchPeopleResponse['results'];
  selectedActors: string[] = [];
  countryControl = new FormControl();
  countries: ProductionCountry[];
  currentYear: number = new Date().getFullYear();
  moviePeriodFilter: number[] = [2000, 2010];
  movies: SearchMovieResponse;

  constructor(private tmdb: TmdbService) {}
  ngOnInit() {
    this.tmdb.init('af82599daa1c8b9cef254d429ec0d436') // Clef de TMDB
      .getGenre()
      .then( (genre: MovieGenre[]) => {
        console.log('genre', genre['genres']);
        this.genres.push({id: 69, name: 'Adulte'});
        genre['genres'].forEach(m => this.genres.push(m));
      })
      .catch( err => console.error('Error getting movie:', err));
    this.tmdb.getCountries()
      .then( (countries: ProductionCountry[]) => console.log('Countires', this.countries = countries ))
      .catch( err => console.error('Error getting movie:', err));
  }

  private _filter(value: string, who: string[]): string[] {
    const filterValue = value.toLowerCase();

    return who.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  public searchMovies(value: string): void {
    this.producotrsSearched = [];
    this.tmdb.searchMovie({query: value})
      .then( (movieDB: SearchMovieResponse) =>  {
        console.log('movies', this.movies = movieDB);
      })
      .catch( err => console.error('Error getting movie:', err));
  }
  public searchProductor(value: string): void {
    this.producotrsSearched = [];
    this.tmdb.searchPerson({query: value})
      .then( (peopleDB: SearchPeopleResponse) =>  {
        console.log('people', this.people = peopleDB['results']);
        this.people.forEach(e => this.producotrsSearched.push(e['name']));
        console.log('khra', this. producotrsSearched = this._filter(value, this.producotrsSearched));
      })
      .catch( err => console.error('Error getting movie:', err));
  }
  public searchActor(value: string): void {
    this.actorsSearched = [];
    this.tmdb.searchPerson({query: value})
      .then( (peopleDB: SearchPeopleResponse) =>  {
        console.log('people', this.people = peopleDB['results']);
        this.people.forEach(e => this.actorsSearched.push(e['name']));
        console.log('khra', this.actorsSearched = this._filter(value, this.actorsSearched));
      })
      .catch( err => console.error('Error getting movie:', err));
  }
  public insertInputTag(): void {
    if (this.actorControl.value) {
      this.selectedActors.push(this.actorControl.value);
      this.actorControl.reset();
    }
    console.log(this.selectedActors);
  }
  remove(actor: string): void {
    const index = this.selectedActors.indexOf(actor);

    if (index >= 0) {
      this.selectedActors.splice(index, 1);
    }
  }
}
