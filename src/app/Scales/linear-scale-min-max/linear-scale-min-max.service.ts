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
        data: [12, 75, 30, 20, 60, 35, 45],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      },
      {
        label: 'Dataset 2',
        data: [65, 20, 25, 30, 35, 40, 70],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: false,
      },
    ],
  });
}
