import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../tmdb-data/Movie';
import { TmdbService } from '../tmdb.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  private movieDetails: MovieDetails; // Film en cours
  private id: any;
  private routeSubscription: any;


  constructor(private tmdb: TmdbService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((param: any) => {
      this.id = param['id'];
      this.tmdb.init('af82599daa1c8b9cef254d429ec0d436'); // Clef de TMDB
      this.loadCurrentMovie();
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  /**
   * Movie details retrieved after call of this method.
   */
  loadCurrentMovie() {
    this.tmdb.getMovieDetails(this.id)
      .then((m: MovieDetails) => {
        console.log('Movie response:', this.movieDetails = m);
        this.movieDetails.crew.cast = m.crew.cast.slice(0, 5);
        console.log("Suggested movies: ", this.movieDetails.recommendations.results = m.recommendations.results.slice(0, 4));
      })
      .catch(err => console.error('Error getting movie:', err))
  }
  get movie(): any {
    return this.movieDetails;
  }

  getPath(path: string): string {
    return this.tmdb.getPath(path);
  }

}
