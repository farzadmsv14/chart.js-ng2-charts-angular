import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PieChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

@Injectable({ providedIn: 'root' })
export class PieChartService {
  public _chartData = new BehaviorSubject<PieChartData>({
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          '#FF6384',
          '#FF9F40',
          '#FFCD56',
          '#4BC0C0',
          '#36A2EB',
        ],
      },
    ],
  });
}
