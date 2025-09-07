import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface BarChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    stack: string;
  }[];
}

@Injectable({ providedIn: 'root' })
export class ChartDataService {
  public _chartData = new BehaviorSubject<BarChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [30, 50, -20, 40, 60, -10, 25],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 2',
        data: [20, -40, 35, -25, 45, 15, 30],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 3',
        data: [15, 30, -10, 20, -15, 35, -5],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        stack: 'Stack 1',
      },
    ],
  });
}
