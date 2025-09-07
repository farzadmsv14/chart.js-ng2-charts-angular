import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LineChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  fill?: boolean;
  borderDash?: number[];
}

export interface LineChartData {
  labels: string[];
  datasets: LineChartDataset[];
}

@Injectable({
  providedIn: 'root',
})
export class LineChartDataService {
  public _chartData = new BehaviorSubject<LineChartData>({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Unfilled',
        data: [20, 40, 35, 50, 30, 60, 45],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: false,
      },
      {
        label: 'Dashed',
        data: [10, 30, 25, 40, 20, 50, 35],
        borderColor: 'rgba(75, 192, 75, 1)',
        backgroundColor: 'rgba(75, 192, 75, 0.5)',
        borderDash: [5, 5],
        fill: false,
      },
      {
        label: 'Filled',
        data: [30, 50, 45, 60, 40, 70, 55],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: true,
      },
    ],
  });
}
