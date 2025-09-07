import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartDataService, FilledLineChartData } from './line-styling.service';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line-styling',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './line-styling.component.html',
  styleUrls: ['./line-styling.component.css'],
})
export class LineStylingComponent {
  showChart = false;
  lineStylingChartData!: FilledLineChartData;

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Filled / Unfilled / Dashed Line Chart' },
    },
  };

  lineChartType: 'line' = 'line';

  constructor(private chartService: ChartDataService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.lineStylingChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
