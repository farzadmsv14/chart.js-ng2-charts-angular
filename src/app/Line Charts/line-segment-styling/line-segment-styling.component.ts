import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';
import {
  LineSegmentStylingService,
  SimpleChartData,
} from './line-segment-styling.service';

@Component({
  selector: 'app-line-segment-styling',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './line-segment-styling.component.html',
  styleUrls: ['./line-segment-styling.component.css'],
})
export class LineSegmentStylingComponent {
  showChart = false;
  lineChartData!: SimpleChartData;
  lineChartType: 'line' = 'line';

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    interaction: { intersect: false },
    plugins: {
      title: {
        display: true,
        text: 'Line Chart with Segment Styling',
      },
    },
  };

  constructor(private chartService: LineSegmentStylingService) {}

  toggleChart() {
    this.chartService._chartData.subscribe((data) => {
      this.lineChartData = data;
    });
    this.showChart = !this.showChart;
  }
}

// import { Component } from '@angular/core';
// import { BaseChartDirective } from 'ng2-charts';
// import { CommonModule } from '@angular/common';
// import {
//   ChartOptions,
//   ChartConfiguration,
//   ScriptableLineSegmentContext,
//   ChartDataset,
// } from 'chart.js';

// export interface LineSegmentDataset
//   extends ChartDataset<'line', (number | null)[]> {
//   segment?: {
//     borderColor?: (ctx: ScriptableLineSegmentContext) => string | undefined;
//     borderDash?: (ctx: ScriptableLineSegmentContext) => number[] | undefined;
//   };
//   spanGaps?: boolean;
// }

// export interface LineSegmentChartData {
//   labels: string[];
//   datasets: LineSegmentDataset[];
// }

// @Component({
//   selector: 'app-line-segment-styling',
//   imports: [CommonModule, BaseChartDirective],
//   templateUrl: './line-segment-styling.component.html',
//   styleUrl: './line-segment-styling.component.css',
// })
// export class LineSegmentStylingComponent {
//   lineChartLabels: string[] = [
//     'Day 1',
//     'Day 2',
//     'Day 3',
//     'Day 4',
//     'Day 5',
//     'Day 6',
//   ];

//   lineChartData: LineSegmentChartData = {
//     labels: this.lineChartLabels,
//     datasets: [
//       {
//         label: 'Dataset',
//         data: [20, -40, NaN, -30, 90, 50],
//         borderColor: 'rgba(255, 99, 132, 1)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         spanGaps: true,
//         segment: {
//           borderColor: (ctx: ScriptableLineSegmentContext) =>
//             ctx.p0?.skip || ctx.p1?.skip
//               ? 'rgba(0,10,0,0.2)'
//               : ctx.p0.parsed.y > ctx.p1.parsed.y
//               ? 'rgba(0,12,-75,1)'
//               : undefined,
//           borderDash: (ctx: ScriptableLineSegmentContext) =>
//             ctx.p0?.skip || ctx.p1?.skip ? [6, 6] : undefined,
//         },
//         pointStyle: 'circle',
//         pointRadius: 3,
//         pointHoverRadius: 15,
//       },
//     ],
//   };

//   lineChartOptions: ChartOptions<'line'> = {
//     responsive: true,
//     interaction: { intersect: false },
//     plugins: {
//       title: {
//         display: true,
//         text: 'Line Chart with Segment Styling',
//       },
//     },
//   };

//   lineChartType: 'line' = 'line';
// }
