import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { InOutListComponent } from './in-out-list.component';
import { InOutListRoutingModule } from './in-out-list-routing.module';
import { InOutDetailComponent } from './in-out-detail/in-out-detail.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { PaymentPopupComponent } from './payment-popup/payment-popup.component';


@NgModule({
  declarations: [InOutListComponent, InOutDetailComponent, PaymentPopupComponent],
  imports: [
    CommonModule,
    MatTableModule,
    InOutListRoutingModule,
    NbCardModule,
    NbButtonModule,
  ],
})
export class InOutListModule { }
