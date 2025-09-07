import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { PointStyleChartData, PointStyleService } from './point-style.service';

@Component({
  selector: 'app-point-style',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './point-style.component.html',
  styleUrl: './point-style.component.css',
})
export class PointStyleComponent {
  showChart = false;
  chartData!: PointStyleChartData;

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  chartType: 'line' = 'line';

  constructor(public chartService: PointStyleService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
    this.showChart = !this.showChart;
  }
}
