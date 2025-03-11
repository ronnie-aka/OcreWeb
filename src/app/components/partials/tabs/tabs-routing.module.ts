import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'programacion',
        loadChildren: () => import('../../pages/programacion/programacion.module').then(m => m.ProgramacionPageModule)
      },
      {
        path: 'ponentes',
        loadChildren: () => import('../../pages/ponentes/ponentes.module').then(m => m.PonentesPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
