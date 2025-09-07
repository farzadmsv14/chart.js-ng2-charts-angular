import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import { BasicService, SimpleTitleChartService } from './basic.service';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css',
})
export class BasicComponent {
  showChart = false;
  simpleTitleChartData!: BasicService;

  simpleTitleChartOptions: ChartOptions<'line'> = {
    plugins: {
      title: {
        display: true,
        text: 'Chart Title',
      },
    },
  };

  simpleTitleChartType: 'line' = 'line';

  constructor(public chartService: SimpleTitleChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.simpleTitleChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
