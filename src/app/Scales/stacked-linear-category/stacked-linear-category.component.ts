import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  LineChartLogService,
  FilledLineChartData,
} from './stacked-linear-category.service';

@Component({
  selector: 'app-stacked-linear-category',
  imports: [CommonModule, BaseChartDirective],
  standalone: true,
  templateUrl: './stacked-linear-category.component.html',
  styleUrl: './stacked-linear-category.component.css',
})
export class StackedLinearCategoryComponent {
  showChart = false;
  lineChartData!: FilledLineChartData;
  lineChartType: 'line' = 'line';

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Logarithmic',
      },
    },
    scales: {
      x: {
        display: true,
        title: { display: true, text: 'Month' },
      },
      y: {
        display: true,
        type: 'logarithmic',
        title: { display: true, text: 'Value (log scale)' },
      },
    },
  };

  constructor(private chartDataService: LineChartLogService) {}

  toggleChart() {
    this.chartDataService._chartData.subscribe((data) => {
      this.lineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
