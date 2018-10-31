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
  MatAutocompleteModule, MatSelectModule, MatSliderModule
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
    MatSelectModule,
    MatSliderModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
    MatCardModule
  ]
})
export class MaterialModule {}

