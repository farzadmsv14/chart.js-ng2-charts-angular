import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import { GridConfigurationService, MyGridLineChartData } from './grid-configuration.service';
@Component({
  selector: 'app-grid-configuration',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './grid-configuration.component.html',
  styleUrl: './grid-configuration.component.css',
})
export class GridConfigurationComponent {
  showChart = false;
  gridLineChartData!: MyGridLineChartData;

  gridLineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Grid Line Settings',
      },
    },
    scales: {
      x: {
        border: {
          display: true,
        },
        grid: {
          display: true,
          drawOnChartArea: true,
          drawTicks: true,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: (context) => {
            if (context.tick.value > 0) {
              return 'green';
            } else if (context.tick.value < 0) {
              return 'red';
            }
            return '#000000';
          },
        },
      },
    },
  };

  gridLineChartType: 'line' = 'line';

  constructor(public chartService: GridConfigurationService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.gridLineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
