import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { QrPageComponent } from './qr-page/qr-page.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';
const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
  },
  {
    path: 'result/success',
    component: PaymentDoneComponent,
  },
  {
    path: 'qr/:id',
    component: QrPageComponent,
  },
  {
    path: ':id',
    component: PaymentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule { }
