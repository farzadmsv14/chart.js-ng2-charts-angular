import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { CustomTooltipContentService, LegendTitleChartData } from './custom-tooltip-content.service';

@Component({
  selector: 'app-custom-tooltip-content',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './custom-tooltip-content.component.html',
  styleUrl: './custom-tooltip-content.component.css',
})
export class CustomTooltipContentComponent {
  showChart = false;
  chartData!: LegendTitleChartData;

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        title: {
          display: true,
          text: 'Legend Title',
        },
      },
    },
  };

  chartType: 'line' = 'line';

  constructor(public chartService: CustomTooltipContentService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
    this.showChart = !this.showChart;
  }
}
