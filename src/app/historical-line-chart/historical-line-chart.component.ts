import { Component, OnInit, Input } from '@angular/core';

import { CountryHistorical } from '../covid19-data.types';

@Component({
  selector: 'historical-line-chart',
  templateUrl: './historical-line-chart.component.html',
  styleUrls: ['./historical-line-chart.component.css']
})
export class HistoricalLineChartComponent implements OnInit {

  @Input() countryHistorical: CountryHistorical | any;

  constructor() { }

  ngOnInit(): void {
  }

}
