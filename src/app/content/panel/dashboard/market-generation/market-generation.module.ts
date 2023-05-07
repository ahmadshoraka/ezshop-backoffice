import { NgModule } from '@angular/core';

import { MarketGenerationRoutingModule } from './market-generation-routing.module';
import { MarketGenerationComponent } from './market-generation.component';

import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@NgModule({
  declarations: [
    MarketGenerationComponent
  ],
  imports: [
    MaterialModule,
    SharedModule,
    MarketGenerationRoutingModule
  ],
  providers:[
    ToasterService
  ]
})
export class MarketGenerationModule { }
