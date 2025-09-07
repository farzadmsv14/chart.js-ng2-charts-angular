import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ChartDataService, LineChartData } from './interpolation-modes.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-interpolation-modes',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './interpolation-modes.component.html',
  styleUrls: ['./interpolation-modes.component.css'],
})
export class InterpolationModesComponent {
  showChart = false;
  lineChartData!: LineChartData;

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Cubic interpolation mode',
      },
    },
    interaction: { intersect: false },
    scales: {
      x: { display: true, title: { display: true, text: '' } },
      y: {
        display: true,
        title: { display: true, text: 'Value' },
        suggestedMin: -10,
        suggestedMax: 200,
      },
    },
  };

  lineChartType: ChartConfiguration<'line'>['type'] = 'line';

  constructor(private chartService: ChartDataService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.lineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
