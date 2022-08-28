import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdAComponent} from "./ad-a/ad-a.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";



@NgModule({
  declarations: [
    AdAComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdAComponent }]),
    MatCardModule,
    MatDividerModule
  ]
})
export class Community1Module { }
