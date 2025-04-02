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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
