import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gallery1Page } from './gallery1.page';

const routes: Routes = [
  {
    path: '',
    component: Gallery1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gallery1PageRoutingModule {}
