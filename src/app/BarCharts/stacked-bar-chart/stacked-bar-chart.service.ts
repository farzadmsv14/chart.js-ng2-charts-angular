import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BarChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    borderSkipped: boolean;
  }[];
}

@Injectable({ providedIn: 'root' })
export class ChartDataService {
  public _chartData = new BehaviorSubject<BarChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [30, -50, 40, -20, 50, -10, 60],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 2,
        borderRadius: 0,
        borderSkipped: false,
      },
      {
        label: 'Dataset 2',
        data: [-40, 20, -30, 50, -10, 30, -20],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderWidth: 2,
        borderRadius: 0,
        borderSkipped: false,
      },
      {
        label: 'Dataset 3',
        data: [20, 10, -20, 30, -15, 25, -10],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderWidth: 2,
        borderRadius: 0,
        borderSkipped: false,
      },
    ],
  });
}
