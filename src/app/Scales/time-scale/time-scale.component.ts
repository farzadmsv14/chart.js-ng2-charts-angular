import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { ChartDataService, CategoryChartData } from './time-scale.service';

@Component({
  selector: 'app-time-scale',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './time-scale.component.html',
  styleUrl: './time-scale.component.css',
})
export class CategoryLineChartComponent {
  showChart = false;

  lineChartData!: CategoryChartData;

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Line Chart with Category X-Axis',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Day',
        },
      },
      y: {
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
