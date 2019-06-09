import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule, ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BasicChartComponent } from './charts/basic-chart/basic-chart.component';
import { BannerComponent } from './banner/banner.component';
import { TableComponent } from './table/table.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderMDComponent } from './headermd/headermd.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ServicesComponent } from './services/services.component';
import { EmptyComponent } from './empty/empty.component';
import { MenuComponent } from './menu/menu.component';
import { ReportCreateComponent } from './report/report-create/report-create.component';
import { ChartGeneralComponent } from './charts/general/general.component';
import { ChartHumidityComponent } from './charts/humidity/humidity.component';
import { ChartEnvHumidityComponent } from './charts/env-humidity/env-humidity.component';
import { ChartEnvTemperatureComponent } from './charts/env-temperature/env-temperature.component';
import { RouteReuseStrategy } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';
import { AuthModule } from './auth/auth.module';

import { AgmCoreModule } from '@agm/core';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { SafePipeModule } from 'safe-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicChartComponent,
    BannerComponent,
    TableComponent,
    PostCreateComponent,
    HeaderMDComponent,
    PostListComponent,
    ServicesComponent,
    EmptyComponent,
    MenuComponent,
    ReportCreateComponent,
    ChartGeneralComponent,
    ChartHumidityComponent,
    ChartEnvHumidityComponent,
    ChartEnvTemperatureComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    WavesModule,
    FormsModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    AuthModule,
    SafePipeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
