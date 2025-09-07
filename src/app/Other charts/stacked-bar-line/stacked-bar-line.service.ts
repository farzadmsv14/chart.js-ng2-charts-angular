import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MyStackedLineBarChartData {
  labels: string[];
  datasets: MyStackedLineBarDataset[];
}

export interface MyStackedLineBarDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  type?: 'line' | 'bar';
  stack?: string;
}

@Injectable({ providedIn: 'root' })
export class StackedBarLineChartService {
  public _chartData = new BehaviorSubject<MyStackedLineBarChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        type: 'bar',
        stack: 'combined',
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        type: 'line',
        stack: 'combined',
      },
    ],
  });
}
