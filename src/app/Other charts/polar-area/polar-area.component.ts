import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  PolarAreaChartData,
  PolarAreaChartService,
} from './polar-area.service';

@Component({
  selector: 'app-polar-area',
  imports: [CommonModule, BaseChartDirective],
  standalone: true,
  templateUrl: './polar-area.component.html',
  styleUrls: ['./polar-area.component.css'],
})
export class PolarAreaComponent {
  showChart = false;
  polarChartData!: PolarAreaChartData;

  polarChartOptions: ChartOptions<'polarArea'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Polar Area Chart',
      },
    },
  };

  polarChartType: 'polarArea' = 'polarArea';

  constructor(private chartService: PolarAreaChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.polarChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
