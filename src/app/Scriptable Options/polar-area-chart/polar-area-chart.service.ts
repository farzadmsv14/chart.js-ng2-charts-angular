import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface StaticPolarChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class PolarAreaChartService {
  private datasets = [
    {
      data: [30, 45, 60, 80],
      backgroundColor: ['#D60000', '#F46300', '#0358B6', '#44DE28'],
      borderColor: ['#D60000', '#F46300', '#0358B6', '#44DE28'],
      borderWidth: 2,
    },
  ];

  public _chartData = new BehaviorSubject<StaticPolarChartData>({
    labels: ['Red', 'Orange', 'Blue', 'Green'],
    datasets: this.datasets,
  });
}
