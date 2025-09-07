import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import {
  DynamicTitleChartData,
  InteractionModesService,
} from './interaction-modes.service';

@Component({
  selector: 'app-interaction-modes',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './interaction-modes.component.html',
  styleUrl: './interaction-modes.component.css',
})
export class InteractionModesComponent {
  showChart = false;
  chartData!: DynamicTitleChartData;
  chartTitle = 'Chart Title';

  chartType: 'line' = 'line';

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index',
      axis: 'x',
    },
    plugins: {
      title: {
        display: true,
        text: this.chartTitle,
      },
      legend: {
        display: true,
      },
    },
  };

  constructor(private chartService: InteractionModesService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;

      const { mode, axis, intersect } = this.chartOptions.interaction || {};
      this.chartTitle = `Mode: ${mode}, axis: ${axis}, intersect: ${intersect}`;
      this.chartOptions.plugins!.title!.text = this.chartTitle;
    });
    this.showChart = !this.showChart;
  }
}
