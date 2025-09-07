import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType, Chart, TooltipModel } from 'chart.js';
import {
  ExternalHTMLTooltipService,
  ExternalTooltipChartData,
} from './external-htmltooltip.service';

@Component({
  selector: 'app-external-htmltooltip',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './external-htmltooltip.component.html',
  styleUrl: './external-htmltooltip.component.css',
})
export class ExternalTooltipChartComponent {
  showChart = false;
  chartData!: ExternalTooltipChartData;

  chartType: 'line' = 'line';

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - External Tooltips',
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: (context) => this.externalTooltipHandler(context),
      },
    },
  };

  constructor(
    public chartService: ExternalHTMLTooltipService,
    private el: ElementRef
  ) {}

  externalTooltipHandler(context: {
    chart: Chart;
    tooltip: TooltipModel<'line'>;
  }) {
    const tooltipEl = document.getElementById('chartjs-tooltip');
    if (!tooltipEl) return;

    const tooltipModel = context.tooltip;

    if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = '0';
      return;
    }

    if (tooltipModel.body) {
      const bodyLines = tooltipModel.body.map((b) => b.lines).flat();
      tooltipEl.innerHTML = bodyLines.join('<br>');
    }

    const position = context.chart.canvas.getBoundingClientRect();
    tooltipEl.style.opacity = '1';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.left =
      position.left + window.pageXOffset + tooltipModel.caretX + 'px';
    tooltipEl.style.top =
      position.top + window.pageYOffset + tooltipModel.caretY + 'px';
    tooltipEl.style.background = 'rgba(0,0,0,0.7)';
    tooltipEl.style.color = 'white';
    tooltipEl.style.padding = '4px 8px';
    tooltipEl.style.borderRadius = '4px';
    tooltipEl.style.pointerEvents = 'none';
  }

  loadChart() {
    this.chartService._chartData.subscribe((data) => {
      this.chartData = data;
    });
    this.showChart = !this.showChart;
  }
}
