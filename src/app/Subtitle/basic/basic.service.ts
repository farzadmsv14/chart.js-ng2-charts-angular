import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BasicService {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill?: boolean;
  }[];
}

@Injectable({ providedIn: 'root' })
export class SimpleTitleChartService {
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

  public _chartData = new BehaviorSubject<BasicService>({
    labels: [
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: this.generateRandomData(7, -100, 100),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      },
    ],
  });
}
