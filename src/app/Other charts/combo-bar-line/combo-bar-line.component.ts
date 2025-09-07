import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataService, CombinedChartData } from './combo-bar-line.service';

@Component({
  selector: 'app-combo-bar-line',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './combo-bar-line.component.html',
  styleUrls: ['./combo-bar-line.component.css'],
})
export class ComboBarLineComponent {
  showChart = false;
  combinedChartData!: CombinedChartData;
  combinedChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Chart.js Combined Line/Bar Chart' },
    },
  };

  combinedChartType: 'bar' = 'bar';
  constructor(private chartService: ChartDataService) {}
  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.combinedChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
