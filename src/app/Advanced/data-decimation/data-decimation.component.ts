// decimation-chart.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { DataDecimationService, LargeDataset } from './data-decimation.service';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-data-decimation',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './data-decimation.component.html',
  styleUrl: './data-decimation.component.css',
})
export class DecimationChartComponent {
  chartData!: LargeDataset;
  chartType: 'line' = 'line';
  showChart!: boolean;
  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    animation: false,
    parsing: false,
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    plugins: {
      legend: { display: true },
      decimation: {
        enabled: true,
        algorithm: 'lttb',
        samples: 200,
      },
    } as any,
    scales: {
      x: {
        type: 'time',
        ticks: {
          source: 'auto',
          maxRotation: 0,
          autoSkip: true,
        },
      },
      y: {
        type: 'linear',
      },
    },
  };

  constructor(private chartService: DataDecimationService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
    this.showChart = !this.showChart;
  }
}
