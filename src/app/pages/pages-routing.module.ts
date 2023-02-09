import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'in-out-list',
      loadChildren: () => import('./in-out-list/in-out-list.module')
        .then(m => m.InOutListModule),
    },
    {
      path: 'payment',
      loadChildren: () => import('./payment/payment.module')
        .then(m => m.PaymentModule),
    },
    {
      path: 'statistic',
      loadChildren: () => import('./statistic/statistic.module')
        .then(m => m.StatisticModule),
    },
    {
      path: '',
      redirectTo: 'in-out-list',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
