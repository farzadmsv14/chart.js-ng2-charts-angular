import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PolarGradientChartDataset {
  data: number[];
  backgroundColor?: (ctx: any) => CanvasGradient | string;
}

export interface PolarGradientChartData {
  labels: string[];
  datasets: PolarGradientChartDataset[];
}

@Injectable({ providedIn: 'root' })
export class RadialGradientService {
  private cache = new Map<string, CanvasGradient>();
  private width = 0;
  private height = 0;

  private colors = ['red', 'blue', 'green', 'orange', 'purple', 'teal'];

  private createRadialGradient3(
    context: any,
    c1: string,
    c2: string,
    c3: string
  ): CanvasGradient {
    const chartArea = context.chart.chartArea;

    const ctx = context.chart.ctx;

    if (!chartArea) {
      const fallback = ctx.createLinearGradient(0, 0, 0, 100);
      fallback.addColorStop(0, c1);
      fallback.addColorStop(1, c3);
      return fallback;
    }

    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;

    if (this.width !== chartWidth || this.height !== chartHeight) {
      this.cache.clear();
    }

    const key = c1 + c2 + c3;
    let gradient!: any;

    gradient = this.cache.get(key);

    if (!gradient) {
      this.width = chartWidth;
      this.height = chartHeight;

      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;
      const r = Math.min(chartWidth / 2, chartHeight / 2);

      gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        r
      );
      gradient.addColorStop(0, c1);
      gradient.addColorStop(0.5, c2);
      gradient.addColorStop(1, c3);

      this.cache.set(key, gradient);
    }

    return gradient;
  }

  private chartData: PolarGradientChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [30, 90, 50, 70, 20, 100, 60, 40, 80],
        backgroundColor: (context: any) => {
          const base = this.colors[context.dataIndex % this.colors.length];
          const gradient = this.createRadialGradient3(
            context,
            base,
            'white',
            base
          );

          console.log(gradient ? gradient : base);

          return gradient ? gradient : base;
        },
      },
    ],
  };

  public _chartData = new BehaviorSubject<PolarGradientChartData>(
    this.chartData
  );
}
