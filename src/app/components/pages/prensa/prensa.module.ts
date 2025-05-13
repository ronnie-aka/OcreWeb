import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrensaPageRoutingModule } from './prensa-routing.module';

import { PrensaPage } from './prensa.page';
import { PiePaginaComponent } from '../../partials/pie-pagina/pie-pagina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrensaPageRoutingModule,
    PiePaginaComponent
  ],
  declarations: [PrensaPage]
})
export class PrensaPageModule {}
