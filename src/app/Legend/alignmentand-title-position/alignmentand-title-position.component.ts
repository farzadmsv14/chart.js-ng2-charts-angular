import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  AlignmentandTitlePositionService,
  LegendTitleChartData,
} from './alignmentand-title-position.service';
@Component({
  selector: 'app-alignmentand-title-position',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './alignmentand-title-position.component.html',
  styleUrl: './alignmentand-title-position.component.css',
})
export class AlignmentandTitlePositionComponent {
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

  constructor(public chartService: AlignmentandTitlePositionService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
    this.showChart = !this.showChart;
  }
}
