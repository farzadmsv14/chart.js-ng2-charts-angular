import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CombinedChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    type?: 'bar' | 'line';
    order?: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class ChartDataService {
  public _chartData = new BehaviorSubject<CombinedChartData>({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'bar',
        label: 'Dataset 1',
        data: [20, -40, 60, -30, 90, 50, 10],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        order: 1,
      },
      {
        type: 'line',
        label: 'Dataset 2',
        data: [10, 30, -20, 50, -60, 70, 40],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        order: 0,
      },
    ],
  });
}
