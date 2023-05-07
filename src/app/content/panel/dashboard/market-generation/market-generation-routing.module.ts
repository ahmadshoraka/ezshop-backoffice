import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketGenerationComponent } from './market-generation.component';

const routes: Routes = [
  {
    path: '',
    component: MarketGenerationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketGenerationRoutingModule { }
