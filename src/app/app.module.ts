import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TmdbService} from './tmdb.service';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TrendingComponent } from './trending/trending.component';
import { ManagerListComponent } from './list-details/manager-list/manager-list.component';
import { NewListComponent } from './list-details/new-list/new-list.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { SocialMediaComponent } from './list-details/social-media/social-media.component';
import { MovieFilterComponent } from './movie/movie-filter/movie-filter.component';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { ActorFilterComponent } from './actor/actor-filter/actor-filter.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SearchBarComponent,
    TrendingComponent,
    ManagerListComponent,
    NewListComponent,
    ListDetailsComponent,
    SocialMediaComponent,
    MovieFilterComponent,
    MovieComponent,
    ActorComponent,
    ActorFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [TmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
