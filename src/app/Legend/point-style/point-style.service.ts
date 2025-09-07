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
    borderWidth?: number;
    pointStyle?: string;
    pointRadius?: number;
    pointBorderColor?: string;
  }[];
}

@Injectable({ providedIn: 'root' })
export class PointStyleService {
  private generateRandomData(count: number, min: number, max: number): number[] {
    return Array.from({ length: count }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  }

  public _chartData = new BehaviorSubject<PointStyleChartData>({
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
    datasets: [
      {
        label: 'Dataset 1',
        data: this.generateRandomData(7, -100, 100),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1,
        pointStyle: 'star',
        pointRadius: 5,
        pointBorderColor: 'rgb(0, 0, 0)',
      },
            {
        label: 'Dataset 1',
        data: this.generateRandomData(7, -100, 100),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1,
        pointStyle: 'rectRot',
        pointRadius: 5,
        pointBorderColor: 'rgb(0, 0, 0)',
      },
            {
        label: 'Dataset 1',
        data: this.generateRandomData(7, -100, 100),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1,
        pointStyle: 'circle',
        pointRadius: 5,
        pointBorderColor: 'rgb(0, 0, 0)',
      },
    ],
  });
}



