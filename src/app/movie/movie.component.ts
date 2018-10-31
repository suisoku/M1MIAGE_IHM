import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MovieGenre, ProductionCountry} from '../tmdb-data/Movie';
import {SearchPeopleResponse} from '../tmdb-data/SearchPeople';
import {Observable} from 'rxjs';
import {TmdbService} from '../tmdb.service';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  title = new FormControl();
  genreControl = new FormControl();
  genres: MovieGenre[];
  productorControl = new FormControl();
  productors: SearchPeopleResponse[];
  filteredProductors: Observable<string[]>;
  actorControl = new FormControl();
  actors: string[] = ['One', 'Two', 'Three'];
  filteredActors: Observable<string[]>;
  selectedActors: string[] = [];
  countryControl = new FormControl();
  countries: ProductionCountry[];
  currentYear: number = new Date().getFullYear();
  moviePeriodFilter: number[] = [2000, 2010];

  constructor(private tmdb: TmdbService) {}
  ngOnInit() {
    this.tmdb.init('af82599daa1c8b9cef254d429ec0d436') // Clef de TMDB
      .getGenre()
      .then( (genre: MovieGenre[]) => this.genres = genre['genres'])
      .catch( err => console.error('Error getting movie:', err));

    this.tmdb.getCountries()
      .then( (countries: ProductionCountry[]) => console.log('Countires', this.countries = countries ))
      .catch( err => console.error('Error getting movie:', err));
    this.tmdb.getPeoples({query: this.productorControl.value})
      .then( (productors: SearchPeopleResponse[]) => console.log('Productors', this.productors = productors ))
      .catch( err => console.error('Error getting movie:', err));

    this.filteredActors = this.actorControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.actors))
    );
    /*   this.filteredProductors = this.productorControl.valueChanges.pipe(
         startWith(''),
         map(value => this._filter(value, this.productors['name']))
       );*/
  }

  private _filter(value: string, who: string[]): string[] {
    const filterValue = value.toLowerCase();

    return who.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _insertInputTag(): void {
    if (this.actorControl.value) {
      this.selectedActors.push(this.actorControl.value);
      this.actorControl.reset();
    }
  }
}
