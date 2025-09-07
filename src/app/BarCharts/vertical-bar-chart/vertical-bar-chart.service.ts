import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BarChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
}


@Injectable({ providedIn: 'root' })
export class ChartDataService {
  public _chartData = new BehaviorSubject<BarChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [-30, 50, -40, 20, 60, 10, 25],
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Dataset 2',
        data: [20, 40, -35, 25, 45, -15, 30],
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  });
}
