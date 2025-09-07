import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType, ChartEvent, LegendItem } from 'chart.js';
import { EventsService, HoverLegendPieData } from './events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  showChart = false;
  hoverLegendPieData!: HoverLegendPieData;

  hoverLegendPieOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        onHover: (evt: ChartEvent, item: LegendItem, legend) => {
          const dataset = legend.chart.data.datasets[0];
          dataset.backgroundColor = (dataset.backgroundColor as string[]).map(
            (color, index) =>
              index === item.index || color.length === 9 ? color : color + '4D'
          );
          legend.chart.update();
        },
        onLeave: (evt: ChartEvent, item: LegendItem, legend) => {
          const dataset = legend.chart.data.datasets[0];
          dataset.backgroundColor = (dataset.backgroundColor as string[]).map(
            (color) => (color.length === 9 ? color.slice(0, -2) : color)
          );
          legend.chart.update();
        },
      },
    },
  };

  hoverLegendPieType: 'pie' = 'pie';

  constructor(public chartService: EventsService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.hoverLegendPieData = data;
    });
    this.showChart = !this.showChart;
  }
}





