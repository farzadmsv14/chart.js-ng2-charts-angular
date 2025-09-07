// static-decimation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LargeDataset {
  datasets: {
    label: string;
    data: { x: number; y: number }[];
    borderColor: string;
    borderWidth: number;
    radius: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class DataDecimationService {
  
  private generateLargeDataset(): LargeDataset {
    const NUM_POINTS = 10000;
    const start = new Date('2021-04-01T00:00:00Z').getTime();
    const pointData: { x: number; y: number }[] = [];

    for (let i = 0; i < NUM_POINTS; i++) {
      const max = Math.random() < 0.001 ? 100 : 20;
      pointData.push({
        x: start + i * 30000,
        y: Math.floor(Math.random() * max),
      });
    }

    return {
      datasets: [
        {
          label: 'Large Dataset',
          data: pointData,
          borderColor: 'red',
          borderWidth: 1,
          radius: 0,
        },
      ],
    };
  }

  private chartData = this.generateLargeDataset();
  public _chartData = new BehaviorSubject<LargeDataset>(this.chartData);
}
