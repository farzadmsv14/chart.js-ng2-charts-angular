// line-chart-datasets.component.ts
import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataService, LineChartData } from './line-chart-datasets.service';

@Component({
  selector: 'app-line-chart-datasets',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './line-chart-datasets.component.html',
  styleUrls: ['./line-chart-datasets.component.css'],
})
export class LineChartDatasetsComponent {
  showChart = false;

  lineChartData!: LineChartData;
  lineChartOptions: ChartOptions<'line'> = {
    scales: { y: { stacked: true } },
    plugins: { filler: { propagate: false } },
    interaction: { intersect: false },
  };
  lineChartType: 'line' = 'line';

  constructor(private chartService: ChartDataService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.lineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
