import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongresoInfoPageRoutingModule } from './congreso-info-routing.module';

import { CongresoInfoPage } from './congreso-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongresoInfoPageRoutingModule
  ],
  declarations: [CongresoInfoPage]
})
export class CongresoInfoPageModule {}
