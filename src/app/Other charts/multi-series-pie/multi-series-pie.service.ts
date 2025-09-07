import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MultiDatasetPieChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}

@Injectable({ providedIn: 'root' })
export class MultiSeriesPieService {
  public _chartData = new BehaviorSubject<MultiDatasetPieChartData>({
    labels: [
      'Overall Yay',
      'Overall Nay',
      'Group A Yay',
      'Group A Nay',
      'Group B Yay',
      'Group B Nay',
      'Group C Yay',
      'Group C Nay',
    ],
    datasets: [
      {
        backgroundColor: ['#AAA', '#777'],
        data: [21, 79],
      },
      {
        backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
        data: [33, 67],
      },
      {
        backgroundColor: ['hsl(100, 100%, 60%)', 'hsl(100, 100%, 35%)'],
        data: [20, 80],
      },
      {
        backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
        data: [10, 90],
      },
    ],
  });
}
