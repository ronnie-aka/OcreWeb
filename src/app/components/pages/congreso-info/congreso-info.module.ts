import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongresoInfoPageRoutingModule } from './congreso-info-routing.module';

import { CongresoInfoPage } from './congreso-info.page';

import { PiePaginaComponent } from '../../partials/pie-pagina/pie-pagina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongresoInfoPageRoutingModule,
    PiePaginaComponent,
  ],
  declarations: [CongresoInfoPage],
})
export class CongresoInfoPageModule {}
