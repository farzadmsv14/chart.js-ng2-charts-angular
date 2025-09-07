import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import {
  ChartDataService,
  PointStyleLineChartData,
} from './point-styling.service';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-styling',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './point-styling.component.html',
  styleUrls: ['./point-styling.component.css'],
})
export class PointStylingComponent {
  showChart = false;
  pointStyleChartData!: PointStyleLineChartData;

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Point Style Chart',
      },
    },
  };

  lineChartType: 'line' = 'line';

  constructor(private chartService: ChartDataService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.pointStyleChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
