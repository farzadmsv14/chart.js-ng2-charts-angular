import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { RadarChartData } from '../../Other charts/radar/radar.service';
import { StaticRadarChartService } from './radar-chart.service';

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.css',
})
export class RadarChartComponent {
  chartData!: RadarChartData;
  chartType: 'radar' = 'radar';

  chartOptions: ChartOptions<'radar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  constructor(private chartService: StaticRadarChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
  }
}
