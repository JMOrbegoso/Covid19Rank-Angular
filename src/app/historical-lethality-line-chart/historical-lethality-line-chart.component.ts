import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Chart, ChartOptions, } from 'chart.js';

@Component({
  selector: 'historical-lethality-line-chart',
  templateUrl: './historical-lethality-line-chart.component.html',
  styleUrls: ['./historical-lethality-line-chart.component.css']
})
export class HistoricalLethalityLineChartComponent implements OnInit, OnChanges {
  
  @Input() lethalityHistoricalData: Map<string, number> | undefined;

  chart: Chart | undefined = undefined;

  constructor() { }
  
  ngOnInit(): void {
  };

  ngOnChanges(changes: SimpleChanges): void
  {
    if(this.chart !== undefined){
			this.chart.destroy();
		}		

		const context: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas_historical_lethality_line_chart');

		const historicalData : Map<string, number> = (<Map<string, number>>this.lethalityHistoricalData);
	}
}