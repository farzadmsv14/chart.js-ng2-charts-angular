import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LegendTitleChartData {
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
export class AlignmentandTitlePositionService {
  private generateRandomData(
    count: number,
    min: number,
    max: number
  ): number[] {
    return Array.from(
      { length: count },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  }

  public _chartData = new BehaviorSubject<LegendTitleChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: [
      {
        label: 'Dataset 1',
        data: this.generateRandomData(7, -100, 100),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });
}
