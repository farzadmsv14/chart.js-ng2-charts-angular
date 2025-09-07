import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface ScatterMultiAxisChartData {
  datasets: {
    label: string;
    data: { x: number; y: number }[];
    borderColor: string;
    backgroundColor: string;
    yAxisID: string;
  }[];
}

@Injectable({ providedIn: 'root' })
export class ScatterMultiAxisChartService {
      public _chartData = new BehaviorSubject<ScatterMultiAxisChartData>({
    
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: -80, y: 10 },
          { x: -60, y: 20 },
          { x: -40, y: 15 },
          { x: -20, y: 25 },
          { x: 0, y: 30 },
          { x: 20, y: 35 },
          { x: 40, y: 40 },
        ],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Dataset 2',
        data: [
          { x: 80, y: 50 },
          { x: 60, y: 40 },
          { x: 40, y: 45 },
          { x: 20, y: 35 },
          { x: 0, y: 30 },
          { x: 20, y: 25 },
          { x: 40, y: 20 },
        ],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        yAxisID: 'y2',
      },
    ],
  });
}

