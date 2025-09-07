import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MyGridLineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill?: boolean;
  }[];
}

@Injectable({ providedIn: 'root' })
export class GridConfigurationService {
  public _chartData = new BehaviorSubject<MyGridLineChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 30, 39, 20, 25, 34, -10],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      },
      {
        label: 'Dataset 2',
        data: [18, 33, 22, 19, 11, -39, 30],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: false,
      },
    ],
  });
}
