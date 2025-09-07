import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BarChartData, ChartDataService } from './stacked-bar-chart.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-stacked-bar-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css'],
})
export class StackedBarChartComponent {
  showChart = false;
  barChartData!: BarChartData;

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Chart.js Bar Chart - Stacked' },
      legend: { position: 'top' },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  barChartType: ChartConfiguration<'bar'>['type'] = 'bar';

  constructor(private chartService: ChartDataService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.barChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
