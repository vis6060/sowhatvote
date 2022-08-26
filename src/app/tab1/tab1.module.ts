import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1navComponent } from './tab1nav/tab1nav.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { Tab1adisplaynavComponent } from './tab1adisplaynav/tab1adisplaynav.component';
import {RouterModule} from "@angular/router";
import { Tab1bdisplaynavComponent } from './tab1bdisplaynav/tab1bdisplaynav.component';
import { Tab1cdisplaynavComponent } from './tab1cdisplaynav/tab1cdisplaynav.component';
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    Tab1navComponent,
    Tab1adisplaynavComponent,
    Tab1bdisplaynavComponent,
    Tab1cdisplaynavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Tab1navComponent }]),
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatDividerModule,
  ]
})
export class Tab1Module { }
