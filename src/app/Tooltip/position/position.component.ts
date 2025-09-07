import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { PositionService, TooltipPositionChartData } from './position.service';

@Component({
  selector: 'app-position2',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './position.component.html',
  styleUrl: './position.component.css',
})
export class Position2Component {
  showChart = false;
  chartData!: TooltipPositionChartData;

  chartType: 'line' = 'line';
  chartTitle = '';

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      title: {
        display: true,
        text: this.chartTitle,
      },
      tooltip: {
        position: 'nearest',
      },
      legend: {
        display: true,
      },
    },
  };

  constructor(private chartService: PositionService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
      const tooltipPosition =
        this.chartOptions.plugins!.tooltip?.position || 'default';
      this.chartTitle = `Tooltip position mode: ${tooltipPosition}`;
      this.chartOptions.plugins!.title!.text = this.chartTitle;
    });
    this.showChart = !this.showChart;
  }
}
