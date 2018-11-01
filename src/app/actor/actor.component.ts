import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MovieGenre, ProductionCountry} from '../tmdb-data/Movie';
import {SearchPeopleResponse} from '../tmdb-data/SearchPeople';
import {TmdbService} from '../tmdb.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  title = new FormControl();
  actorControl = new FormControl();
  actorsSearched: string[] = [];
  people: SearchPeopleResponse['results'];
  countryControl = new FormControl();
  countries: ProductionCountry[];
  currentYear: number = new Date().getFullYear();
  moviePeriodFilter: number[] = [2000, 2010];

  constructor(private tmdb: TmdbService) {}
  ngOnInit() {
    this.tmdb.init('af82599daa1c8b9cef254d429ec0d436') // Clef de TMDB
      .getCountries()
      .then( (countries: ProductionCountry[]) => console.log('Countires', this.countries = countries ))
      .catch( err => console.error('Error getting movie:', err));
  }

  private _filter(value: string, who: string[]): string[] {
    const filterValue = value.toLowerCase();

    return who.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  public searchAcotr(value: string): void {
    this.actorsSearched = [];
    this.tmdb.searchPerson({query: value})
      .then( (peopleDB: SearchPeopleResponse) =>  {
        console.log('people', this.people = peopleDB['results']);
        this.people.forEach(e => this.actorsSearched.push(e['name']));
        console.log('khra', this.actorsSearched = this._filter(value, this.actorsSearched));
      })
      .catch( err => console.error('Error getting movie:', err));
  }
}
