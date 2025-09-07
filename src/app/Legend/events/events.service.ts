import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface HoverLegendPieData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderWidth: number;
    backgroundColor: string[];
  }[];
}

@Injectable({ providedIn: 'root' })
export class EventsService {
  public _chartData = new BehaviorSubject<HoverLegendPieData>({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: [
          '#CB4335',
          '#1F618D',
          '#F1C40F',
          '#27AE60',
          '#884EA0',
          '#D35400',
        ],
      },
    ],
  });
}
