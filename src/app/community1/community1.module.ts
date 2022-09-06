import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdAComponent} from "./ad-a/ad-a.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    AdAComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdAComponent }]),
    MatCardModule,
    MatDividerModule,
  ]
})
export class Community1Module { }
