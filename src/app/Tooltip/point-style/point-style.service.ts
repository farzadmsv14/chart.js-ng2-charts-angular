import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PointStyleChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill?: boolean;
    borderColor: string;
    backgroundColor: string;
    pointStyle: 'circle' | 'triangle' | 'star';
    pointRadius: number;
  }[];
}

@Injectable({ providedIn: 'root' })
export class PointStyleService {
  private generateRandomData(
    count: number,
    min: number,
    max: number
  ): number[] {
    return Array.from({ length: count }, () =>
      Math.floor(Math.random() * (max - min + 1))
    );
  }

  public _chartData = new BehaviorSubject<PointStyleChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: [
      {
        label: 'Triangles',
        data: this.generateRandomData(7, -100, 100),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointStyle: 'triangle',
        pointRadius: 6,
      },
      {
        label: 'Circles',
        data: this.generateRandomData(7, -100, 100),
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        pointStyle: 'circle',
        pointRadius: 6,
      },
      {
        label: 'Stars',
        data: this.generateRandomData(7, -100, 100),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        pointStyle: 'star',
        pointRadius: 6,
      },
    ],
  });
}
