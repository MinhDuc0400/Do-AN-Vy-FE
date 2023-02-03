import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank.component';
import { QrPageComponent } from './qr-page/qr-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
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
export class BlankRoutingModule { }
