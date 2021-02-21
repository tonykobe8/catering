import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodspagePageRoutingModule } from './foodspage-routing.module';

import { FoodspagePage } from './foodspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodspagePageRoutingModule
  ],
  declarations: [FoodspagePage]
})
export class FoodspagePageModule {}
