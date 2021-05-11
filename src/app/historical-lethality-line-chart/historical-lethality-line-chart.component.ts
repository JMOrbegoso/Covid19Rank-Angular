import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Chart, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-historical-lethality-line-chart',
  templateUrl: './historical-lethality-line-chart.component.html',
  styleUrls: ['./historical-lethality-line-chart.component.css'],
})
export class HistoricalLethalityLineChartComponent
  implements OnInit, OnChanges {
  @Input() lethalityHistoricalData: Map<string, number> | undefined;

  chart: Chart | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart !== undefined) {
      this.chart.destroy();
    }

    const context: HTMLCanvasElement = document.getElementById(
      'canvas_historical_lethality_line_chart'
    ) as HTMLCanvasElement;

    const historicalData: Map<string, number> = this
      .lethalityHistoricalData as Map<string, number>;

    const options: ChartOptions = {
      tooltips: { enabled: true },
      legend: {
        display: true,
        position: 'bottom',
        labels: { fontColor: 'black' },
      },
      scales: {
        yAxes: [
          { ticks: { fontColor: 'black', display: true, beginAtZero: true } },
        ],
        xAxes: [{ ticks: { fontColor: 'black', display: true } }],
      },
    };

    const configuration: Chart.ChartConfiguration = {
      type: 'line',
      data: {
        labels: [...historicalData.keys()],
        datasets: [
          {
            label: 'Porcentaje de letalidad',
            fill: false,
            backgroundColor: '#FFFFFF',
            borderColor: '#FF0000',
            data: [...historicalData.values()].map((item) => item),
          },
        ],
      },
      options,
    };

    this.chart = new Chart(context, configuration);
  }
}

