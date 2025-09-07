import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataService } from './doughnut.service';

export interface DoughnutChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

export interface DoughnutChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

@Component({
  selector: 'app-doughnut',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css'],
})
export class DoughnutComponent {
  showChart = false;
  doughnutChartData!: DoughnutChartData;

  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Chart.js Doughnut Chart' },
    },
  };

  doughnutChartType: 'doughnut' = 'doughnut';

  constructor(private chartService: ChartDataService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.doughnutChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
