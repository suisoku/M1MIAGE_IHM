/**
 * The only purpose of this file is to help us keep the project clean and not overloaded.
 * Please put all your material components' imports inside this file.
 */

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})

export class MaterialModule { }