import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  RadarSkipChartData,
  RadarSkipPointsService,
} from './radar-skip-points.service';

@Component({
  selector: 'app-radar-skip-points',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './radar-skip-points.component.html',
  styleUrls: ['./radar-skip-points.component.css'],
})
export class RadarSkipPointsComponent {
  showChart = false;
  radarChartData!: RadarSkipChartData;

  radarChartOptions: ChartOptions<'radar'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Radar Skip Points Chart',
      },
    },
  };

  radarChartType: 'radar' = 'radar';

  constructor(private chartService: RadarSkipPointsService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.radarChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
