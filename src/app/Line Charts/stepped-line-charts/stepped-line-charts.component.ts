import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartDataService } from './stepped-line-charts.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

export interface SteppedLineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor?: string;
    fill?: boolean;
    tension?: number;
    stepped?: boolean | 'before' | 'after' | 'middle';
  }[];
}

@Component({
  selector: 'app-stepped-line-charts',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './stepped-line-charts.component.html',
  styleUrls: ['./stepped-line-charts.component.css'],
})
export class SteppedLineChartsComponent {
  showChart = false;
  steppedLineChartData!: SteppedLineChartData;

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    interaction: { intersect: false, axis: 'x' },
    plugins: {
      title: {
        display: true,
        text: 'Stepped Line Chart',
      },
    },
  };

  lineChartType: 'line' = 'line';

  constructor(private chartService: ChartDataService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.steppedLineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
