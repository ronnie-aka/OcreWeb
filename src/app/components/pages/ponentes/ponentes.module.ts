import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PonentesPageRoutingModule } from './ponentes-routing.module';

import { PonentesPage } from './ponentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PonentesPageRoutingModule
  ],
  declarations: [PonentesPage]
})
export class PonentesPageModule {}
