import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  myControl = new FormControl();
  films: string[] = ['One', 'Two', 'Three'];
  filteredFilms: Observable<string[]>;

  ngOnInit() {
    this.filteredFilms = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterFilm(value))
      );
  }

  private _filterFilm(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.films.filter(option => option.toLowerCase().includes(filterValue));
  }
}
