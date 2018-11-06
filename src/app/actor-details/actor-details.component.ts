import { Component, OnInit, OnDestroy } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { PersonResponse, PersonDetails } from '../tmdb-data/Person';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit, OnDestroy {

  private actorDetails: PersonDetails; // Film en cours
  private id: any;
  private routeSubscription: any;

  constructor(private tmdb: TmdbService, private route: ActivatedRoute) { }


  /** Subscribing to the params of route just to be able
   * to reaload it withouy any issue.
   */
  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((param: any) => {
      this.id = param['id'];
      this.tmdb.init('af82599daa1c8b9cef254d429ec0d436')
      this.loadCurrentActor();
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  /**Loading current actor's details. */
  loadCurrentActor() {
    this.tmdb.getPersonDetails(this.id)
      .then((m: PersonDetails) => {
        console.log('Actor response:', this.actorDetails = m);
        this.actorDetails.known_for.cast = m.known_for.cast.slice(0, 5);
      })
      .catch(err => console.error('Error getting movie:', err))
  }

  get actor(): any {
    return this.actorDetails;
  }

  getPath(path: string): string {
    return this.tmdb.getPath(path);
  }


}
