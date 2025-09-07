import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface StaticHoverLineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    pointRadius: number;
    pointHoverRadius: number;
    pointHoverBackgroundColor: string;
    tension: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class LoopService {
  private datasets = [
    {
      label: 'Dataset 1',
      data: [5, 55, 25, 35, 15, 55, 35],
      borderColor: '#FF6384',
      backgroundColor: 'rgba(255,99,132,0.2)',
      pointRadius: 6,
      pointHoverRadius: 12,
      pointHoverBackgroundColor: 'yellow',
      tension: 0.4,
    },
    {
      label: 'Dataset 2',
      data: [10, 50, 30, 10, 50, 30, 70],
      borderColor: '#36A2EB',
      backgroundColor: 'rgba(54,162,235,0.2)',
      pointRadius: 6,
      pointHoverRadius: 12,
      pointHoverBackgroundColor: 'yellow',
      tension: 0.6,
    },
  ];

  public _chartData = new BehaviorSubject<StaticHoverLineChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: this.datasets,
  });
}
