import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.scss']
})
export class ReportCreateComponent {

  constructor(public reportService: ReportsService) {}

  onCreate(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log('Fecha en .ts: ' + form.value.picker);

    this.reportService.addReport(
      form.value.sensor,
      form.value.humidity,
      form.value.environmentHumidity,
      form.value.environmentTemperature,
      form.value.picker,
      form.value.hour
    );

    //  this.postsService.addPost(form.value.title, form.value.content);

    //form.resetForm();
  }
}
