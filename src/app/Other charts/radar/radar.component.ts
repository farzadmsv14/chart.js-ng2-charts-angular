import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { RadarChartData, RadarChartService } from './radar.service';



@Component({
  selector: 'app-radar',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css'],
})
export class RadarComponent {
  showChart = false;
  radarChartData!: RadarChartData;

  radarChartOptions: ChartOptions<'radar'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Radar Chart',
      },
    },
  };

  radarChartType: 'radar' = 'radar';

  constructor(private chartService: RadarChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.radarChartData = data;
    });
        this.showChart = !this.showChart;
  }
}
