import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookiesConfigPageRoutingModule } from './cookies-config-routing.module';

import { CookiesConfigPage } from './cookies-config.page';
import { PiePaginaComponent } from '../../partials/pie-pagina/pie-pagina.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookiesConfigPageRoutingModule,
    PiePaginaComponent
  ],
  declarations: [CookiesConfigPage]
})
export class CookiesConfigPageModule {}
