import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import {
  LineChartBoundariesService,
  LineChartData,
} from './line-chart-boundaries.service';

@Component({
  selector: 'app-line-chart-boundaries',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './line-chart-boundaries.component.html',
  styleUrls: ['./line-chart-boundaries.component.css'],
})
export class LineChartBoundariesComponent {
  showChart = false;
  lineChartData!: LineChartData;

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      filler: { propagate: false },
      title: {
        display: true,
        text: 'Fill',
      },
    },
    interaction: { intersect: false },
  };

  lineChartType: 'line' = 'line';

  constructor(private chartService: LineChartBoundariesService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.lineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
