import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { ChartDataService, GapChartData } from './time-scale-max-span.service';

@Component({
  selector: 'app-time-scale-max-span',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './time-scale-max-span.component.html',
  styleUrl: './time-scale-max-span.component.css',
})
export class GapLineChartComponent {
  showChart = false;

  lineChartData!: GapChartData;

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    spanGaps: false,
    interaction: {
      mode: 'nearest',
    },
    plugins: {
      title: {
        display: true,
        text: 'Line Chart with Gaps (2 days)',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Date',
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
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

  constructor(private chartService: ChartDataService) {}

  toggleChart() {
    this.chartService._chartData.subscribe((data) => {
      this.lineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
