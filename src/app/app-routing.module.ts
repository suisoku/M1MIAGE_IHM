import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { ActorsComponent } from './actors/actors.component';
import { MovieComponent } from './movie/movie.component';
import { ManagerListComponent } from './lists/manager-list/manager-list.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ListDetailsComponent } from './lists/list-details/list-details.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';


const appRoutes: Routes = [
  {
    path: '',
    component: TrendingComponent
  },
  {
    path: 'listes/:name',
    component: ListDetailsComponent
  },
  {
    path: 'listes',
    component: ManagerListComponent
  },
  {
    path: 'acteurs/:id',
    component: ActorDetailsComponent
  },
  {
    path: 'acteurs',
    component: ActorsComponent
  },
  {
    path: 'film/:id',
    component: MovieComponent
  },
  {
    path: 'films',
    component: SearchMovieComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
