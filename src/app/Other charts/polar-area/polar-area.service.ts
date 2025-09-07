import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PolarAreaChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

@Injectable({ providedIn: 'root' })
export class PolarAreaChartService {
  public _chartData = new BehaviorSubject<PolarAreaChartData>({
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
        ],
      },
    ],
  });
}
