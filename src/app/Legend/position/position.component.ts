import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { PositionService, SimpleLineChartData } from './position.service';
@Component({
  selector: 'app-position',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './position.component.html',
  styleUrl: './position.component.css',
})
export class PositionComponent {
  showChart = false;
  chartData!: SimpleLineChartData;

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
  };

  chartType: 'line' = 'line';

  constructor(public chartService: PositionService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
      
    });
    this.showChart = !this.showChart;
  }
}
