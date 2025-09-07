// polar-gradient-chart.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  RadialGradientService,
  PolarGradientChartData,
} from './radial-gradient.service';

@Component({
  selector: 'app-radial-gradient',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './radial-gradient.component.html',
  styleUrl: './radial-gradient.component.css',
})
export class RadialGradientComponent {
  chartData!: PolarGradientChartData;
  chartType: 'polarArea' = 'polarArea';
  showChart!: boolean;

  chartOptions: ChartOptions<'polarArea'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  constructor(private chartService: RadialGradientService) {}
  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });

    this.showChart = !this.showChart;
  }
}
