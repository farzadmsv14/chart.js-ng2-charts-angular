import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BarChartData, ChartDataService } from './vertical-bar-chart.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-vertical-bar-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css'],
})
export class VerticalBarChartComponent {
  showChart = false;
  barChartData!: BarChartData; 

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Chart.js Bar Chart' },
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
