import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { PolarAreaCenteredPointLabelsService, PolarAreaChartData } from './polar-area-centered-point-labels.service';



@Component({
  selector: 'app-polar-area-centered-point-labels',
  imports: [CommonModule, BaseChartDirective],
  standalone: true,
  templateUrl: './polar-area-centered-point-labels.component.html',
  styleUrls: ['./polar-area-centered-point-labels.component.css'],
})
export class PolarAreaCenteredPointLabelsComponent {
  showChart = false;
  polarChartData!: PolarAreaChartData;

  polarChartOptions: ChartOptions<'polarArea'> = {
    responsive: true,
    scales: {
      r: {
        pointLabels: {
          display: true,
          centerPointLabels: true,
          font: { size: 18 },
        },
      },
    },
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Chart.js Polar Area Chart With Centered Point Labels',
      },
    },
  };

  polarChartType: 'polarArea' = 'polarArea';

  constructor(private chartService: PolarAreaCenteredPointLabelsService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.polarChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
