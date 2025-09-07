import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { MultiDatasetPieChartData, MultiSeriesPieService } from './multi-series-pie.service';

@Component({
  selector: 'app-multi-series-pie',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './multi-series-pie.component.html',
  styleUrls: ['./multi-series-pie.component.css'],
})
export class MultiSeriesPieComponent {
  showChart = false;
  pieChartData!: MultiDatasetPieChartData;

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  pieChartType: 'pie' = 'pie';

  constructor(private chartService: MultiSeriesPieService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.pieChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
