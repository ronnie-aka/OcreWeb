import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisoLegalPageRoutingModule } from './aviso-legal-routing.module';

import { AvisoLegalPage } from './aviso-legal.page';
import { PiePaginaComponent } from '../../partials/pie-pagina/pie-pagina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisoLegalPageRoutingModule,
    PiePaginaComponent
  ],
  declarations: [AvisoLegalPage]
})
export class AvisoLegalPageModule {}
