import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecorpagePageRoutingModule } from './decorpage-routing.module';

import { DecorpagePage } from './decorpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecorpagePageRoutingModule
  ],
  declarations: [DecorpagePage]
})
export class DecorpagePageModule {}
