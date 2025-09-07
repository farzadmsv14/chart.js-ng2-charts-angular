import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PointStyleLineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    pointStyle: string; // circle | rect | triangle | star | cross | line | dash
    pointRadius: number;
    pointHoverRadius: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class ChartDataService {
  public _chartData = new BehaviorSubject<PointStyleLineChartData>({
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Dataset',
        data: [20, -40, 60, -30, 90, 50],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ],
  });
}
