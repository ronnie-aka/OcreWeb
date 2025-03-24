import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongresoInfoPage } from './congreso-info.page';

const routes: Routes = [
  {
    path: '',
    component: CongresoInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongresoInfoPageRoutingModule {}
