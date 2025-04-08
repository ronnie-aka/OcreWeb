import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookiesConfigPage } from './cookies-config.page';

const routes: Routes = [
  {
    path: '',
    component: CookiesConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookiesConfigPageRoutingModule {}
