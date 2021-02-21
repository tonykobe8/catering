import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodspagePage } from './foodspage.page';

const routes: Routes = [
  {
    path: '',
    component: FoodspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodspagePageRoutingModule {}
