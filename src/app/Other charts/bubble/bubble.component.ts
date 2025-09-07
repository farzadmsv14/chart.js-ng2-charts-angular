import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BubbleChartData, ChartDataService } from './bubble.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bubble',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css'],
})
export class BubbleComponent {
  showChart = false;
  bubbleChartData!: BubbleChartData;

  bubbleChartOptions: ChartOptions<'bubble'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Chart.js Bubble Chart' },
    },
  };

  bubbleChartType: 'bubble' = 'bubble';

  constructor(private chartService: ChartDataService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.bubbleChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
