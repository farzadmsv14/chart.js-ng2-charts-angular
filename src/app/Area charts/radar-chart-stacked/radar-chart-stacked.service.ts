import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface RadarChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  fill?: boolean | number | string | { value: number };
  hidden?: boolean;
}

export interface RadarChartData {
  labels: string[];
  datasets: RadarChartDataset[];
}

@Injectable({
  providedIn: 'root',
})
export class RadarChartDataService {
  public _chartData = new BehaviorSubject<RadarChartData>({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'D0',
        data: [12, 19, 3, 5, 2, 3, 9, 15],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'D1',
        data: [8, 15, 7, 12, 4, 6, 10, 9],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: -1,
      },
      {
        label: 'D2',
        data: [5, 9, 13, 7, 8, 6, 11, 14],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        fill: 1,
      },
    ],
  });
}
