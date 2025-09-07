import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LineChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  fill?: boolean;
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
        label: 'Dataset 1',
        data: [35, -40, 32, 38, 45, 48, 42],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      },
      {
        label: 'Dataset 2',
        data: [33, 37, 30, 35, 41, -46, 40],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: false,
      },
    ],
  });
}
