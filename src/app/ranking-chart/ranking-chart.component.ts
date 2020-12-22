import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { Chart, ChartOptions, ChartData, ChartDataSets } from 'chart.js';

import { RankValueEnum } from '../covid19-data.types';

@Component({
  selector: 'app-ranking-chart',
  templateUrl: './ranking-chart.component.html',
  styleUrls: ['./ranking-chart.component.css']
})
export class RankingChartComponent implements OnInit, AfterViewInit {

  @Input() canvasId : string = 'canvas';
  @Input() rankValue : RankValueEnum = RankValueEnum.Deceased;
  @Input() rankingData : Map<RankValueEnum, Map<string, number>> | undefined;
  
  chartTitle : string = '';
  chart: Chart | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
    
    if(this.chart !== undefined){
			this.chart.destroy();
    }
    
    this.chartTitle = this.getChartTitle(this.rankValue);
  }

  ngAfterViewInit(): void
  {
    const context: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById(this.canvasId);
    
    const rankingValues : Map<string, number> = <Map<string, number>>(<Map<RankValueEnum, Map<string, number>>>this.rankingData).get(this.rankValue);

		const options : ChartOptions = {
      tooltips: {
        enabled: true,
        callbacks:{
          title: () => this.getChartToolTipTitle(this.rankValue),
        },
      },
      responsive : true,
			legend: {
				display: true,
				position: 'bottom',
				labels: { fontColor: 'black' },
      },
			scales: {
				xAxes: [
					{ ticks: { fontColor: "black", display: true, min: 0, autoSkip: false, }, },
				],
      },
      animation: {
        duration: 3000,
      },
      maintainAspectRatio: false,
		};

    const chartData : ChartData = {
      datasets: [...Array.from(rankingValues).map(c => this.generateChartDataSet(c[0], c[1]))],
    };

		const configuration : Chart.ChartConfiguration = {
			type: 'horizontalBar',
			data: chartData,
			options: options,
		};

		this.chart = new Chart(context, configuration);
  }
  
  getChartTitle(rankValue: RankValueEnum) : string{
    switch(rankValue){
      case RankValueEnum.Infected:
        return "Ranking de países con mayor número de infectados de COVID-19";

      case RankValueEnum.Deceased:
          return "Ranking de países con mayor número de recuperados de COVID-19";

      case RankValueEnum.Recovered:
          return "Ranking de países con mayor número de fallecimientos de COVID-19";

      case RankValueEnum.Tests:
          return "Ranking de países con mayor número de pruebas de COVID-19 realizadas";

      case RankValueEnum.Lethality:
          return "Ranking de países con la mayor letalidad del COVID-19";

      case RankValueEnum.CasesPerOneMillion:
          return "Ranking de países con mayor número de infectados de COVID-19 por millón de habitantes";

      case RankValueEnum.DeathsPerOneMillion:
          return "Ranking de países con mayor número de fallecimientos de COVID-19 por millón de habitantes";

      case RankValueEnum.TestsPerOneMillion:
          return "Ranking de países con mayor número de pruebas de COVID-19 por millón de habitantes";
    }
  }

  getChartToolTipTitle(rankValue: RankValueEnum) : string{
    switch(rankValue){
      case RankValueEnum.Infected:
        return "Número de infectados de COVID-19";

      case RankValueEnum.Deceased:
          return "Número de recuperados de COVID-19";

      case RankValueEnum.Recovered:
          return "Número de fallecimientos de COVID-19";

      case RankValueEnum.Tests:
          return "Ranking de países con mayor número de pruebas de COVID-19 realizadas";

      case RankValueEnum.Lethality:
          return "Letalidad del COVID-19";

      case RankValueEnum.CasesPerOneMillion:
          return "Número de infectados de COVID-19 por millón de habitantes";

      case RankValueEnum.DeathsPerOneMillion:
          return "Número de fallecimientos de COVID-19 por millón de habitantes";

      case RankValueEnum.TestsPerOneMillion:
          return "Número de pruebas de COVID-19 por millón de habitantes";
    }
  }

  generateChartDataSet(countryName:string, value : number) : ChartDataSets {
    return { label: countryName, fill: true, backgroundColor: this.getRandomColor(), borderColor: '#FFFFFF', data: [value], };
  };

  getRandomColor() : string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}