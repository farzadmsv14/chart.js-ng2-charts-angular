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

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  constructor() {}

  public _chartData = new BehaviorSubject<FilledLineChartData>({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],

    datasets: [
      {
        label: 'My First dataset',
        data: [65, -59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: true,
      },
      {
        label: 'My Second dataset',
        data: [28, 48, -40, 19, 86, 27, 90],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: true,
      },
      {
        label: 'My Third dataset',
        data: [35, 29, 50, 41, 76, -65, 20],
        borderColor: 'rgba(75, 192, 75, 1)',
        backgroundColor: 'rgba(75, 192, 75, 0.5)',
        fill: true,
      },
      {
        label: 'My Fourth dataset',
        data: [45, 39, 60, 31, 66, -35, 70],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        fill: true,
      },
    ],
  });
}
