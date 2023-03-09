import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrePaidRoutingModule } from './pre-paid-routing.module';
import { PrePaidComponent } from './pre-paid.component';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    PrePaidComponent,
  ],
  imports: [
    CommonModule,
    PrePaidRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
})
export class PrePaidModule { }
