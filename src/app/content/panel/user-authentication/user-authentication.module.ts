import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthenticationRoutingModule } from './user-authentication-routing.module';
import { UserAuthenticationComponent } from './user-authentication.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';


@NgModule({
  declarations: [
    UserAuthenticationComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    UserAuthenticationRoutingModule
  ]
})
export class UserAuthenticationModule { }
