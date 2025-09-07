import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TooltipPositionChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill?: boolean;
    borderColor: string;
    backgroundColor: string;
  }[];
}

@Injectable({ providedIn: 'root' })
export class PositionService {
  private generateRandomData(
    count: number,
    min: number,
    max: number
  ): number[] {
    return Array.from({ length: count }, () =>
      Math.floor(Math.random() * (max - min + 1))
    );
  }

  public _chartData = new BehaviorSubject<TooltipPositionChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: [
      {
        label: 'Dataset 1',
        data: this.generateRandomData(7, -100, 100),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: this.generateRandomData(7, -100, 400),
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  });
}
