import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface DelayService {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class DelayChartService {
  private datasets = [
    {
      label: 'Dataset 1',
      data: [65, -59, 80, -81, 56, 55, 40],
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderWidth: 1,
    },
    {
      label: 'Dataset 2',
      data: [-28, 48, 40, 19, 86, 27, -90],
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      borderWidth: 1,
    },
  ];

  public _chartData = new BehaviorSubject<DelayService>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: this.datasets,
  });
}
