import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrePagoPageRoutingModule } from './pre-pago-routing.module';

import { PrePagoPage } from './pre-pago.page';
import { PiePaginaComponent } from '../../partials/pie-pagina/pie-pagina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrePagoPageRoutingModule,
    PiePaginaComponent
  ],
  declarations: [PrePagoPage]
})
export class PrePagoPageModule {}
