import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import {
  ChartDataService,
  FilledLineChartData,
} from './line-chart-stacked.service';

@Component({
  selector: 'app-line-chart-stacked',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './line-chart-stacked.component.html',
  styleUrls: ['./line-chart-stacked.component.css'],
})
export class LineChartStackedComponent {
  showChart = false;

  lineChartData!: FilledLineChartData;

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Stacked Filled Line Chart',
      },
      tooltip: {
        mode: 'index',
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  lineChartType: 'line' = 'line';

  constructor(private chartDataService: ChartDataService) {}

  toggleChart() {
    this.chartDataService._chartData.subscribe((data) => {
      this.lineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
