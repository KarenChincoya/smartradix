import { Component, OnInit, OnDestroy } from "@angular/core";
import { Report } from '../report/report.model';
import { Subscription } from 'rxjs';
import { ReportsService } from '../report/reports.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['sensor',
    'humidity',
    'environmentHumidity',
    'environmentTemperature',
    'date',
    'hour'];

  dataSource: Report[] = [];

  private ReportsSub: Subscription;
  constructor(public reportsService: ReportsService) { }

  ngOnInit() {
    this.reportsService.getReports();

    this.ReportsSub = this.reportsService.getReportUpdateListener()
      .subscribe((reports: Report[]) => {
        this.dataSource = reports;
      });
  }

  ngOnDestroy() {
    this.ReportsSub.unsubscribe();
  }
}
