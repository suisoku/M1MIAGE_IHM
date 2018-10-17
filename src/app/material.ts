/**
 * The only purpose of this file is to help us keep the project clean and not overloaded.
 * Please put all your material components' imports inside this file.
 */

<<<<<<< HEAD
=======
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
} from '@angular/material';
>>>>>>> 2aad92e6334e06cd5192fd698022cf5aca04131a
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
<<<<<<< HEAD
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule {}
=======
  imports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule],
})

export class MaterialModule { }
>>>>>>> 2aad92e6334e06cd5192fd698022cf5aca04131a
