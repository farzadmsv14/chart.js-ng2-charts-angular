import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: (number | null)[];
    borderColor: string;
    fill: boolean;
    cubicInterpolationMode?: 'default' | 'monotone';
    tension?: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class ChartDataService {
  public _chartData = new BehaviorSubject<LineChartData>({
    labels: Array.from({ length: 12 }, (_, i) => i.toString()),
    datasets: [
      {
        label: 'Cubic interpolation (monotone)',
        data: [0, -20, 20, 60, 60, -120, null, 180, -120, 125, 105, -110, 170],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      },
      {
        label: 'Cubic interpolation',
        data: [0, -20, 20, 60, 60, -120, null, 180, -120, 125, 105, -110, 170],
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Linear interpolation (default)',
        data: [0, -20, 20, 60, 60, -120, null, 180, -120, 125, 105, -110, 170],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  });
}
