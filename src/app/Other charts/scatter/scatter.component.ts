import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { ScatterChartData, ScatterChartService } from './scatter.service';

@Component({
  selector: 'app-scatter',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css'],
})
export class ScatterComponent {
  showChart = false;
  scatterChartData!: ScatterChartData;

  scatterChartOptions: ChartOptions<'scatter'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Chart.js Scatter Chart' },
    },
  };

  scatterChartType: 'scatter' = 'scatter';

  constructor(private chartService: ScatterChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.scatterChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
