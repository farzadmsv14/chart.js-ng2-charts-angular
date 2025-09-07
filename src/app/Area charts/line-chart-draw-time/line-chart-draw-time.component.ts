import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataService, FilledLineChartData } from './line-chart-draw-time.service';



@Component({
  selector: 'app-line-chart-draw-time',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './line-chart-draw-time.component.html',
  styleUrls: ['./line-chart-draw-time.component.css'],
})
export class LineChartDrawTimeComponent {
  showChart = false;
  lineChartData!: FilledLineChartData;

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      filler: { propagate: false },
      title: {
        display: true,
        text: 'Filled Line Chart with Filler',
      },
    },
    elements: {
      point: {
        backgroundColor: '#fff',
        radius: 10,
      },
    },
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
