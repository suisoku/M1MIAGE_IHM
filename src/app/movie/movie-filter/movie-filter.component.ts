import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MovieGenre, ProductionCountry} from '../../tmdb-data/Movie';
import {SearchPeopleResponse} from '../../tmdb-data/SearchPeople';
import {SearchMovieResponse} from '../../tmdb-data/searchMovie';
import {TmdbService} from '../../tmdb.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {
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
  moviePeriodFilter: number[] = [1980, 2017];
  moviesFromDB: SearchMovieResponse;
  movies: SearchMovieResponse['results'] = [];
  adulte = false;

  constructor(private tmdb: TmdbService) {
  }

  ngOnInit() {
    this.tmdb.init('af82599daa1c8b9cef254d429ec0d436') // Clef de TMDB
      .getGenre()
      .then((genre: MovieGenre[]) => {
        console.log('genre', genre['genres']);
        this.genres.push({id: 69, name: 'Adulte'});
        genre['genres'].forEach(m => this.genres.push(m));
      })
      .catch(err => console.error('Error getting movie:', err));
    this.tmdb.getCountries()
      .then((countries: ProductionCountry[]) => console.log('Countires', this.countries = countries))
      .catch(err => console.error('Error getting movie:', err));
  }

  private _filter(value: string, who: string[]): string[] {
    const filterValue = value.toLowerCase();

    return who.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public searchMovies(value: string): void {


    if (value === null || value.length === 0) {
      alert('veuillez remplir le champ titre !');
    }
    if (this.genreControl.value !== null) {
      this.genreControl.value.map(genre => {
        if (genre['id'] === 69) {
          this.adulte = true;
          console.log('genre', genre['id']);
        }
      });
    }
    console.log('adulte', this.adulte);
    this.movies = [];
    // include_adult didn't work don't know why
    this.tmdb.searchMovie({query: value})
      .then((movieDB: SearchMovieResponse) => {
        console.log('movies response', this.moviesFromDB = movieDB);
        for (let page = 1; page <= this.moviesFromDB['total_pages']; page++) {
          this.moviesFromDB['page'] = page;
          this.moviesFromDB['results'].map(movie => {
            if ((parseInt(movie['release_date'], 0) >= this.moviePeriodFilter[0]
              && parseInt(movie['release_date'], 0) <= this.moviePeriodFilter[1])
              && movie['adult'] === this.adulte
              /*&& movie['']*/
            ) {
              this.movies.push(movie);
            }
          });
        }
        console.log('movies', this.movies);
      })
      .catch(err => console.error('Error getting movie:', err));
  }

  public searchProductor(value: string): void {
    this.producotrsSearched = [];
    this.tmdb.searchPerson({query: value})
      .then((peopleDB: SearchPeopleResponse) => {
        console.log('people', this.people = peopleDB['results']);
        this.people.forEach(e => this.producotrsSearched.push(e['name']));
        console.log('khra', this.producotrsSearched = this._filter(value, this.producotrsSearched));
      })
      .catch(err => console.error('Error getting movie:', err));
  }

  public searchActor(value: string): void {
    this.actorsSearched = [];
    this.tmdb.searchPerson({query: value})
      .then((peopleDB: SearchPeopleResponse) => {
        console.log('people', this.people = peopleDB['results']);
        this.people.forEach(e => this.actorsSearched.push(e['name']));
        console.log('khra', this.actorsSearched = this._filter(value, this.actorsSearched));
      })
      .catch(err => console.error('Error getting movie:', err));
  }

  public insertInputTag(): void {
    if (this.actorControl.value) {
      this.selectedActors.push(this.actorControl.value);
      this.actorControl.reset();
    }
    console.log(this.selectedActors);
  }

  public remove(actor: string): void {
    const index = this.selectedActors.indexOf(actor);

    if (index >= 0) {
      this.selectedActors.splice(index, 1);
    }
  }
}
