import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as _ from 'lodash';
import Highcharts = require('highcharts');

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnChanges {
  selectedSeries: number = -1;
  chart: any;
  @Input() data: number[] = [];
  @Input() data1: number[] = [];
  @Input() data2: number[] = [];
  @Input() data3: number[] = [];
  @Input() labels: string[] = [];
  @Input() showPopup = false;
  @Output() close = new EventEmitter<void>();
  @ViewChild('chartContainer') chartContainer: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data || changes.labels) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    const options: Highcharts.Options = {
      title: {
        text: '1/2 SIZE, HEAVY, FOIL STEAM TABLE PAN, HFA, 100/CASE',
      },
      xAxis: {
        categories: this.labels,
      },
      yAxis: {
        title: {
          text: 'Price',
        },
      },
      series: [
        {
          name: '12M',
          data: this.data,
          visible: true,
        },
        {
          name: '6M',
          data: this.data1,
          visible: false,
        },
        {
          name: '3M',
          data: this.data2,
          visible: false,
        },
        {
          name: '1M',
          data: this.data3,
          visible: false,
        },
        {
          name: '1D',
          data: this.data,
          visible: false,
        },
      ],
      legend: {
        enabled: true,
      },
      plotOptions: {
        series: {
          events: {
            show: function (event) {
              this.chart.series.forEach((series, i) => {
                if (i != event.target.index) {
                  series.setVisible(false);
                }
              });
            },
          },
        },
      },
    };
    this.chart = Highcharts.chart(this.chartContainer.nativeElement, options);
  }
}
