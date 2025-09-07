import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CategoryDataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
}

export interface CategoryChartData {
  labels: string[];
  datasets: CategoryDataset[];
}

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  public _chartData = new BehaviorSubject<CategoryChartData>({
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Dataset A',
        data: [12, 19, 30, 25, 40],
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,0.3)',
      },
      {
        label: 'Dataset B',
        data: [8, 15, 22, 35, 28],
        borderColor: 'red',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
    ],
  });
}
