import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdBComponent} from "./ad-b/ad-b.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";



@NgModule({
  declarations: [
    AdBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdBComponent }]),
    MatCardModule,
    MatDividerModule
  ]
})
export class Community2Module { }
