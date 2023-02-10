import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';
import { QrPageComponent } from './qr-page/qr-page.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { QRCodeModule } from 'angularx-qrcode';
import { PaymentDetailComponent } from '../pages/payment/payment-detail/payment-detail.component';
import { PaymentDoneComponent } from '../pages/payment/payment-done/payment-done.component';
import { ThemeModule } from '../@theme/theme.module';


@NgModule({
  declarations: [
    BlankComponent,
    QrPageComponent,
    PaymentDetailComponent,
    PaymentDoneComponent,
  ],
  imports: [
    CommonModule,
    BlankRoutingModule,
    QRCodeModule,
    NbCardModule,
    NbButtonModule,
  ],
})
export class BlankModule { }
