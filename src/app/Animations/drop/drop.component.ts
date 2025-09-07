import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { DropService, StaticAnimatedLineChartData } from './drop.service';

@Component({
  selector: 'app-drop',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './drop.component.html',
  styleUrl: './drop.component.css',
})
export class DropComponent {
  chartData!: StaticAnimatedLineChartData;
  chartType: 'line' = 'line';

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    animation: {
      duration: 1200,
      easing: 'easeInOutElastic',
    },
  };

  constructor(private chartService: DropService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
  }
}
