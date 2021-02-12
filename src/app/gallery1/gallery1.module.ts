import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gallery1PageRoutingModule } from './gallery1-routing.module';

import { Gallery1Page } from './gallery1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gallery1PageRoutingModule
  ],
  declarations: [Gallery1Page]
})
export class Gallery1PageModule {}
