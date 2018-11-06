import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/list-data/List';
import { ListsManagerService } from 'src/app/lists-manager.service';
import { Subscription } from 'rxjs';
import { TmdbService } from 'src/app/tmdb.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit, OnDestroy {

  routeSubscription: any;
  name: string;
  list : List;
  subscription: Subscription;
  
  constructor(private listeService: ListsManagerService, private tmdb: TmdbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((param: any) => {
      this.name = param['name'];
      this.loadList();
    });
  }

  /**
   * Retrieving data from the mock-up List.
   */
  loadList() {
    this.subscription = this.listeService.getData().subscribe(lists => 
      console.log("Liste", this.list = lists.find(a => a.name == this.name)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  get myList() {
    return this.list;
  }
  
  /**
   * For image sake.
   */
  getPath(path: string): string {
    return this.tmdb.getPath(path);
  }
}
