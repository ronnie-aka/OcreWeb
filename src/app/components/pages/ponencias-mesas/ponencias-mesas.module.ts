import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PonenciasMesasPageRoutingModule } from './ponencias-mesas-routing.module';

import { PonenciasMesasPage } from './ponencias-mesas.page';
import { PiePaginaComponent } from '../../partials/pie-pagina/pie-pagina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PonenciasMesasPageRoutingModule,
    PiePaginaComponent
  ],
  declarations: [PonenciasMesasPage]
})
export class PonenciasMesasPageModule {}
