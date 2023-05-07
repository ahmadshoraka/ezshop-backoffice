import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-list-routing.module';
import { MarketListComponent } from './market-list.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';


@NgModule({
  declarations: [
    MarketListComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
    MarketRoutingModule
  ], exports: [
    MarketListComponent
  ]
})
export class MarketModule { }
