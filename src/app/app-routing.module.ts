import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginboxComponent } from './loginbox/loginbox.component';
import {AdAComponent} from "./ad-a/ad-a.component";

import { Big5partaComponent } from './big5parta/big5parta.component';
import { Big5partdComponent } from './big5partd/big5partd.component';
import { Big5parteComponent } from './big5parte/big5parte.component';
import { Big5partfComponent } from './big5partf/big5partf.component';
import { Big5partaeditComponent } from './big5partaedit/big5partaedit.component';

import {DirectAccessGuardService} from "./direct-access-guard.service";


const routes: Routes = [
  { path: '', redirectTo: '/2022MidtermElections/USSenate', pathMatch: 'full' },
  { path: 'MyAccount', component: LoginboxComponent },
  { path: 'AdA', component: AdAComponent },
  { path: 'Meetup/Step0', component: Big5partaComponent }, //insert canActivate here too, once you have created button to access Step0
  { path: 'Meetup/Step0edit', component: Big5partaeditComponent,canActivate: [DirectAccessGuardService] },//canActivate method will ensure ppl cannot directly access these routes.
  { path: 'Meetup/Step3', component: Big5partdComponent,canActivate: [DirectAccessGuardService]},
  { path: 'Meetup/Step4', component: Big5parteComponent,canActivate: [DirectAccessGuardService]},
  { path: 'Meetup/Step5', component: Big5partfComponent,canActivate: [DirectAccessGuardService]},
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
  {
    path: 'Meetup/Home',
    loadChildren: () =>
      import('./home/home.module').then(
        (m) => m.HomeModule
      )
  },
  {
    path: 'Meetup/Tab1',
    loadChildren: () =>
      import('./tab1/tab1.module').then(
        (m) => m.Tab1Module
      )
  },
  {
    path: 'Meetup/Tab2',
    loadChildren: () =>
      import('./tab2/tab2.module').then(
        (m) => m.Tab2Module
      )
  },
  {
    path: 'Meetup/Tab3',
    loadChildren: () =>
      import('./tab3/tab3.module').then(
        (m) => m.Tab3Module
      )
  },
  {
    path: 'Meetup/Tab6',
    loadChildren: () =>
      import('./tab6/tab6.module').then(
        (m) => m.Tab6Module
      )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
