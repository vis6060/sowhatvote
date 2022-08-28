import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginboxComponent } from './loginbox/loginbox.component';


import { Big5partaComponent } from './big5parta/big5parta.component';
import { Big5partdComponent } from './big5partd/big5partd.component';
import { Big5parteComponent } from './big5parte/big5parte.component';
import { Big5partfComponent } from './big5partf/big5partf.component';
import { Big5partaeditComponent } from './big5partaedit/big5partaedit.component';

import {EntrypageComponent} from "./entrypage/entrypage.component";
import {TermsdialogboxComponent} from "./termsdialogbox/termsdialogbox.component";


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: EntrypageComponent },
  { path: 'MyAccount', component: LoginboxComponent },
  {
    path: 'Community1',
    loadChildren: () =>
      import('./community1/community1.module').then((m) => m.Community1Module),
  },
  {
    path: 'Community2',
    loadChildren: () =>
      import('./community2/community2.module').then((m) => m.Community2Module),
  },
  { path: 'Meetup/Step0', component: Big5partaComponent }, //insert canActivate here too, once you have created button to access Step0
  { path: 'Meetup/Step0edit', component: Big5partaeditComponent, },//canActivate method will ensure ppl cannot directly access these routes.
  { path: 'Meetup/Step3', component: Big5partdComponent},
  { path: 'Meetup/Step4', component: Big5parteComponent,},
  { path: 'Meetup/Step5', component: Big5partfComponent,},
  { path: 'TermsPrivacy', component: TermsdialogboxComponent,},
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
    path: 'AllProfileNames',
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
    path: 'Meetup/AllMembers',
    loadChildren: () =>
      import('./tab1/tab1.module').then(
        (m) => m.Tab1Module
      )
  },
  {
    path: 'Meetup/MutuallyAccepted',
    loadChildren: () =>
      import('./tab2/tab2.module').then(
        (m) => m.Tab2Module
      )
  },
  {
    path: 'Meetup/RequestReceived',
    loadChildren: () =>
      import('./tab3/tab3.module').then(
        (m) => m.Tab3Module
      )
  },
  {
    path: 'Meetup/RequestSent',
    loadChildren: () =>
      import('./tab6/tab6.module').then(
        (m) => m.Tab6Module
      )
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
