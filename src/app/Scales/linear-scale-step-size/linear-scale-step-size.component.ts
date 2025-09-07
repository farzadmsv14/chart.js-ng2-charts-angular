import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  LineChartDataService,
  LineChartData,
} from './linear-scale-step-size.service';

@Component({
  selector: 'app-linear-scale-step-size',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './linear-scale-step-size.component.html',
  styleUrl: './linear-scale-step-size.component.css',
})
export class LinearScaleStepSizeComponent {
  showChart = false;

  lineChartData!: LineChartData;
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    hover: {
      mode: 'index',
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
        min: 0,
        max: 100,
        ticks: {
          stepSize: 50,
        },
        title: {
          display: true,
          text: 'Value',
        },
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
