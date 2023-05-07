import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/modules/shared.module';
import { MaterialModule } from '../shared/modules/material.module';
import { AuthenticationComponent } from './authentication.component';
import { AuthRoutingModule } from './auth-routing.module';
import { UpdateConfirmationComponent } from './update-confirmation/update-confirmation.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    UpdateConfirmationComponent
  ],
  imports: [
    MaterialModule,
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
