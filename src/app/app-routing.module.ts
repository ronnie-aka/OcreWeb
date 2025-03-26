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
    path: 'programacion',
    loadChildren: () => import('./components/pages/programacion/programacion.module').then( m => m.ProgramacionPageModule)
  },
  {
    path: 'ponentes',
    loadChildren: () => import('./components/pages/ponentes/ponentes.module').then( m => m.PonentesPageModule)
  },
  {
    path: 'congreso/home',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
