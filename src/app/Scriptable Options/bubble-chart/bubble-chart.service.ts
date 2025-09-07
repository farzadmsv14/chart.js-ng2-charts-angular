import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface StaticBubbleChartData {
  datasets: {
    label: string;
    data: {
      x: number;
      y: number;
      v: number;
      backgroundColor: string;
      borderColor: string;
      radius: number;
      borderWidth: number;
    }[];
  }[];
}

@Injectable({ providedIn: 'root' })
export class BubbleChartService {
  private datasets = [
    {
      label: 'Dataset 1',
      data: [
        {
          x: 15,
          y: 10,
          v: 200,
          backgroundColor: 'rgba(250,0,0,0.1)',
          borderColor: 'rgba(250,0,0,1)',
          radius: 10,
          borderWidth: 1,
        },
        {
          x: 15,
          y: 20,
          v: 400,
          backgroundColor: 'rgba(150,50,50,0.2)',
          borderColor: 'rgba(150,50,50,1)',
          radius: 20,
          borderWidth: 2,
        },
        {
          x: 30,
          y: -10,
          v: 300,
          backgroundColor: 'rgba(50,150,150,0.3)',
          borderColor: 'rgba(50,150,150,1)',
          radius: 15,
          borderWidth: 3,
        },
        {
         x: -30,
          y: -70,
          v: 600,
          backgroundColor: 'rgba(0,250,250,0.5)',
          borderColor: 'rgba(0,250,250,1)',
          radius: 25,
          borderWidth: 4,
        },
      ],
    },
  ];

  public _chartData = new BehaviorSubject<StaticBubbleChartData>({
    datasets: this.datasets,
  });
}


