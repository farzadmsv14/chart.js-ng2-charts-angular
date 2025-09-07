import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BubbleChartData {
  datasets: {
    label: string;
    data: { x: number; y: number; r: number }[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

@Injectable({ providedIn: 'root' })
export class ChartDataService {
  public _chartData = new BehaviorSubject<BubbleChartData>({
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: 20, y: 30, r: 10 },
          { x: 40, y: 10, r: 15 },
          { x: 30, y: 70, r: 8 },
        ],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [
          { x: 60, y: 40, r: 12 },
          { x: 70, y: 90, r: 20 },
          { x: 50, y: 50, r: 6 },
        ],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
    ],
  });
}
