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
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  public labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public _chartData = new BehaviorSubject<FilledLineChartData>({
    labels: this.labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [28, 48, -40, 19, 86, -27, 90],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: true,
      },
      {
        label: 'Dataset 2',
        data: [48, 28, -10, 49, 76, 27, 70],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: true,
      },
    ],
  });
}
