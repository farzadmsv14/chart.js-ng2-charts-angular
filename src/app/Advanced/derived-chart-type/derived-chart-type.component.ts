import { Chart, ChartConfiguration, BubbleController } from 'chart.js';
import {
  DerivedBubbleChartData,
  DerivedChartTypeService,
} from './derived-chart-type.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

class CustomBubble extends BubbleController {
  override draw() {
    super.draw();

    const meta = this.getMeta();
    if (!meta.data.length) return;

    const pt0 = meta.data[0];
    const { x, y } = pt0.getProps(['x', 'y']);
    const { radius } = pt0.options as any;

    const ctx = this.chart.ctx;
    ctx.save();
    ctx.strokeStyle = (this.getDataset() as any).boxStrokeStyle || 'red';
    ctx.lineWidth = 1;
    ctx.strokeRect(x - radius, y - radius, 2 * radius, 2 * radius);
    ctx.restore();
  }
}

CustomBubble.id = 'derivedBubble';
CustomBubble.defaults = {
  boxStrokeStyle: 'red',
};

Chart.register(CustomBubble);

@Component({
  selector: 'app-derived-chart-type',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './derived-chart-type.component.html',
  styleUrl: './derived-chart-type.component.css',
})
export class DerivedChartTypeComponent {
  chartData: DerivedBubbleChartData | null = null;
  chartType: any = 'derivedBubble';
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Derived Chart Type',
      },
    },
  };

  showChart = false;

  constructor(private chartService: DerivedChartTypeService) {
    this.chartService.chartData$.subscribe((data) => {
      this.chartData = data;
    });
  }

  loadChart() {
    this.showChart = !this.showChart;
    this.chartService.chartData$.subscribe((data) => {
      this.chartData = data;
    });
    this.chartService.loadData();
  }
}
