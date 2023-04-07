import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [BrowserModule, ChartModule],
  declarations: [AppComponent, ChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
