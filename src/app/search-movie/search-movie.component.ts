import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MovieGenre } from '../tmdb-data/Movie';
import { TmdbService } from '../tmdb.service';
import { MovieResult, SearchContent } from '../tmdb-data/searchMovie';
import { SearchPeopleResponse } from '../tmdb-data/SearchPeople';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListsManagerService } from '../lists-manager.service';
import { List } from '../list-data/List';
import { Subscription } from 'rxjs';

export interface DialogData {
  listes: List[];
  selected: string;
}

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  /**Setting up the chips*/
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  /**App functionnality related */
  selectedList : string;
  listeGenres: MovieGenre[] = [];
  selectedGenre: number;
  producteur: string;
  yearFilter: number[] = [2010, 2018];
  title: string;
  query: string;
  searchResponse: MovieResult[];
  people: SearchPeopleResponse['results'];
  productorControl = new FormControl();
  productorsSearched: string[] = [];
  actorControl = new FormControl();
  actorsSearched: string[] = [];
  selectedActors: string[] = [];

  searchContent: SearchContent;
  selectedMovie: MovieResult;
  lists: List[];

  constructor(private tmdb: TmdbService, private listeService: ListsManagerService, public dialog: MatDialog) { }

  ngOnInit() {
    this.tmdb.init('af82599daa1c8b9cef254d429ec0d436');
    this.loadGenres();
    this.listeService.getData().subscribe(list => this.lists = list);
  }

  openDialog(movie?: MovieResult, movies?: MovieResult[]): void {
    console.log("Paramètre film: ",movie)
    const dialogRef = this.dialog.open(DialogAddMovie, {
      width: '250px',
      data: {listes: this.lists, selected: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log("Liste: ", this.selectedList = result['selected']);
      if(movie){
        this.listeService.pushMovieToList(this.selectedList, movie);
      }
      else this.listeService.pushMoviesToList(this.selectedList,movies);
    });
  }


  searchMovie() {
    this.tmdb.searchMovieDetails({ query: this.query, include_adult: true })
      .then((resp) => {
        console.log("Searched test: ", this.searchContent = resp);
      })
      .catch(err => console.error('Error getting genres:', err));

    this.selectedGenre = null;
    this.producteur = this.title = null;
    this.yearFilter = null;
  }

  loadGenres() {
    this.tmdb.getGenres()
      .then((g) => console.log("Genres: ", this.listeGenres = g.genres))
      .catch(err => console.error('Error getting genres:', err))
  }

  get movies() {
    return this.searchContent;
  }

  getPath(path: string): string {
    return this.tmdb.getPath(path);
  }

  private _filter(value: string, who: string[]): string[] {
    const filterValue = value.toLowerCase();
    return who.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public searchProductor(value: string): void {
    this.searchContent.credits.map(credit => {
      credit.crew.filter(c => {
        c.job === "Producer";
        this.productorsSearched.push(c.name);
        this.productorsSearched = this.productorsSearched.filter((el, i, a) => i === a.indexOf(el))
      })
    });
    this.productorsSearched = this.searchPeople(this.productorsSearched, value);
  }

  public searchActor(value: string): void {
    this.searchContent.credits.map(credit => {
      credit.cast.map(c => {
        this.actorsSearched.push(c.name)
        this.actorsSearched = this.actorsSearched.filter((el, i, a) => i === a.indexOf(el))
      })
    });
    this.actorsSearched = this.searchPeople(this.actorsSearched, value);
  }


  public searchPeople(dataContainer: string[], value: string): string[] {
    console.log('khra', dataContainer = this._filter(value, dataContainer));
    return dataContainer;
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

  getGenres(): MovieGenre[] {
    return this.listeGenres;
  }

  addMovie(searchContent: SearchContent) {
    this.openDialog(null,searchContent.searchedMovies.results);
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-selectlist.html',
})
export class DialogAddMovie {

  constructor(
    public dialogRef: MatDialogRef<DialogAddMovie>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}