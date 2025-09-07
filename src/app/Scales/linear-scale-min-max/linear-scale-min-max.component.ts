import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  LineChartDataService,
  LineChartData,
} from './linear-scale-min-max.service';

@Component({
  selector: 'app-linear-scale-min-max',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './linear-scale-min-max.component.html',
  styleUrl: './linear-scale-min-max.component.css',
})
export class LinearScaleMinMaxComponent {
  showChart = false;
  lineChartData!: LineChartData;
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Min and Max Settings',
      },
    },
    scales: {
      y: {
        min: 10,
        max: 50,
      },
    },
  };

  lineChartType: 'line' = 'line';

  constructor(private chartDataService: LineChartDataService) {}

  toggleChart() {
    this.chartDataService._chartData.subscribe((data) => {
      this.lineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
