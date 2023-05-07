import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EzpPreloadingStrategy } from './core/common/preloading-strategy';
import { authGuard } from './core/guard/auth.guard';


const routes: Routes = [
  {
    path: 'panel',
    canActivate: [authGuard],
    loadChildren: () => import('./content/panel/panel.module').then(m => m.PanelModule),
    data: { preloading: true, delay: false}
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule),
    data: { preloading: true, delay: false}
  },
  {
    path: '',
    redirectTo: 'panel',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: EzpPreloadingStrategy, useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
