import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { PolarAreaChartService, StaticPolarChartData } from './polar-area-chart.service';
@Component({
  selector: 'app-polar-area-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './polar-area-chart.component.html',
  styleUrl: './polar-area-chart.component.css',
})
export class PolarAreaChartComponent {
  chartData!: StaticPolarChartData;
  chartType: 'polarArea' = 'polarArea';

  chartOptions: ChartOptions<'polarArea'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  constructor(private chartService: PolarAreaChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
  }
}
