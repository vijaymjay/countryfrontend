import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables';
import { CountryRoutingModule } from './country-routing.module';
import { CountrylistComponent } from './countrylist/countrylist.component';


@NgModule({
  declarations: [CountrylistComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    DataTablesModule
  ]
})
export class CountryModule { }
