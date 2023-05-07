import { NgModule } from '@angular/core';


import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { DashboarRoutingModule } from './dashboar-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    MaterialModule,
    ChartModule,
    DashboarRoutingModule
  ]
})
export class DashboarModule { }
