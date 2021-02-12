import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellcomePage } from './wellcome.page';

const routes: Routes = [
  {
    path: '',
    component: WellcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellcomePageRoutingModule {}
