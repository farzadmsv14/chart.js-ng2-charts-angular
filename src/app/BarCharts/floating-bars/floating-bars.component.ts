import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { barChartData, ChartDataService } from './floating-bars.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-floating-bars',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './floating-bars.component.html',
  styleUrls: ['./floating-bars.component.css'],
})
export class FloatingBarsComponent {
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
