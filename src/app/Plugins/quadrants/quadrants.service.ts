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
export class QuadrantsService {
  private generatePoints(count: number, min: number, max: number) {
    const points: { x: number; y: number }[] = [];
    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.floor(Math.random() * (max - min + 1)) + min,
        y: Math.floor(Math.random() * (max - min + 1)) + min,
      });
    }
    return points;
  }

  private chartData: ScatterChartData = {
    datasets: [
      {
        label: 'Dataset 1',
        data: this.generatePoints(7, -100, 100),
        borderColor: 'red',
        backgroundColor: 'rgba(255,0,0,0.5)',
      },
      {
        label: 'Dataset 2',
        data: this.generatePoints(7, -100, 100),
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,0.5)',
      },
    ],
  };

  public _chartData = new BehaviorSubject<ScatterChartData>(this.chartData);
}
