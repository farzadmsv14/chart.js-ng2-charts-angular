import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  ChartDataService,
  ComboChartData,
} from './time-scale-combo-chart.service';

@Component({
  selector: 'app-time-scale-combo-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './time-scale-combo-chart.component.html',
  styleUrl: './time-scale-combo-chart.component.css',
})
export class ComboLineChartComponent {
  showChart = false;

  lineChartData!: ComboChartData;

  lineChartOptions: ChartOptions<'line' | 'bar'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Combo Chart (Line + Bar)',
      },
    },
    scales: {
      x: {
        type: 'category',
        offset: true,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  lineChartType: any = 'line';

  constructor(private chartService: ChartDataService) {}

  toggleChart() {
    this.chartService._chartData.subscribe((data) => {
      this.lineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
