import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface barChartData {
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

public _chartData = new BehaviorSubject<barChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: [
      {
        label: 'Fully Rounded',
        data: [30, -50, 40, -20, 50, -10, 60],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: 'Small Radius',
        data: [-40, 20, -30, 50, -10, 30, -20],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  });


}
