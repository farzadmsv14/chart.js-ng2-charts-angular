import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { LoopService, StaticHoverLineChartData } from './loop.service';
@Component({
  selector: 'app-loop',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './loop.component.html',
  styleUrl: './loop.component.css',
})
export class LoopComponent {
  chartData!: StaticHoverLineChartData;
  chartType: 'line' = 'line';

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    interaction: {
      mode: 'nearest',
      intersect: false,
      axis: 'x',
    },
    animations: {
      radius: {
        duration: 400,
        easing: 'linear',
        loop: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: true,
      },
    },
  };

  constructor(private chartService: LoopService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
  }
}
