import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab2navComponent } from './tab2nav/tab2nav.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {RouterModule} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    Tab2navComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Tab2navComponent }]),
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatDividerModule,
  ]
})
export class Tab2Module { }
