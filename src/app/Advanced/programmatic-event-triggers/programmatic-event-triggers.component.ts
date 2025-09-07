import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { ProgrammaticEventTriggersService } from './programmatic-event-triggers.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-programmatic-event-triggers',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './programmatic-event-triggers.component.html',
  styleUrl: './programmatic-event-triggers.component.css',
})
export class ProgrammaticEventTriggersComponent {
  chartData: ChartData | null = null;
  chartType: ChartConfiguration['type'] = 'bar';
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };
  showChart = false;

  constructor(private chartService: ProgrammaticEventTriggersService) {}

  loadChart() {
    this.chartService.chartData$.subscribe((data) => {
      this.chartData = data;
    });
    this.showChart = !this.showChart;
  }
}
