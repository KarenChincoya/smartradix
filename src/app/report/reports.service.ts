import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Report } from './report.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/reports';

@Injectable({ providedIn: 'root' })

export class ReportsService {

  constructor(private http: HttpClient, public router: Router) { }

  private reports: Report[];
  private lastReports: Report[] = [];
  private reportsUpdated = new Subject<Report[]>();

  private numberArray: number[] = [];
  private auxNumber: number[] = [];
  private textArray: Array<any> = [];
  private auxAny: Array<any> = [];

  getReports() {//http request

    this.http.get<{ message: string, reports: any }>(
      BACKEND_URL
    )
      .pipe(map((postData) => {
        return postData.reports.map(report => {
          return {
            id: report._id,
            sensor: report.sensor,
            humidity: report.humidity,
            environmentHumidity: report.environmentHumidity,
            environmentTemperature: report.environmentTemperature,
            date: report.date,
            hour: report.hour
          };
        }); //map bc _id id
      }))
      .subscribe(transformedPosts => {
        this.reports = transformedPosts;
        this.reportsUpdated.next([...this.reports]);
      });
  }

  getReportsArray() {
    console.log('getReportsArray --> ');
    console.log(this.reports);
    return [...this.reports];
  }

  getReportUpdateListener() {
    return this.reportsUpdated.asObservable();
  }

  addReport(
    sensor: number,
    humidity: number,
    environmentHumidity: number,
    environmentTemperature: number,
    date: Date,
    hour: string) {

    const report: Report = {
      id: null,
      sensor: sensor,
      humidity: humidity,
      environmentHumidity: environmentHumidity,
      environmentTemperature: environmentTemperature,
      date: date,
      hour: hour
    };

    this.http.post<{ message: string, reportId: string }>(BACKEND_URL, report)
      .subscribe((responseData) => {
        report.id = responseData.reportId;
        this.reports.push(report);
        this.reportsUpdated.next([...this.reports]);
        // this.router.navigate(['/']);
      });
  }

  getLastReportsHumidity() {

    const len = this.reports.length;
    let i = 0;
    this.numberArray = [];
    this.auxNumber = [];

    for (i = len - 1; i > (len - 13); i--) {
      this.numberArray.push(this.reports[i].humidity);
    }

    // Invertir un
    for (i = this.numberArray.length - 1; i >= 0; i--) {
      this.auxNumber.push(this.numberArray[i]);
    }

    return [...this.auxNumber];
  }

  getLastReportsEnvHumidity() {

    const len = this.reports.length;
    let i = 0;
    this.numberArray = [];
    this.auxNumber = [];

    for (i = len - 1; i > (len - 13); i--) {
      this.numberArray.push(this.reports[i].environmentHumidity);
    }

    // Invertir un
    for (i = this.numberArray.length - 1; i >= 0; i--) {
      this.auxNumber.push(this.numberArray[i]);
    }

    return [...this.auxNumber];
  }

  getLastReportsEnvTemperature() {

    const len = this.reports.length;
    let i = 0;
    this.numberArray = [];
    this.auxNumber = [];

    for (i = len - 1; i > (len - 13); i--) {
      this.numberArray.push(this.reports[i].environmentTemperature);
    }

    // Invertir un
    for (i = this.numberArray.length - 1; i >= 0; i--) {
      this.auxNumber.push(this.numberArray[i]);
    }

    return [...this.auxNumber];
  }

  getLastReportsLabels() {
    const len = this.reports.length;
    let i = 0;
    this.textArray = [];
    this.auxAny = [];

    for (i = len - 1; i > (len - 13); i--) {
      this.textArray.push(this.reports[i].hour);
    }

    // Invertir un
    for (i = this.textArray.length - 1; i >= 0; i--) {
      this.auxAny.push(this.textArray[i]);
    }

    return [...this.auxAny];
  }
}



/* = [
    {
      id: null,
      sensor: 1,
      humidity: 30,
      environment_humidity: 20,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 2,
      humidity: 40,
      environment_humidity: 40,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 3,
      humidity: 50,
      environment_humidity: 50,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 4,
      humidity: 60,
      environment_humidity: 60,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 5,
      humidity: 70,
      environment_humidity: 70,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 6,
      humidity: 80,
      environment_humidity: 80,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 7,
      humidity: 90,
      environment_humidity: 90,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 8,
      humidity: 80,
      environment_humidity: 70,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 9,
      humidity: 90,
      environment_humidity: 60,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 10,
      humidity: 70,
      environment_humidity: 70,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 11,
      humidity: 60,
      environment_humidity: 60,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 12,
      humidity: 50,
      environment_humidity: 50,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 13,
      humidity: 60,
      environment_humidity: 50,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 14,
      humidity: 70,
      environment_humidity: 20,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    },
    {
      id: null,
      sensor: 15,
      humidity: 80,
      environment_humidity: 20,
      environment_temperature: 40,
      date: '25 de abril de 2019',
      hour: '9:00'
    }
  ];
  */
