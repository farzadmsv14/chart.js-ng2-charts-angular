import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import {
  MyAxisTitleChartData,
  TitleConfigurationService,
} from './title-configuration.service';

@Component({
  selector: 'app-title-configuration',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './title-configuration.component.html',
  styleUrl: './title-configuration.component.css',
})
export class TitleConfigurationComponent {
  showChart = false;
  axisTitleChartData!: MyAxisTitleChartData;

  axisTitleChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Month',
          color: '#911',
          font: {
            family: 'Comic Sans MS',
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },

          padding: {
            top: 20,
            bottom: 0,
            y: 0,
          },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
          color: '#191',
          font: {
            family: 'Times',
            size: 20,
            style: 'normal',
            lineHeight: 1.2,
          },
          padding: {
            top: 20,
            bottom: 0,
            y: 0,
          },
        },
      },
    },
  };

  axisTitleChartType: 'line' = 'line';

  constructor(public chartService: TitleConfigurationService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.axisTitleChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
