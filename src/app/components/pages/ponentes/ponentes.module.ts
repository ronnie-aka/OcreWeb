import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PonentesPageRoutingModule } from './ponentes-routing.module';

import { PonentesPage } from './ponentes.page';

import { PiePaginaComponent } from '../../partials/pie-pagina/pie-pagina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PonentesPageRoutingModule,
    PiePaginaComponent
  ],
  declarations: [PonentesPage]
})
export class PonentesPageModule {}
