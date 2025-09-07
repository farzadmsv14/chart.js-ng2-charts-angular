import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AnimatedLineChartData {
  labels: number[];
  datasets: {
    label: string;
    data: { x: number; y: number }[];
    borderColor: string;
    backgroundColor: string;
    borderWidth: number;
    pointRadius: number;
    animations?: any; 
  }[];
}

@Injectable({ providedIn: 'root' })
export class ProgressiveLineService {
  private data: { x: number; y: number }[] = [];
  private data2: { x: number; y: number }[] = [];

  constructor() {
    let prev = 100;
    let prev2 = 80;

    for (let i = 0; i < 200; i++) {
      prev += 5 - Math.random() * 10;
      this.data.push({ x: i, y: prev });

      prev2 += 5 - Math.random() * 10;
      this.data2.push({ x: i, y: prev2 });
    }
  }

  private chartData: AnimatedLineChartData = {
    labels: [],
    datasets: [
      {
        label: 'Dataset 1',
        data: this.data,
        borderColor: 'red',
        backgroundColor: 'red',
        borderWidth: 1,
        pointRadius: 2,
      },
      {
        label: 'Dataset 2',
        data: this.data2,
        borderColor: 'blue',
        backgroundColor: 'blue',
        borderWidth: 1,
        pointRadius: 2,
      },
    ],
  };

  public _chartData = new BehaviorSubject<AnimatedLineChartData>(
    this.chartData
  );
}
