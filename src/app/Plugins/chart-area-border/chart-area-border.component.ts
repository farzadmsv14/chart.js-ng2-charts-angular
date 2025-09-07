// chart-area-border.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { chartAreaBorder } from './chart-area-border.plugin';
import {
  ChartAreaBorderService,
  ChartAreaBorderChartData,
} from './chart-area-border.service';

@Component({
  selector: 'app-chart-area-border',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './chart-area-border.component.html',
  styleUrl: './chart-area-border.component.css',
})
export class ChartAreaBorderComponent {
  chartData!: ChartAreaBorderChartData;
  chartType: 'line' = 'line';
  showChart!: boolean;
  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: true },
      chartAreaBorder: { borderColor: 'red' },
    } as any,
  };

  chartPlugins = [chartAreaBorder];

  constructor(private chartService: ChartAreaBorderService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
    this.showChart = !this.showChart;
  }
}
