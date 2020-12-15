import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Covid19DataService } from './covid19-data.service';

import { CountryDetailComponent } from './country-detail/country-detail.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { CountryInfoTableComponent } from './country-info-table/country-info-table.component';
import { HistoricalLethalityLineChartComponent } from './historical-lethality-line-chart/historical-lethality-line-chart.component';
import { HistoricalLineChartComponent } from './historical-line-chart/historical-line-chart.component';
import { LatinAmericanRankingComponent } from './latin-american-ranking/latin-american-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailComponent,
    NavHeaderComponent,
    AppFooterComponent,
    CountryInfoTableComponent,
    HistoricalLethalityLineChartComponent,
    HistoricalLineChartComponent,
    LatinAmericanRankingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [Covid19DataService],
  bootstrap: [AppComponent],
})

export class AppModule { }