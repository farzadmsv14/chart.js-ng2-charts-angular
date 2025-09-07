// chart-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill?: string | number;
    hidden?: boolean;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  private labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  private generateData(count: number = 7, min: number = 0, max: number = 100) {
    return Array.from(
      { length: count },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  }

  public _chartData = new BehaviorSubject<LineChartData>({
    labels: this.labels,
    datasets: [
      {
        label: 'D0',
        data: this.generateData(),
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255,99,132,0.5)',
        hidden: true,
      },
      {
        label: 'D1',
        data: this.generateData(),
        borderColor: '#FF9F40',
        backgroundColor: 'rgba(255,159,64,0.5)',
        fill: '-1',
      },
      {
        label: 'D2',
        data: this.generateData(),
        borderColor: '#FFCD56',
        backgroundColor: 'rgba(255,205,86,0.5)',
        hidden: true,
        fill: 1,
      },
      {
        label: 'D3',
        data: this.generateData(),
        borderColor: '#4BC0C0',
        backgroundColor: 'rgba(75,192,192,0.5)',
        fill: '-1',
      },
    ],
  });
}
