import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecorPage } from './decor.page';

const routes: Routes = [
  {
    path: '',
    component: DecorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecorPageRoutingModule {}
