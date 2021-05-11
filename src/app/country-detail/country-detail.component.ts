import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Covid19DataService } from '../covid19-data.service';

import {
  Country,
  CountryHistorical,
  HistoricalValue,
} from '../covid19-data.types';
import {
  GetHistoricalData,
  GetLethalityHistoricalData,
} from '../covid19-data.helpers';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  country: Country | undefined;
  countryNameKey: string = 'countryName';
  historicalData: Map<string, HistoricalValue> | undefined;
  lethalityHistoricalData: Map<string, number> | undefined;

  constructor(
    private route: ActivatedRoute,
    private covid19DataService: Covid19DataService
  ) {
    this.route.params.subscribe((params) => {
      this.covid19DataService
        .getCountry(params[this.countryNameKey])
        .subscribe((country: Country) => {
          this.country = country;
        });

      this.covid19DataService
        .getCountryHistorical(params[this.countryNameKey])
        .subscribe((countryHistorical: CountryHistorical) => {
          this.historicalData = GetHistoricalData(
            countryHistorical as CountryHistorical
          );
          this.lethalityHistoricalData = GetLethalityHistoricalData(
            countryHistorical as CountryHistorical
          );
        });
    });
  }

  ngOnInit(): void {}
}
