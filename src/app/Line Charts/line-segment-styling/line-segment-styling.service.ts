import { Injectable } from '@angular/core';
import { ScriptableLineSegmentContext } from 'chart.js';
import { BehaviorSubject } from 'rxjs';

export interface SimpleDataset {
  label: string;
  data: (number | null)[];
  borderColor?: string;
  backgroundColor?: string;
  spanGaps?: boolean;
  segment?: {
    borderColor?: (ctx: ScriptableLineSegmentContext) => string | undefined;
    borderDash?: (ctx: ScriptableLineSegmentContext) => number[] | undefined;
  };
  pointStyle: string;
  pointRadius: number;
  pointHoverRadius: number;
}

export interface SimpleChartData {
  labels: string[];
  datasets: SimpleDataset[];
}

@Injectable({
  providedIn: 'root',
})
export class LineSegmentStylingService {
  public _chartData = new BehaviorSubject<SimpleChartData>({
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Dataset',
        data: [20, -40, NaN, -30, 90, 50],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        spanGaps: true,
        segment: {
          borderColor: (ctx: ScriptableLineSegmentContext) =>
            ctx.p0?.skip || ctx.p1?.skip
              ? 'rgba(0,10,0,0.2)'
              : ctx.p0.parsed.y > ctx.p1.parsed.y
              ? 'rgba(0,12,-75,1)'
              : undefined,
          borderDash: (ctx: ScriptableLineSegmentContext) =>
            ctx.p0?.skip || ctx.p1?.skip ? [6, 6] : undefined,
        },
        pointStyle: 'circle',
        pointRadius: 3,
        pointHoverRadius: 15,
      },
    ],
  });
}
