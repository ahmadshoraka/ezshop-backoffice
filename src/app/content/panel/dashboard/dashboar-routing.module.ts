import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'market-list',
    loadChildren: () => import('./../market-list/market-list.module').then(m => m.MarketModule),
    data: { preloading: true, delay: false }
  },
  {
    path: 'market-generation',
    loadChildren: () => import('./market-generation/market-generation.module').then(m => m.MarketGenerationModule),
    data: { preloading: true, delay: false }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboarRoutingModule { }
