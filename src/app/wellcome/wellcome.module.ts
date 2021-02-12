import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellcomePageRoutingModule } from './wellcome-routing.module';

import { WellcomePage } from './wellcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellcomePageRoutingModule
  ],
  declarations: [WellcomePage]
})
export class WellcomePageModule {}
