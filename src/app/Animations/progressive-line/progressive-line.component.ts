import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import {
  AnimatedLineChartData,
  ProgressiveLineService,
} from './progressive-line.service';

@Component({
  selector: 'app-progressive-line',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './progressive-line.component.html',
  styleUrl: './progressive-line.component.css',
})
export class ProgressiveLineComponent {
  chartData!: AnimatedLineChartData;
  chartType: 'line' = 'line';
  showChart = false;

  constructor(private chartService: ProgressiveLineService) {}

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { type: 'linear' },
    },
  };

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      const totalDuration = 5000;
      const easing = (t: number) => 1 - Math.pow(1 - t, 2);
      const duration = (ctx: any) =>
        (easing(ctx.index / data.datasets[0].data.length) * totalDuration) /
        data.datasets[0].data.length;
      const delay = (ctx: any) =>
        easing(ctx.index / data.datasets[0].data.length) * totalDuration;

      data.datasets.forEach((ds, datasetIndex) => {
        ds.animations = {
          x: {
            type: 'number',
            easing: 'linear',
            duration,
            from: NaN,
            delay(ctx: any) {
              if (ctx.type !== 'data' || ctx.xStarted) return 0;
              ctx.xStarted = true;
              return delay(ctx);
            },
          },
          y: {
            type: 'number',
            easing: 'linear',
            duration,
            from: (ctx: any) =>
              ctx.index === 0
                ? ctx.chart.scales.y.getPixelForValue(100)
                : (
                    ctx.chart.getDatasetMeta(datasetIndex).data[
                      ctx.index - 1
                    ] as any
                  ).getProps(['y'], true).y,
            delay(ctx: any) {
              if (ctx.type !== 'data' || ctx.yStarted) return 0;
              ctx.yStarted = true;
              return delay(ctx);
            },
          },
        };
      });

      this.chartData = data;
    });
    this.showChart = !this.showChart;
  }
}
