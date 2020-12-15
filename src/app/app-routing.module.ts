import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryDetailComponent } from './country-detail/country-detail.component';
import { LatinAmericanRankingComponent } from './latin-american-ranking/latin-american-ranking.component';

const routes: Routes = [
  { path: '', component: LatinAmericanRankingComponent, pathMatch:'full', },
  { path: 'country/:countryName', component: CountryDetailComponent, },
  { path: '**', redirectTo:'', pathMatch:'full', }, //<-- It can be a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }