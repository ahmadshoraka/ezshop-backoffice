import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';

const routes: Routes = [{
  path: '',
  component: PanelComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboar.module').then(m => m.DashboarModule),
      data: { preloading: true, delay: false }
    },
    {
      path: 'user-authentication',
      loadChildren: () => import('./user-authentication/user-authentication.module').then(m => m.UserAuthenticationModule),
      data: { preloading: true, delay: false }
    },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
