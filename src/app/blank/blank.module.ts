import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';
import { QrPageComponent } from './qr-page/qr-page.component';
import { NbCardModule } from '@nebular/theme';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    BlankComponent,
    QrPageComponent,
  ],
  imports: [
    CommonModule,
    BlankRoutingModule,
    NbCardModule,
    QRCodeModule,
  ],
})
export class BlankModule { }
