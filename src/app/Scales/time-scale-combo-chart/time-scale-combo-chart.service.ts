import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ComboDataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  type?: 'line' | 'bar';
}

export interface ComboChartData {
  labels: string[];
  datasets: ComboDataset[];
}

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  public _chartData = new BehaviorSubject<ComboChartData>({
    labels: [
      '2025-08-20',
      '2025-08-21',
      '2025-08-22',
      '2025-08-23',
      '2025-08-24',
      '2025-08-25',
    ],
    datasets: [
      {
        type: 'line',
        label: 'Line Dataset',
        data: [10, 25, 40, 32, 48, 60],
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,0.3)',
      },
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: [5, 15, 35, 28, 50, 70],
        borderColor: 'orange',
        backgroundColor: 'rgba(255,165,0,0.5)',
      },
    ],
  });
}
