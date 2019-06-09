import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { BasicChartComponent } from './charts/basic-chart/basic-chart.component';
import { LoginComponent } from './auth/login/login.component';
import { SingupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { EmptyComponent } from './empty/empty.component';
import { MenuComponent } from './menu/menu.component';
import { ChartGeneralComponent } from './charts/general/general.component';
import { ChartHumidityComponent } from './charts/humidity/humidity.component';
import { ChartEnvHumidityComponent } from './charts/env-humidity/env-humidity.component';
import { ChartEnvTemperatureComponent } from './charts/env-temperature/env-temperature.component';
import { ReportCreateComponent } from './report/report-create/report-create.component';
import { TableComponent } from './table/table.component';

//Routes: objects
const routes: Routes = [
  //  { path: '', component: PostListComponent, outlet: 'outlet1' },
  { path: '', component: BannerComponent, outlet: 'outlet1' },
  { path: '', component: ServicesComponent, outlet: 'outlet2' },
  { path: '', component: EmptyComponent, outlet: 'outlet3' },
  { path: '', component: EmptyComponent, outlet: 'outlet4' },
  { path: 'home', component: BannerComponent, outlet: 'outlet1' },
  { path: 'home', component: ServicesComponent, outlet: 'outlet2' },
  { path: 'home', component: EmptyComponent, outlet: 'outlet3' },
  { path: 'home', component: EmptyComponent, outlet: 'outlet4' },
  //  { path: '', component: BasicChartComponent, outlet: 'outlet2'},
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard], outlet: 'outlet1' },
  //  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, outlet: 'outlet1' },
  { path: 'login', component: EmptyComponent, outlet: 'outlet2' },
  { path: 'login', component: EmptyComponent, outlet: 'outlet3' },
  { path: 'login', component: EmptyComponent, outlet: 'outlet4' },
  { path: 'signup', component: SingupComponent, outlet: 'outlet1' },
  { path: 'signup', component: EmptyComponent, outlet: 'outlet2' },
  { path: 'signup', component: EmptyComponent, outlet: 'outlet3' },
  { path: 'signup', component: EmptyComponent, outlet: 'outlet4' },
  { path: 'createreport', component: ReportCreateComponent, outlet: 'outlet1', canActivate: [AuthGuard] },
  { path: 'createreport', component: EmptyComponent, outlet: 'outlet2', canActivate: [AuthGuard] },
  { path: 'createreport', component: EmptyComponent, outlet: 'outlet3', canActivate: [AuthGuard] },
  { path: 'createreport', component: EmptyComponent, outlet: 'outlet4', canActivate: [AuthGuard] },
  { path: 'reports', component: EmptyComponent, outlet: 'outlet1', canActivate: [AuthGuard] },
  { path: 'reports', component: EmptyComponent, outlet: 'outlet2', canActivate: [AuthGuard] },
  { path: 'reports', component: MenuComponent, outlet: 'outlet3', canActivate: [AuthGuard] },
  { path: 'reports', component: BasicChartComponent, outlet: 'outlet4', canActivate: [AuthGuard] },
  { path: 'general', component: EmptyComponent, outlet: 'outlet1', canActivate: [AuthGuard] },
  { path: 'general', component: EmptyComponent, outlet: 'outlet2', canActivate: [AuthGuard] },
  { path: 'general', component: MenuComponent, outlet: 'outlet3', canActivate: [AuthGuard] },
  { path: 'general', component: ChartGeneralComponent, outlet: 'outlet4', canActivate: [AuthGuard] },
  { path: 'humidity', component: EmptyComponent, outlet: 'outlet1', canActivate: [AuthGuard] },
  { path: 'humidity', component: EmptyComponent, outlet: 'outlet2', canActivate: [AuthGuard] },
  { path: 'humidity', component: MenuComponent, outlet: 'outlet3', canActivate: [AuthGuard] },
  { path: 'humidity', component: ChartHumidityComponent, outlet: 'outlet4', canActivate: [AuthGuard] },
  { path: 'envhumidity', component: EmptyComponent, outlet: 'outlet1', canActivate: [AuthGuard] },
  { path: 'envhumidity', component: EmptyComponent, outlet: 'outlet2', canActivate: [AuthGuard] },
  { path: 'envhumidity', component: MenuComponent, outlet: 'outlet3', canActivate: [AuthGuard] },
  { path: 'envhumidity', component: ChartEnvHumidityComponent, outlet: 'outlet4', canActivate: [AuthGuard] },
  { path: 'envtemperature', component: EmptyComponent, outlet: 'outlet1', canActivate: [AuthGuard] },
  { path: 'envtemperature', component: EmptyComponent, outlet: 'outlet2', canActivate: [AuthGuard] },
  { path: 'envtemperature', component: MenuComponent, outlet: 'outlet3', canActivate: [AuthGuard] },
  { path: 'envtemperature', component: ChartEnvTemperatureComponent, outlet: 'outlet4', canActivate: [AuthGuard] },
  { path: 'table', component: EmptyComponent, outlet: 'outlet1', canActivate: [AuthGuard] },
  { path: 'table', component: EmptyComponent, outlet: 'outlet2', canActivate: [AuthGuard] },
  { path: 'table', component: MenuComponent, outlet: 'outlet3', canActivate: [AuthGuard] },
  { path: 'table', component: TableComponent, outlet: 'outlet4', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
