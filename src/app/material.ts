/**
 * The only purpose of this file is to help us keep the project clean and not overloaded.
 * Please put all your material components' imports inside this file.
 */

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
} from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatInputModule],
})

export class MaterialModule { }
