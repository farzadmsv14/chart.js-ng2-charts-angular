import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  RadarChartDataService,
  RadarChartData,
} from './radar-chart-stacked.service';

@Component({
  selector: 'app-radar-chart-stacked',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './radar-chart-stacked.component.html',
  styleUrl: './radar-chart-stacked.component.css',
})
export class RadarChartStackedComponent {
  showChart = false;

  radarChartData!: RadarChartData;

  radarChartOptions: ChartOptions<'radar'> = {
    responsive: true,
    plugins: {
      filler: { propagate: false },
    },
    interaction: { intersect: false },
  };

  radarChartType: 'radar' = 'radar';

  constructor(private chartDataService: RadarChartDataService) {}

  toggleChart() {
    this.chartDataService._chartData.subscribe((data) => {
      this.radarChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
