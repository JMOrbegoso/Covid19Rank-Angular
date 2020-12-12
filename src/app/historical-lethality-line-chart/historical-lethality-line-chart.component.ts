import { Component, OnInit, Input } from '@angular/core';

import { CountryHistorical } from '../covid19-data.types';

@Component({
  selector: 'historical-lethality-line-chart',
  templateUrl: './historical-lethality-line-chart.component.html',
  styleUrls: ['./historical-lethality-line-chart.component.css']
})
export class HistoricalLethalityLineChartComponent implements OnInit {
  
  @Input() countryHistorical: CountryHistorical | any;

  constructor() { }

  ngOnInit(): void {
  }

}
