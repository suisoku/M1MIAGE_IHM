import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TmdbService } from './tmdb.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  logo = '../../assets/logo.png';

  navigation = [
    { link: '/listes', name: 'Listes' },
    { link: '/films', name: 'Films' },
    { link: '/acteurs', name: 'Acteurs' }
  ];

  subscription: Subscription;

  constructor(private router : Router, private tmdb: TmdbService) {
  }
  
  ngOnInit(){
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => window.scroll(0,0));
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}