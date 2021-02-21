import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecorpagePage } from './decorpage.page';

const routes: Routes = [
  {
    path: '',
    component: DecorpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecorpagePageRoutingModule {}
