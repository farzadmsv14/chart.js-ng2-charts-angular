import { Injectable } from '@angular/core';
import { SteppedLineChartData } from './stepped-line-charts.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChartDataService {
  public _chartData = new BehaviorSubject<SteppedLineChartData>({
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Dataset',
        data: [20, -40, 60, -30, 90, 50],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
        stepped: true, // یا "before" | "after" | "middle"
      },
    ],
  });
}
