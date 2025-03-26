import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramacionPageRoutingModule } from './programacion-routing.module';

import { ProgramacionPage } from './programacion.page';

import { PiePaginaComponent } from '../../partials/pie-pagina/pie-pagina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramacionPageRoutingModule,
    PiePaginaComponent
  ],
  declarations: [ProgramacionPage,]
})
export class ProgramacionPageModule {}
