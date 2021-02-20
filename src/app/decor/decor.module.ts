import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecorPageRoutingModule } from './decor-routing.module';

import { DecorPage } from './decor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecorPageRoutingModule
  ],
  declarations: [DecorPage]
})
export class DecorPageModule {}
