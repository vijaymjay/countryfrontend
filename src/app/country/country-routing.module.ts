import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrylistComponent } from './countrylist/countrylist.component';

const routes: Routes = [
  {
    path: '',
    component: CountrylistComponent,
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
