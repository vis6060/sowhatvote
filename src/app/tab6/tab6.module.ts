import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Tab6navComponent} from "../tab6/tab6nav/tab6nav.component";
import {Tab6displaynavComponent} from "../tab6/tab6displaynav/tab6displaynav.component";
import {Tab6bdisplaynavComponent} from "../tab6/tab6bdisplaynav/tab6bdisplaynav.component";
import {Tab6cdisplaynavComponent} from "../tab6/tab6cdisplaynav/tab6cdisplaynav.component";
import {Tab5displaynavComponent} from "../tab6/tab5displaynav/tab5displaynav.component";
import {RouterModule} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    Tab6navComponent,
    Tab6displaynavComponent,
    Tab6bdisplaynavComponent,
    Tab6cdisplaynavComponent,
    Tab5displaynavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Tab6navComponent }]),
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatDividerModule,
  ]
})
export class Tab6Module { }
