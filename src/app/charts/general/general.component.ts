import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReportsService } from 'src/app/report/reports.service';
import { Report } from 'src/app/report/report.model';

@Component({
  selector: 'app-general-chart',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class ChartGeneralComponent implements OnInit, OnDestroy {

  reports: Report[] = [];
  humidity: number[] = [1, 2, 3];
  envHumidity: number[] = [1, 2, 3];
  envTemperature: number[] = [1, 2, 3];
  labels: Array<any> = ['uno', 'dos', 'tres'];

  private reportsSub: Subscription;
  constructor(public reportsService: ReportsService) { }

  public chartType: string = 'line';

  //Retrieving data *****
  public chartDatasets: Array<any> = [
    { data: this.humidity, label: '% Nivel de humedad' },
    { data: this.envHumidity, label: '% Nivel de humedad del ambiente' },
    { data: this.envTemperature, label: 'Nivel de temperatura del ambiente' }
  ];

  //hora
  public chartLabels: Array<any> = this.labels;

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(163, 226, 181, .2)',
      borderColor: 'rgba(28, 135, 78, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(175, 107, 108, .2)',
      borderColor: 'rgba(211, 25, 53, .7)',
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

        this.envHumidity = this.reportsService.getLastReportsEnvHumidity();
        this.humidity = this.reportsService.getLastReportsHumidity();
        this.envTemperature = this.reportsService.getLastReportsEnvTemperature();

        this.labels = this.reportsService.getLastReportsLabels();

        this.chartLabels = this.labels;

        this.chartDatasets = [
          { data: this.humidity, label: 'Nivel de humedad' },
          { data: this.envHumidity, label: 'Nivel de humedad del ambiente' },
          { data: this.envTemperature, label: 'Nivel de temperatura del ambiente' }
        ];

        console.log('this.values = ' + this.humidity);
        console.log('this.labels = ' + this.labels);
      });

  }

  ngOnDestroy() {
    this.reportsSub.unsubscribe();
  }
}
