import { NgModule } from '@angular/core';
import {pageHeaderComponent} from "./page-header.component";
import {MaterialModule} from "../modules/material.module";

@NgModule({
  declarations: [pageHeaderComponent],
  imports: [
    MaterialModule
  ],
  exports: [pageHeaderComponent]
})
export class PageHeaderModule {}
