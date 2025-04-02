import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticaPrivacidadPageRoutingModule } from './politica-privacidad-routing.module';

import { PoliticaPrivacidadPage } from './politica-privacidad.page';
import { PiePaginaComponent } from '../../partials/pie-pagina/pie-pagina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticaPrivacidadPageRoutingModule,
    PiePaginaComponent
  ],
  declarations: [PoliticaPrivacidadPage]
})
export class PoliticaPrivacidadPageModule {}
