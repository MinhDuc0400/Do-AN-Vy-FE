import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { QrPageComponent } from './qr-page/qr-page.component';
const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
  },
  {
    path: 'qr/:id',
    component: QrPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule { }
