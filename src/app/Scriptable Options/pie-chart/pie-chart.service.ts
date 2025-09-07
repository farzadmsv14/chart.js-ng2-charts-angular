import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface StaticPieChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class PieChartService {
  private datasets = [
    {
      data: [40, 20, 25, 15],
      backgroundColor: [
        '#D60000', 
        '#F46300', 
        '#0358B6', 
        '#44DE28', 
      ],
      borderColor: ['#D60000', '#F46300', '#0358B6', '#44DE28'],
      borderWidth: 2,
    },
  ];

  public _chartData = new BehaviorSubject<StaticPieChartData>({
    labels: ['Red', 'Orange', 'Blue', 'Green'],
    datasets: this.datasets,
  });
}
