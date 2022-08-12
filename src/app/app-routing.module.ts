import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginboxComponent } from './loginbox/loginbox.component';
import {AdAComponent} from "./ad-a/ad-a.component";

import {DirectAccessGuardService} from "./direct-access-guard.service";


const routes: Routes = [
  { path: 'MyAccount', component: LoginboxComponent },
  { path: 'AdA', component: AdAComponent },
  {
    path: '2022MidtermElections/USSenate',
    loadChildren: () =>
      import('./midtermsenate/midtermsenate.module').then((m) => m.MidtermsenateModule),
  },
  {
    path: '2022MidtermElections/USHouse',
    loadChildren: () =>
      import('./midtermhouse/midtermhouse.module').then((m) => m.MidtermhouseModule),
  },
  {
    path: '2022MidtermElections/StateExecutiveOffices',
    loadChildren: () =>
      import('./midtermgovernor/midtermgovernor.module').then((m) => m.MidtermgovernorModule),
  },
  {
    path: '2022MidtermElections/AllProfileNames',
    loadChildren: () =>
      import('./midtermprofiles/midtermprofiles.module').then((m) => m.MidtermprofilesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
