import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllprofilesComponent } from './allprofiles/allprofiles.component';
import {RouterModule} from "@angular/router";
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    AllprofilesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AllprofilesComponent }]),
    MatTreeModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class MidtermprofilesModule { }
