import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import {
  MyStackedLineBarChartData,
  StackedBarLineChartService,
} from './stacked-bar-line.service';

@Component({
  selector: 'app-stacked-bar-line',
  imports: [CommonModule, BaseChartDirective],
  standalone: true,
  templateUrl: './stacked-bar-line.component.html',
  styleUrls: ['./stacked-bar-line.component.css'],
})
export class StackedBarLineComponent {
  showChart = false;
  barLineChartData!: MyStackedLineBarChartData;

  barLineChartOptions: ChartOptions<'bar' | 'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Stacked Line/Bar Chart',
      },
    },
    scales: {
      y: { stacked: true },
    },
  };

  barLineChartType = 'bar' as 'bar' | 'line';

  constructor(private chartService: StackedBarLineChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.barLineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
