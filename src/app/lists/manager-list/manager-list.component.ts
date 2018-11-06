import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { ListsManagerService } from 'src/app/lists-manager.service';
import { List } from 'src/app/list-data/List';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit, OnDestroy {

  listToManage: List[];
  newListname: string = "";

  subscription: Subscription;

  facebook = '../../assets/social-facebook-icon.png';
  twitter = '../../assets/twitter-logo.png';
  googlePlus = '../../assets/social-google-plus-icon.png';
  mail = '../../assets/mail-icon.png';

  constructor(private listeService: ListsManagerService, public dialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.listeService
      .getData()
      .subscribe(list => this.listToManage = list);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNewList, {
      width: '250px',
      data: this.newListname
    });
     dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('The dialog was closed! Result content: ', this.newListname = result);
        this.listeService.pushNewList(this.newListname);
        this.newListname = "";
      }
    });
  }

  deleteList(index: number){
    this.listeService.deleteList(index);
  }
}


/** Dialogbox for a new list creation. It will ask for the name of the list to create.
 *  An alternative would be to create an independant component. Both ways work tho*/
@Component({
  selector: 'dialog-newlist',
  templateUrl: 'dialog-newlist.html',
})
export class DialogNewList {

  constructor(
    public dialogRef: MatDialogRef<DialogNewList>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  onNoClick(): void {
    this.dialogRef.close();
    console.log("Valeur: ", this.data);
  }

}
