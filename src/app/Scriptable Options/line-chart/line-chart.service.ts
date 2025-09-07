import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LineChartService {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    pointStyle: ('circle' | 'rect')[];
    pointRadius: number[];
    hoverRadius: number[];
  }[];
}

@Injectable({ providedIn: 'root' })
export class StaticLineChartService {



 private datasets = [
  {
    label: 'Dataset 1',
    data: [5, 12, 20, 35, 50, 65, 80],
    borderColor: '#FF6384',
    backgroundColor: '#FF6384',
    pointStyle: ['circle', 'rect', 'circle', 'rect', 'circle', 'rect', 'circle'] as ("circle" | "rect")[],
    pointRadius: [5, 7, 9, 11, 15, 15, 15],
    hoverRadius: [10, 10, 10, 15, 15, 15, 15],
  },
  {
    label: 'Dataset 2',
    data: [10, 25, 30, 45, 55, 70, 90],
    borderColor: '#36A2EB',
    backgroundColor: '#36A2EB',
    pointStyle: ['rect', 'circle', 'rect', 'circle', 'rect', 'circle', 'rect'] as ("circle" | "rect")[],
    pointRadius: [7, 5, 9, 11, 15, 15, 12],
    hoverRadius: [10, 10, 10, 15, 15, 15, 15],
  },
];


  public _chartData = new BehaviorSubject<LineChartService>({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: this.datasets,
  });
}
