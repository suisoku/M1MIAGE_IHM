import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * MaterialModule helps us to avoid overloading the app.module file.
 * We will put all the material components' imports into the material.ts file
 * And then import the MaterialModule class in order to get them.
 */
import { MaterialModule } from './material';


import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrendingComponent } from './trending/trending.component';
import { ManagerListComponent, DialogNewList } from './lists/manager-list/manager-list.component';
import { ListDetailsComponent } from './lists/list-details/list-details.component';
import { MovieComponent } from './movie/movie.component';
import { ActorsComponent } from './actors/actors.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TmdbService } from './tmdb.service';
import { ListsManagerService } from './lists-manager.service';
import { SearchMovieComponent, DialogAddMovie } from './search-movie/search-movie.component';
import { FilterSearchPipe } from './search-movie/search.pipe';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { FilterActorPipe } from './actors/actors.pipe';
import { NouisliderModule } from 'ng2-nouislider';
import { FilterTrendingPipe } from './trending/trending.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TrendingComponent,
    ManagerListComponent,
    ListDetailsComponent,
    MovieComponent,
    ActorsComponent,
    DialogNewList,
    DialogAddMovie, 
    SearchMovieComponent,
    ActorDetailsComponent,
    FilterSearchPipe,
    FilterActorPipe, 
    FilterTrendingPipe
  ],
  entryComponents: [DialogNewList, DialogAddMovie],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule
  ],
  providers: [TmdbService, ListsManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
