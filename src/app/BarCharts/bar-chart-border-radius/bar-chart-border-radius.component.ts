import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { barChartData, ChartDataService } from './bar-chart-border-radius.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'app-bar-chart-border-radius',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './bar-chart-border-radius.component.html',
  styleUrls: ['./bar-chart-border-radius.component.css'],
})
export class BarChartBorderRadiusComponent {
  constructor(private chartService: ChartDataService) {}

  showChart = false;
  barChartData!: barChartData;

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'اینجا تایتل رو میذاری' },
    },
  };

  barChartType: ChartConfiguration<'bar'>['type'] = 'bar';

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.barChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
