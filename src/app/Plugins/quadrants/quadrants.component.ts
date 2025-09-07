import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { quadrants } from './quadrants.plugin';
import { QuadrantsService, ScatterChartData } from './quadrants.service';

@Component({
  selector: 'app-quadrants',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './quadrants.component.html',
  styleUrl: './quadrants.component.css',
})
export class QuadrantsComponent {
  chartData!: ScatterChartData;
  chartType: 'scatter' = 'scatter';
  showChart!: boolean;
  chartOptions: ChartOptions<'scatter'> = {
    responsive: true,
    plugins: {
      legend: { display: true },
      quadrants: {
        topLeft: 'rgba(255,0,0,0.1)',
        topRight: 'rgba(0,0,255,0.1)',
        bottomRight: 'rgba(0,255,0,0.1)',
        bottomLeft: 'rgba(255,255,0,0.1)',
      },
    } as any,
    scales: {
      x: { type: 'linear', position: 'bottom' },
      y: { type: 'linear' },
    },
  };

  chartPlugins = [quadrants];

  constructor(private chartService: QuadrantsService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
    this.showChart = !this.showChart;
  }
}
