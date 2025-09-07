import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import { MyTickConfigChartData, TickConfigurationService } from './tick-configuration.service';

@Component({
  selector: 'app-tick-configuration',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
    templateUrl: './tick-configuration.component.html',
  styleUrl: './tick-configuration.component.css'
})
export class TickConfigurationComponent {


  showChart = false;
  tickChartData!: MyTickConfigChartData;

  tickChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart with Tick Configuration',
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function (val, index) {
            // @ts-ignore
            return index % 2 === 0 ? this.getLabelForValue(val) : '';
          },
          color: 'red',
        },
      },
    },
  };

  tickChartType: 'line' = 'line';

  constructor(public chartService: TickConfigurationService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.tickChartData = data;
    });
    this.showChart = !this.showChart;
  }
}
