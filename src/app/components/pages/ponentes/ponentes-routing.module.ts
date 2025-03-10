import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PonentesPage } from './ponentes.page';

const routes: Routes = [
  {
    path: '',
    component: PonentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PonentesPageRoutingModule {}
