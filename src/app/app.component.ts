import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartBorderRadiusComponent } from './BarCharts/bar-chart-border-radius/bar-chart-border-radius.component';
import { FloatingBarsComponent } from './BarCharts/floating-bars/floating-bars.component';
import { HorizontalBarChartComponent } from './BarCharts/horizontal-bar-chart/horizontal-bar-chart.component';
import { StackedBarChartComponent } from './BarCharts/stacked-bar-chart/stacked-bar-chart.component';
import { StackedBarChartWithGroupsComponent } from './BarCharts/stacked-bar-chart-with-groups/stacked-bar-chart-with-groups.component';
import { VerticalBarChartComponent } from './BarCharts/vertical-bar-chart/vertical-bar-chart.component';
import { InterpolationModesComponent } from './Line Charts/interpolation-modes/interpolation-modes.component';
import { LineChartComponent } from './Line Charts/line-chart/line-chart.component';
import { MultiAxisLineChartComponent } from './Line Charts/multi-axis-line-chart/multi-axis-line-chart.component';
import { PointStylingComponent } from './Line Charts/point-styling/point-styling.component';
import { LineSegmentStylingComponent } from './Line Charts/line-segment-styling/line-segment-styling.component';
import { SteppedLineChartsComponent } from './Line Charts/stepped-line-charts/stepped-line-charts.component';
import { LineStylingComponent } from './Line Charts/line-styling/line-styling.component';
import { BubbleComponent } from './Other charts/bubble/bubble.component';
import { ComboBarLineComponent } from './Other charts/combo-bar-line/combo-bar-line.component';
import { DoughnutComponent } from './Other charts/doughnut/doughnut.component';
import { MultiSeriesPieComponent } from './Other charts/multi-series-pie/multi-series-pie.component';
import { PieComponent } from './Other charts/pie/pie.component';
import { PolarAreaComponent } from './Other charts/polar-area/polar-area.component';
import { PolarAreaCenteredPointLabelsComponent } from './Other charts/polar-area-centered-point-labels/polar-area-centered-point-labels.component';
import { RadarComponent } from './Other charts/radar/radar.component';
import { RadarSkipPointsComponent } from './Other charts/radar-skip-points/radar-skip-points.component';
import { ScatterComponent } from './Other charts/scatter/scatter.component';
import { ScatterMultiAxisComponent } from './Other charts/scatter-multi-axis/scatter-multi-axis.component';
import { StackedBarLineComponent } from './Other charts/stacked-bar-line/stacked-bar-line.component';
import { LineChartBoundariesComponent } from './Area charts/line-chart-boundaries/line-chart-boundaries.component';
import { LineChartDatasetsComponent } from './Area charts/line-chart-datasets/line-chart-datasets.component';
import { LineChartDrawTimeComponent } from './Area charts/line-chart-draw-time/line-chart-draw-time.component';
import { LineChartStackedComponent } from './Area charts/line-chart-stacked/line-chart-stacked.component';
import { RadarChartStackedComponent } from './Area charts/radar-chart-stacked/radar-chart-stacked.component';
import { LinearScaleMinMaxComponent } from './Scales/linear-scale-min-max/linear-scale-min-max.component';
import { LinearScaleSuggestedMinMaxComponent } from './Scales/linear-scale-suggested-min-max/linear-scale-suggested-min-max.component';
import { LinearScaleStepSizeComponent } from './Scales/linear-scale-step-size/linear-scale-step-size.component';
import { LineChartLogComponent } from './Scales/log-scale/log-scale.component';
import { StackedLinearCategoryComponent } from './Scales/stacked-linear-category/stacked-linear-category.component';
import { CategoryLineChartComponent } from './Scales/time-scale/time-scale.component';
import { GapLineChartComponent } from './Scales/time-scale-max-span/time-scale-max-span.component';
import { ComboLineChartComponent } from './Scales/time-scale-combo-chart/time-scale-combo-chart.component';
import { CenterPositioningComponent } from './Scale Options/center-positioning/center-positioning.component';
import { GridConfigurationComponent } from './Scale Options/grid-configuration/grid-configuration.component';
import { TickConfigurationComponent } from './Scale Options/tick-configuration/tick-configuration.component';
import { TitleConfigurationComponent } from './Scale Options/title-configuration/title-configuration.component';
import { AlignmentComponent } from './Title/alignment/alignment.component';
import { BasicComponent } from './Subtitle/basic/basic.component';
import { EventsComponent } from './Legend/events/events.component';
import { PointStyleComponent } from './Legend/point-style/point-style.component';
import { PositionComponent } from './Legend/position/position.component';
import { AlignmentandTitlePositionComponent } from './Legend/alignmentand-title-position/alignmentand-title-position.component';
import { CustomTooltipContentComponent } from './Tooltip/custom-tooltip-content/custom-tooltip-content.component';
import { ExternalTooltipChartComponent } from './Tooltip/external-htmltooltip/external-htmltooltip.component';
import { InteractionModesComponent } from './Tooltip/interaction-modes/interaction-modes.component';
import { Position2Component } from './Tooltip/position/position.component';
import { BarChartComponent } from './Scriptable Options/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './Scriptable Options/bubble-chart/bubble-chart.component';
import { LineChart2Component } from './Scriptable Options/line-chart/line-chart.component';
import { PieChartComponent } from './Scriptable Options/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './Scriptable Options/polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './Scriptable Options/radar-chart/radar-chart.component';
import { DelayComponent } from './Animations/delay/delay.component';
import { DropComponent } from './Animations/drop/drop.component';
import { LoopComponent } from './Animations/loop/loop.component';
import { ProgressiveLineComponent } from './Animations/progressive-line/progressive-line.component';
import { ChartAreaBorderComponent } from "./Plugins/chart-area-border/chart-area-border.component";
import { QuadrantsComponent } from "./Plugins/quadrants/quadrants.component";
import {DecimationChartComponent } from "./Advanced/data-decimation/data-decimation.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    BarChartBorderRadiusComponent,
    FloatingBarsComponent,
    HorizontalBarChartComponent,
    StackedBarChartComponent,
    StackedBarChartWithGroupsComponent,
    VerticalBarChartComponent,
    InterpolationModesComponent,
    LineChartComponent,
    MultiAxisLineChartComponent,
    PointStylingComponent,
    LineSegmentStylingComponent,
    SteppedLineChartsComponent,
    LineStylingComponent,
    BubbleComponent,
    ComboBarLineComponent,
    DoughnutComponent,
    MultiSeriesPieComponent,
    PieComponent,
    PolarAreaComponent,
    PolarAreaCenteredPointLabelsComponent,
    RadarComponent,
    RadarSkipPointsComponent,
    ScatterComponent,
    ScatterMultiAxisComponent,
    StackedBarLineComponent,
    LineChartBoundariesComponent,
    LineChartDatasetsComponent,
    LineChartDrawTimeComponent,
    LineChartStackedComponent,
    RadarChartStackedComponent,
    LinearScaleMinMaxComponent,
    LinearScaleSuggestedMinMaxComponent,
    LinearScaleStepSizeComponent,
    LineChartLogComponent,
    StackedLinearCategoryComponent,
    CategoryLineChartComponent,
    GapLineChartComponent,
    ComboLineChartComponent,
    CenterPositioningComponent,
    GridConfigurationComponent,
    TickConfigurationComponent,
    TitleConfigurationComponent,
    AlignmentComponent,
    BasicComponent,
    EventsComponent,
    PointStyleComponent,
    PositionComponent,
    AlignmentandTitlePositionComponent,
    CustomTooltipContentComponent,
    ExternalTooltipChartComponent,
    InteractionModesComponent,
    Position2Component,
    BarChartComponent,
    BubbleChartComponent,
    LineChart2Component,
    PieChartComponent,
    PolarAreaChartComponent,
    RadarChartComponent,
    DelayComponent,
    DropComponent,
    LoopComponent,
    ProgressiveLineComponent,
    ChartAreaBorderComponent,
    QuadrantsComponent,
    DecimationChartComponent
],
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
