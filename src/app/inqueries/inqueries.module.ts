import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InqueriesPageRoutingModule } from './inqueries-routing.module';

import { InqueriesPage } from './inqueries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InqueriesPageRoutingModule
  ],
  declarations: [InqueriesPage]
})
export class InqueriesPageModule {}
