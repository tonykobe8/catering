import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipmentspagePageRoutingModule } from './equipmentspage-routing.module';

import { EquipmentspagePage } from './equipmentspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipmentspagePageRoutingModule
  ],
  declarations: [EquipmentspagePage]
})
export class EquipmentspagePageModule {}
