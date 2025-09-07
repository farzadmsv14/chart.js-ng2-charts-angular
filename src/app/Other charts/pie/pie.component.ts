import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { PieChartData, PieChartService } from './pie.service';



@Component({
  selector: 'app-pie',
  imports: [CommonModule, BaseChartDirective],
  standalone: true,
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent {
  showChart = false;
  pieChartData!: PieChartData;

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Pie Chart',
      },
    },
  };

  pieChartType: 'pie' = 'pie';

  constructor(private chartService: PieChartService) {}

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.pieChartData = data;
    });
        this.showChart = !this.showChart;
  }
}
