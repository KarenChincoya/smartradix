// app.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReportsService } from 'src/app/report/reports.service';
import { Report } from 'src/app/report/report.model';

@Component({
  selector: 'app-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.scss']
})
export class BasicChartComponent implements OnInit, OnDestroy {

  reports: Report[] = [];
  values: number[] = [1, 2, 3];
  labels: Array<any> = ['uno', 'dos', 'tres'];

  private reportsSub: Subscription;
  constructor(public reportsService: ReportsService) { }

  public chartType: string = 'line';
  //Retrieving data *****
  public chartDatasets: Array<any> = [
    { data: this.values, label: 'Nivel de humedad' }
  ];

  //hora
  public chartLabels: Array<any> = this.labels;

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  ngOnInit() {

    this.reportsService.getReports();
    this.reportsSub = this.reportsService.getReportUpdateListener()
      .subscribe((reports: Report[]) => {
        this.reports = reports;

        this.values = this.reportsService.getLastReportsHumidity();
        this.labels = this.reportsService.getLastReportsLabels();

        this.chartLabels = this.labels;
        this.chartDatasets = [{ data: this.values, label: 'Nivel de humedad' }];

        console.log('this.values = ' + this.values);
        console.log('this.labels = ' + this.labels);
      });

  }

  ngOnDestroy() {
    this.reportsSub.unsubscribe();
  }
}


