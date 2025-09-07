import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BubblePoint {
  x: number;
  y: number;
  r: number;
}

export interface DerivedBubbleDataset {
  label: string;
  data: BubblePoint[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  boxStrokeStyle: string;
}

export interface DerivedBubbleChartData {
  datasets: DerivedBubbleDataset[];
}

@Injectable({
  providedIn: 'root',
})
export class DerivedChartTypeService {
  private _chartData = new BehaviorSubject<DerivedBubbleChartData | null>(null);
  chartData$ = this._chartData.asObservable();

  loadData() {
    this._chartData.next({
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          boxStrokeStyle: 'red',
          data: [
            { x: -20, y: 30, r: 10 },
            { x: 40, y: -15, r: 15 },
            { x: 60, y: 50, r: 12 },
            { x: -40, y: -30, r: 8 },
            { x: 80, y: 70, r: 18 },
            { x: -60, y: 10, r: 6 },
            { x: 20, y: -50, r: 14 },
          ],
        },
      ],
    });
  }
}
