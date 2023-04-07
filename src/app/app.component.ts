import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public showPopup = false;
  public chartData: number[] = [];
  public chartData1: number[] = [];
  public chartData2: number[] = [];
  public chartData3: number[] = [];
  public chartLabels: string[] = [];

  showChart(): void {
    this.showPopup = true;
    this.loadData(12);
  }

  hideChart(): void {
    this.showPopup = false;
  }

  loadData(months: number): void {
    const data: number[] = [];
    const data1: number[] = [];
    const data2: number[] = [];
    const data3: number[] = [];
    const labels: string[] = [];

    // Generate data for the selected time period
    const today = new Date();
    for (let i = 0; i < months; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const label = date.toLocaleDateString('en-US', { month: 'short' });
      const value = Math.round(Math.random() * 100);
      labels.unshift(label);
      data.unshift(value);
      data1.unshift(Math.round(Math.random() * 100));
      data2.unshift(Math.round(Math.random() * 100));
      data3.unshift(Math.round(Math.random() * 100));
    }

    this.chartData = data;
    this.chartData1 = data1;
    this.chartData2 = data2;
    this.chartData3 = data3;
    this.chartLabels = labels;
  }
}
