import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  LineChartDataService,
  LineChartData,
} from './linear-scale-suggested-min-max.service';

@Component({
  selector: 'app-linear-scale-suggested-min-max',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './linear-scale-suggested-min-max.component.html',
  styleUrl: './linear-scale-suggested-min-max.component.css',
})
export class LinearScaleSuggestedMinMaxComponent {
  showChart = false;

  lineChartData!: LineChartData;
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Suggested Min and Max Settings',
      },
    },
    scales: {
      y: {
        suggestedMin: 30,
        suggestedMax: 50,
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
