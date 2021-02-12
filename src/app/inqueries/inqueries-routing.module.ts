import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InqueriesPage } from './inqueries.page';

const routes: Routes = [
  {
    path: '',
    component: InqueriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InqueriesPageRoutingModule {}
