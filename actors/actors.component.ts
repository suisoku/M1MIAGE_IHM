import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { SearchPeopleResponse } from '../tmdb-data/SearchPeople';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors : SearchPeopleResponse;
  yearFilter : number[] = [1960, 2018];
  name : string;
  country: string;
  query : string;

  constructor(private tmdb: TmdbService) {
    
  }

  ngOnInit() {
    this.tmdb.init('af82599daa1c8b9cef254d429ec0d436');
  }

  searchActors() {
    this.tmdb.searchPerson({query : this.query, include_adult : true})
    .then((resp: SearchPeopleResponse) => console.log("Actors: ", this.actors = resp))
    .catch( err => console.error('Error getting people:', err));
    
  }

  get actor() {
    return this.actors;
  }

  getPath(path: string): string {
    return this.tmdb.getPath(path);
  }
  
}
