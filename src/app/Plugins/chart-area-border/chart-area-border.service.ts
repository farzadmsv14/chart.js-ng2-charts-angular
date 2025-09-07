// static-chart-area-border.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ChartAreaBorderChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

@Injectable({ providedIn: 'root' })
export class ChartAreaBorderService {
  private labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  private chartData: ChartAreaBorderChartData = {
    labels: this.labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Array.from({ length: 7 }, () =>
          Math.floor(Math.random() * 200 - 100)
        ),
        borderColor: 'red',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
      {
        label: 'Dataset 2',
        data: Array.from({ length: 7 }, () =>
          Math.floor(Math.random() * 200 - 100)
        ),
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,0.3)',
      },
    ],
  };

  public _chartData = new BehaviorSubject<ChartAreaBorderChartData>(
    this.chartData
  );
}
