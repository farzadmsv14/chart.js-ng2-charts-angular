import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  ScatterMultiAxisChartData,
  ScatterMultiAxisChartService,
} from './scatter-multi-axis.service';

@Component({
  selector: 'app-scatter-multi-axis',
  imports: [CommonModule, BaseChartDirective],
  standalone: true,
  templateUrl: './scatter-multi-axis.component.html',
  styleUrls: ['./scatter-multi-axis.component.css'],
})
export class ScatterMultiAxisComponent {
  showChart = false;
  scatterChartData!: ScatterMultiAxisChartData;

  scatterChartOptions: ChartOptions<'scatter'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Chart.js Scatter Multi Axis Chart' },
    },
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        ticks: { color: 'rgba(255, 99, 132, 1)' },
      },
      y2: {
        type: 'linear',
        position: 'right',
        reverse: true,
        ticks: { color: 'rgba(255, 159, 64, 1)' },
        grid: { drawOnChartArea: false },
      },
    },
  };

  scatterChartType: 'scatter' = 'scatter';

  constructor(private chartService: ScatterMultiAxisChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.scatterChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
