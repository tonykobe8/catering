import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipmentsPageRoutingModule } from './equipments-routing.module';

import { EquipmentsPage } from './equipments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipmentsPageRoutingModule
  ],
  declarations: [EquipmentsPage]
})
export class EquipmentsPageModule {}
