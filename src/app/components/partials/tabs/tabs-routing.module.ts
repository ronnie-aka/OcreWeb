import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'info',
        loadChildren: () => import('../../pages/congreso-info/congreso-info.module').then(m => m.CongresoInfoPageModule)
      },
      {
        path: 'programa',
        loadChildren: () => import('../../pages/programacion/programacion.module').then(m => m.ProgramacionPageModule)
      },
      {
        path: 'ponentes',
        loadChildren: () => import('../../pages/ponentes/ponentes.module').then(m => m.PonentesPageModule)
      },
      {
        path: 'aviso-legal',
        loadChildren: () => import('../../pages/aviso-legal/aviso-legal-routing.module').then(m => m.AvisoLegalPageRoutingModule)
      },
      {
        path: 'politica-privacidad',
        loadChildren: () => import('../../pages/politica-privacidad/politica-privacidad.module').then(m => m.PoliticaPrivacidadPageModule)
      },
      {
        path: 'cookies',
        loadChildren: () => import('../../pages/cookies/cookies.module').then(m => m.CookiesPageModule)
      },
      {
        path: 'configuracion-cookies',
        loadChildren: () => import('../../pages/cookies-config/cookies-config.module').then(m => m.CookiesConfigPageModule)
      },
      {
        path: 'ponencias-y-mesas-anteriores',
        loadChildren: () => import('../../pages/ponencias-mesas/ponencias-mesas.module').then(m => m.PonenciasMesasPageModule)
      },
      {
        path: 'pre-pago',
        loadChildren: () => import('../../pages/pre-pago/pre-pago.module').then(m => m.PrePagoPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
