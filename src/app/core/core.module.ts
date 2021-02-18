import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
   UserService,
   CountryService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    CountryService
  ],
  declarations: []
})
export class CoreModule { }
