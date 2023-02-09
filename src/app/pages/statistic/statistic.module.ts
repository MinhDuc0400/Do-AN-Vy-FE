import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticComponent } from './statistic.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ProfitComponent } from './profit/profit.component';


@NgModule({
  declarations: [
    StatisticComponent,
    VehicleComponent,
    ProfitComponent
  ],
  imports: [
    CommonModule,
    StatisticRoutingModule
  ]
})
export class StatisticModule { }
