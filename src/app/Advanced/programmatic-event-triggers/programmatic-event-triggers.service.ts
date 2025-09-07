import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  hoverBorderWidth?: number;
  hoverBorderColor?: string;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

@Injectable({
  providedIn: 'root',
})
export class ProgrammaticEventTriggersService {
  private _chartData = new BehaviorSubject<ChartData>({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, -20, 30, -40, 50, -60, 70],
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        hoverBorderWidth: 5,
        hoverBorderColor: 'green',
      },
      {
        label: 'Dataset 2',
        data: [-15, 25, -35, 45, -55, 65, -75],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        hoverBorderWidth: 5,
        hoverBorderColor: 'green',
      },
    ],
  });

  public chartData$ = this._chartData.asObservable();
}
