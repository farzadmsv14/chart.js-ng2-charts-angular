import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { LineChartDataService, LineChartData } from './log-scale.service';

@Component({
  selector: 'app-log-scale',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './log-scale.component.html',
  styleUrl: './log-scale.component.css',
})
export class LineChartLogComponent {
  showChart = false;

  lineChartData!: LineChartData;
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Logarithmic',
      },
    },
    scales: {
      x: {
        display: true,
        title: { display: true, text: 'Month' },
      },
      y: {
        display: true,
        type: 'logarithmic',
        title: { display: true, text: 'Value (log scale)' },
      },
    },
  };

  lineChartType: 'line' = 'line';

  constructor(private chartDataService: LineChartDataService) {}

  toggleChart() {
    this.chartDataService._chartData.subscribe((data) => {
      this.lineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
