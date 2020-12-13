import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Chart, ChartOptions, } from 'chart.js';

import { HistoricalValue } from '../covid19-data.types';

@Component({
  selector: 'historical-line-chart',
  templateUrl: './historical-line-chart.component.html',
  styleUrls: ['./historical-line-chart.component.css']
})
export class HistoricalLineChartComponent implements OnInit, OnChanges {

	@Input() historicalData : Map<string, HistoricalValue> | undefined;
 
	chart: Chart | undefined = undefined;

	constructor() { }

	ngOnInit(): void {
	};

	ngOnChanges(changes: SimpleChanges): void
	{
		if(this.chart !== undefined){
			this.chart.destroy();
		}		

		const context: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

		const historicalData : Map<string, HistoricalValue> = (<Map<string, HistoricalValue>>this.historicalData);

		const options : ChartOptions = {
			tooltips: {	enabled: true,	},
			legend: {
				display: true,
				position: 'bottom',
				labels: { fontColor: 'black' },
			},
			scales: {
				yAxes: [
					{ ticks: { fontColor: "black", display: true, beginAtZero: true, }, },
				],
				xAxes: [
					{ ticks: { fontColor: "black", display: true, }, },
				],
			},
		};
		
		const configuration : Chart.ChartConfiguration = {
			type: 'line',
			data: {
				labels: [...historicalData.keys()],
				datasets: [
					{ label: "Infectados", fill: false, backgroundColor: '#FFFFFF', borderColor: '#FF0000', data: [...historicalData.values()].map(item => item.infected), },
					{ label: "Fallecidos", fill: false, backgroundColor: '#FFFFFF', borderColor: '#000000', data: [...historicalData.values()].map(item => item.deceased ), },
					{ label: "Recuperados", fill: false, backgroundColor: '#FFFFFF', borderColor: '#102EF3D9', data: [...historicalData.values()].map(item => item.recovered ), },
				],
			},
			options: options,
		};

		this.chart = new Chart(context, configuration);
	}
}