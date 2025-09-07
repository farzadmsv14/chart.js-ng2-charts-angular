import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface ScatterChartData {
  datasets: {
    label: string;
    data: { x: number; y: number }[];
    borderColor: string;
    backgroundColor: string;
  }[];
}


@Injectable({ providedIn: 'root' })
export class ScatterChartService {
  public _chartData = new BehaviorSubject<ScatterChartData>({
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 10 },
          { x: 20, y: 30 },
          { x: 25, y: 25 },
          { x: 30, y: 40 },
          { x: 35, y: 15 },
          { x: 40, y: 50 },
        ],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [
          { x: 12, y: 22 },
          { x: 18, y: 8 },
          { x: 22, y: 28 },
          { x: 28, y: 20 },
          { x: 32, y: 35 },
          { x: 38, y: 12 },
          { x: 42, y: 45 },
        ],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
    ],
  });
}
