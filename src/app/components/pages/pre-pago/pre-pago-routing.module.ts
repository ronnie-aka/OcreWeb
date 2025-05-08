import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrePagoPage } from './pre-pago.page';

const routes: Routes = [
  {
    path: '',
    component: PrePagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrePagoPageRoutingModule {}
