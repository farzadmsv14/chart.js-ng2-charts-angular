import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BarChartData, ChartDataService } from './horizontal-bar-chart.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-horizontal-bar-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css'],
})
export class HorizontalBarChartComponent {
  showChart = false;
  barChartData!: BarChartData;

  barChartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    elements: { bar: { borderWidth: 2 } },
    plugins: {
      legend: { position: 'right' },
      title: { display: true, text: 'Chart.js Horizontal Bar Chart' },
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
