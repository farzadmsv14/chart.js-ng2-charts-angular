import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface FilledLineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill?: boolean;
    borderDash?: number[];
    tension?: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class ChartDataService {
  public _chartData = new BehaviorSubject<FilledLineChartData>({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Unfilled',
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        data: [20, -10, 40, 50, -20, 30, 60],
      },
      {
        label: 'Dashed',
        fill: false,
        backgroundColor: 'rgba(75, 192, 75, 0.5)',
        borderColor: 'rgba(75, 192, 75, 1)',
        borderDash: [5, 5],
        data: [10, 30, -40, 60, 80, -20, 40],
      },
      {
        label: 'Filled',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: [50, 20, -30, 70, 40, 60, -10],
        fill: true,
      },
    ],
  });
}
