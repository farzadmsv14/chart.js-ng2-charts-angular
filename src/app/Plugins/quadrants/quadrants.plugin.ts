import { Chart } from 'chart.js';

export const quadrants = {
  id: 'quadrants',
  beforeDraw(chart: Chart, _args: any, options: any) {
    const {
      ctx,
      chartArea: { left, top, right, bottom },
      scales: { x, y },
    } = chart;

    const midX = x.getPixelForValue(0);
    const midY = y.getPixelForValue(0);

    ctx.save();
    ctx.fillStyle = options.topLeft || 'rgba(255,0,0,0.1)';
    ctx.fillRect(left, top, midX - left, midY - top);

    ctx.fillStyle = options.topRight || 'rgba(0,0,255,0.1)';
    ctx.fillRect(midX, top, right - midX, midY - top);

    ctx.fillStyle = options.bottomRight || 'rgba(0,255,0,0.1)';
    ctx.fillRect(midX, midY, right - midX, bottom - midY);

    ctx.fillStyle = options.bottomLeft || 'rgba(255,255,0,0.1)';
    ctx.fillRect(left, midY, midX - left, bottom - midY);

    ctx.restore();
  },
};
