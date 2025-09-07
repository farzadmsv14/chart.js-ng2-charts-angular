import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface StaticColorBarChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class BarChartService {
  DATA_COUNT = 7;

  private data = [45, -30, 60, -10, 80, 0, 55];

  private backgroundColors = [
    '#0358B6',
    '#F46300',
    '#0358B6',
    '#F46300',
    '#44DE28',
    '#0358B6',
    '#44DE28',
  ];

  private borderColors = [
    '#0358B6',
    '#F46300',
    '#F46300',
    '#0358B6',
    '#44DE28',
    '#44DE28',
    '#0358B6',
  ];

  public _chartData = new BehaviorSubject<StaticColorBarChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: [
      {
        data: this.data,
        backgroundColor: this.backgroundColors,
        borderColor: this.borderColors,
        borderWidth: 2,
      },
    ],
  });
}
