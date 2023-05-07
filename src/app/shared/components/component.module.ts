import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modules/material.module';
import { SharedModule } from '../modules/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { MarketModule } from "./../../content/panel/market-list/market-list.module";


@NgModule({
    declarations: [
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        SharedModule,
        MaterialModule,
        RouterModule,
        MarketModule
    ]
})
export class ComponentModule { }
