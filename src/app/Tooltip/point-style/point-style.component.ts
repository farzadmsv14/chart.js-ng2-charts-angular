import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { PointStyleChartData, PointStyleService } from './point-style.service';

@Component({
  selector: 'app-point-style',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './point-style.component.html',
  styleUrl: './point-style.component.css',
})
export class PointStyleComponent {
  showChart = false;
  chartData!: PointStyleChartData;

  chartType: 'line' = 'line';
  chartTitle = '';

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: this.chartTitle,
      },
      tooltip: {
        usePointStyle: true,
      },
      legend: {
        display: true,
      },
    },
  };

  constructor(private chartService: PointStyleService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
      const pointStyles = data.datasets.map((ds) => ds.pointStyle).join(', ');
      this.chartTitle = 'Tooltip point styles: ' + pointStyles;
      this.chartOptions.plugins!.title!.text = this.chartTitle;
    });
    this.showChart = !this.showChart;
  }
}
