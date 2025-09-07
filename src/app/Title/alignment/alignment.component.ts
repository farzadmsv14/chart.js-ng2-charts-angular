import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import { AlignmentService, ChartTitleService } from './alignment.service';

@Component({
  selector: 'app-alignment',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
    templateUrl: './alignment.component.html',
  styleUrl: './alignment.component.css'
})
export class AlignmentComponent {


  showChart = false;
  chartTitleData!: AlignmentService;

  chartTitleOptions: ChartOptions<'line'> = {
    plugins: {
      title: {
        display: true,
        text: 'Chart Title',
      },
    },
  };

  chartTitleType: 'line' = 'line';

  constructor(public chartService: ChartTitleService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartTitleData = data;
    });
    this.showChart = !this.showChart;
  }
}
