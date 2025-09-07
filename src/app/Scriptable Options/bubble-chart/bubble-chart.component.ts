import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import {
  BubbleChartService,
  StaticBubbleChartData,
} from './bubble-chart.service';

@Component({
  selector: 'app-bubble-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './bubble-chart.component.html',
  styleUrl: './bubble-chart.component.css',
})
export class BubbleChartComponent {
  showChart = false;
  chartData!: StaticBubbleChartData;

  chartType: 'bubble' = 'bubble';

  chartOptions: ChartOptions<'bubble'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    elements: {
      point: {
        radius: (context) => {
          const point = context.raw as any;
          return point.radius;
        },
        borderWidth: (context) => {
          const point = context.raw as any;
          return point.borderWidth;
        },
        backgroundColor: (context) => {
          const point = context.raw as any;
          return point.backgroundColor;
        },
        borderColor: (context) => {
          const point = context.raw as any;
          return point.borderColor;
        },
      },
    },
  };

  constructor(private chartService: BubbleChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
    this.showChart = !this.showChart;
  }
}
