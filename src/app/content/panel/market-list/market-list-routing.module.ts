import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketListComponent } from './market-list.component';

const routes: Routes = [
  {
    path: '',
    component: MarketListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
