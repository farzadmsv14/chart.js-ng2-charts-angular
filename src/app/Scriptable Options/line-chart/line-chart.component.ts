import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import { LineChartService, StaticLineChartService } from './line-chart.service';
@Component({
  selector: 'app-line-chart2',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class LineChart2Component {
  chartData!: LineChartService;
  chartType: 'line' = 'line';

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    elements: {
      line: {
        fill: false,
      },
      point: {
        hoverRadius: 15,
      },
    },
  };

  constructor(private chartService: StaticLineChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
  }
}
