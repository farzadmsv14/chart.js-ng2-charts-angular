import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MyAxisTitleChartData {
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
export class TitleConfigurationService {
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

  public _chartData = new BehaviorSubject<MyAxisTitleChartData>({
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
        data: this.generateRandomData(7, 0, 100),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      },
      {
        label: 'Dataset 2',
        data: this.generateRandomData(7, 0, 100),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: false,
      },
    ],
  });
}
