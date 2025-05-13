import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'congreso',
    loadChildren: () => import('./components/partials/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'congreso/home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'aviso-legal',
    loadChildren: () => import('./components/pages/aviso-legal/aviso-legal.module').then( m => m.AvisoLegalPageModule)
  },
  {
    path: 'cookies',
    loadChildren: () => import('./components/pages/cookies/cookies.module').then( m => m.CookiesPageModule)
  },
  {
    path: 'cookies-config',
    loadChildren: () => import('./components/pages/cookies-config/cookies-config.module').then( m => m.CookiesConfigPageModule)
  },
  {
    path: 'ponencias-mesas',
    loadChildren: () => import('./components/pages/ponencias-mesas/ponencias-mesas.module').then( m => m.PonenciasMesasPageModule)
  },
  {
    path: 'pre-pago',
    loadChildren: () => import('./components/pages/pre-pago/pre-pago.module').then( m => m.PrePagoPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./components/partials/modal/modal.module').then( m => m.ModalPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
