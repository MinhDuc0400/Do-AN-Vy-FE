import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrePaidComponent } from './pre-paid.component';

const routes: Routes = [
  {
    path: '',
    component: PrePaidComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrePaidRoutingModule { }
