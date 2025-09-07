import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { DelayChartService, DelayService } from './delay.service';

@Component({
  selector: 'app-delay',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './delay.component.html',
  styleUrl: './delay.component.css',
})
export class DelayComponent {
  chartData!: DelayService;
  chartType: 'bar' = 'bar';

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    animation: {
      duration: 3000,
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  constructor(private chartService: DelayChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
  }
}
