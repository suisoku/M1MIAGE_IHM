import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '../environments/environment';
import {MovieComponent} from './movie/movie.component';
import {TrendingComponent} from './trending/trending.component';
import {ActorComponent} from './actor/actor.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: TrendingComponent
  },
  {
    path: 'films',
    component: MovieComponent
  },
  {
    path: 'actors',
    component: ActorComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: environment.showRouting
    }),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
