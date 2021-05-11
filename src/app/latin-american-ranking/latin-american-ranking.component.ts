import { Component, OnInit } from '@angular/core';

import { Covid19DataService } from '../covid19-data.service';

import { Country, RankValueEnum } from '../covid19-data.types';
import { GetRankHistoricalValue } from '../covid19-data.helpers';

@Component({
  selector: 'app-latin-american-ranking',
  templateUrl: './latin-american-ranking.component.html',
  styleUrls: ['./latin-american-ranking.component.css'],
})
export class LatinAmericanRankingComponent implements OnInit {
  countries: Country[] | undefined;
  rankHistoricalValue: Map<RankValueEnum, Map<string, number>> | undefined;
  localRankValueEnum = RankValueEnum;

  constructor(private covid19DataService: Covid19DataService) {}

  ngOnInit(): void {
    this.covid19DataService.getCountries().subscribe((countries: Country[]) => {
      this.countries = countries;

      this.rankHistoricalValue = GetRankHistoricalValue(
        this.countries,
        Array.from(this.covid19DataService.availableCountries.keys())
      );
    });
  }
}

