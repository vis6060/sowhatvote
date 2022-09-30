import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EntrypageComponent} from "./entrypage/entrypage.component";




const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: EntrypageComponent },
  {
    path: 'MyAccount',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'About',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'Contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
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
  {
    path: 'Meetup/Step0',
    loadChildren: () =>
      import('./step0/step0.module').then((m) => m.Step0Module),
  },
  {
    path: 'Meetup/Step0edit',
    loadChildren: () =>
      import('./step0edit/step0edit.module').then((m) => m.Step0editModule),
  },
  {
    path: 'Meetup/Step3',
    loadChildren: () =>
      import('./step3/step3.module').then((m) => m.Step3Module),
  },
  {
    path: 'Meetup/Step4',
    loadChildren: () =>
      import('./step4/step4.module').then((m) => m.Step4Module),
  },
  {
    path: 'Meetup/Step5',
    loadChildren: () =>
      import('./step5/step5.module').then((m) => m.Step5Module),
  },
  {
    path: 'TermsPrivacy',
    loadChildren: () =>
      import('./privacy/privacy.module').then((m) => m.PrivacyModule),
  },
  {
    path: 'TermsGiftcard',
    loadChildren: () =>
      import('./gift/gift.module').then((m) => m.GiftModule),
  },

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
  },
  {
    path: 'Blog/Texas',
    loadChildren: () =>
      import('./blog/texas/texas.module').then((m) => m.TexasModule),
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
