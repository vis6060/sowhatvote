import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginboxComponent } from './loginbox/loginbox.component';
import {AdAComponent} from "./ad-a/ad-a.component";

import {DirectAccessGuardService} from "./direct-access-guard.service";

const routes: Routes = [
  { path: 'MyAccount', component: LoginboxComponent },
  { path: 'AdA', component: AdAComponent },
  {
    path: 'Midterm/InState',
    loadChildren: () =>
      import('./instate/instate.module').then(
        (m) => m.InstateModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
