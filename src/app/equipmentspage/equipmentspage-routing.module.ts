import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentspagePage } from './equipmentspage.page';

const routes: Routes = [
  {
    path: '',
    component: EquipmentspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentspagePageRoutingModule {}
