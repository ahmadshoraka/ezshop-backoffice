import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';

import { ComponentModule } from 'src/app/shared/components/component.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    PanelRoutingModule,
    MaterialModule,
    SharedModule,
    ComponentModule,
    RouterModule,
  ]
})
export class PanelModule { }
