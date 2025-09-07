import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface StaticAnimatedLineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
    tension?: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class DropService {
  private datasets = [
    {
      label: 'Dataset 1',
      data: [70, 25, 35, 50, 65, 80, 20],
      borderColor: '#FF6384',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Dataset 2',
      data: [5, 20, 30, 15, 55, 8, 85],
      borderColor: '#36A2EB',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ];

  public _chartData = new BehaviorSubject<StaticAnimatedLineChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: this.datasets,
  });
}
