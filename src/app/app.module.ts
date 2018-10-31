import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NouisliderModule } from 'ng2-nouislider';

/**
 * MaterialModule helps us to avoid overloading the app.module file.
 * We will put all the material components' imports into the material.ts file
 * And then import the MaterialModule class in order to get them.
 */
import { MaterialModule } from './material';


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
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { ActorFilterComponent } from './actor/actor-filter/actor-filter.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NouisliderModule,
    TagInputModule,
    ReactiveFormsModule
  ],
  providers: [TmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
