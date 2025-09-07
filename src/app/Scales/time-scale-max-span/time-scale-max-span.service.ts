import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface GapDataset {
  label: string;
  data: (number | null)[];
  borderColor?: string;
  backgroundColor?: string;
  spanGaps?: boolean | number;
}

export interface GapChartData {
  labels: string[];
  datasets: GapDataset[];
}

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  public _chartData = new BehaviorSubject<GapChartData>({
    labels: [
      '2025-08-20',
      '2025-08-21',
      '2025-08-22',
      '2025-08-23',
      '2025-08-24',
      '2025-08-25',
    ],
    datasets: [
      {
        label: 'Dataset with Gaps',
        data: [10, 20, null, null, 45, 60],
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,0.3)',
        spanGaps: false,
      },
    ],
  });
}
