import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface RadarSkipChartData {
  labels: string[];
  datasets: {
    label: string;
    data: (number | null)[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

@Injectable({ providedIn: 'root' })
export class RadarSkipPointsService {
  private radarChartLabels: string[] = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
  ];

  private dataFirstSkip: (number | null)[] = [null, 59, 90, 81, 56, 55, 40];
  private dataMiddleSkip: (number | null)[] = [65, 59, 90, null, 56, 55, 40];
  private dataLastSkip: (number | null)[] = [65, 59, 90, 81, 56, 55, null];

  public _chartData = new BehaviorSubject<RadarSkipChartData>({
    labels: this.radarChartLabels,
    datasets: [
      {
        label: 'Skip first dataset',
        data: this.dataFirstSkip,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Skip mid dataset',
        data: this.dataMiddleSkip,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Skip last dataset',
        data: this.dataLastSkip,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  });
}
