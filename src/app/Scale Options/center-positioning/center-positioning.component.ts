import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import { MyScatterChartData } from './center-positioning.service';
import { ScatterChartService } from '../../Other charts/scatter/scatter.service';

@Component({
  selector: 'app-center-positioning',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
    templateUrl: './center-positioning.component.html',
  styleUrl: './center-positioning.component.css'
})
export class CenterPositioningComponent {

  showChart = false;
  scatterChartData!: MyScatterChartData
  ;

  scatterChartOptions: ChartOptions<'scatter'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Axis Center Positioning',
      },
    },
    scales: {
      x: {
        min: -100,
        max: 100,
      },
      y: {
        min: -100,
        max: 100,
      },
    },
  };

  scatterChartType: 'scatter' = 'scatter';

  constructor(public chartService: ScatterChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.scatterChartData = data;
    });
    this.showChart = !this.showChart;
  }
}







