import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartDataService } from './multi-axis-line-chart.service';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

export interface MultiAxisLineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill?: boolean;
    tension?: number;
    yAxisID: string;
  }[];
}

@Component({
  selector: 'app-multi-axis-line-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './multi-axis-line-chart.component.html',
  styleUrls: ['./multi-axis-line-chart.component.css'],
})
export class MultiAxisLineChartComponent {
  showChart = false;
  multiAxisLineChartData!: MultiAxisLineChartData;

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      title: { display: true, text: 'Chart.js Line Chart - Multi Axis' },
    },
    scales: {
      y: { type: 'linear', display: true, position: 'left' },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: { drawOnChartArea: false },
      },
    },
  };

  lineChartType: 'line' = 'line';

  constructor(private chartService: ChartDataService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.multiAxisLineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
