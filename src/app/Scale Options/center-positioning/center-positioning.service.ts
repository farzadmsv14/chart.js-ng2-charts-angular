import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MyScatterChartData {
  datasets: {
    label: string;
    data: { x: number; y: number }[];
    borderColor: string;
    backgroundColor: string;
    fill?: boolean;
  }[];
}

@Injectable({ providedIn: 'root' })
export class CenterPositioningService {
  private randomPoints(count: number, min: number, max: number) {
    return Array.from({ length: count }, () => ({
      x: Math.floor(Math.random() * (max - min + 1)) + min,
      y: Math.floor(Math.random() * (max - min + 1)) + min,
    }));
  }

  public _chartData = new BehaviorSubject<MyScatterChartData>({
    datasets: [
      {
        label: 'Dataset 1',
        data: this.randomPoints(6, -100, 100),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      },
      {
        label: 'Dataset 2',
        data: this.randomPoints(6, -100, 100),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: false,
      },
    ],
  });
}
