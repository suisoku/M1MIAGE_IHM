/**
 * The only purpose of this file is to help us keep the project clean and not overloaded.
 * Please put all your material components' imports inside this file.
 */



import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
<<<<<<< HEAD
  MatAutocompleteModule, MatSelectModule, MatSliderModule
=======
  MatAutocompleteModule
>>>>>>> parent of 00f93bc... Merge pull request #2 from suisoku/feature_trending
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
<<<<<<< HEAD
    MatSelectModule,
    MatSliderModule,
    MatCardModule
=======
>>>>>>> parent of 00f93bc... Merge pull request #2 from suisoku/feature_trending
  ],
  exports: [
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
<<<<<<< HEAD
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
=======
>>>>>>> parent of 00f93bc... Merge pull request #2 from suisoku/feature_trending
    MatCardModule
  ]
})
export class MaterialModule {}

