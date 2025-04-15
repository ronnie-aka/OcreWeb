import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PonenciasMesasPage } from './ponencias-mesas.page';

const routes: Routes = [
  {
    path: '',
    component: PonenciasMesasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PonenciasMesasPageRoutingModule {}
