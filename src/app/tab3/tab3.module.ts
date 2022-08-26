import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {Tab3navComponent} from "../tab3/tab3nav/tab3nav.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {Tab3displaynavComponent} from "../tab3/tab3displaynav/tab3displaynav.component";
import {Tab3bdisplaynavComponent} from "../tab3/tab3bdisplaynav/tab3bdisplaynav.component";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    Tab3navComponent,
    Tab3displaynavComponent,
    Tab3bdisplaynavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Tab3navComponent }]),
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatDividerModule,
  ]
})
export class Tab3Module { }
