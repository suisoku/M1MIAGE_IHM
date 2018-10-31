import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {MovieComponent} from './movie/movie.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: AppComponent
  },
  {
    path: 'films',
    component: MovieComponent
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
