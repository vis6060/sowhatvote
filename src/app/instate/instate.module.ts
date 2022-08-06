import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfdialogComponent } from './confdialog/confdialog.component';
import { InstategovernordisplaynavComponent } from './instategovernordisplaynav/instategovernordisplaynav.component';
import { InstatehousedisplaynavComponent } from './instatehousedisplaynav/instatehousedisplaynav.component';
import { InstatesenatedisplaynavComponent } from './instatesenatedisplaynav/instatesenatedisplaynav.component';
import { InstatenavComponent } from './instatenav/instatenav.component';

import {RouterModule} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfdialogsenateComponent } from './confdialogsenate/confdialogsenate.component';
import { ConfdialoggovernComponent } from './confdialoggovern/confdialoggovern.component';


@NgModule({
  declarations: [
    ConfdialogComponent,
    InstategovernordisplaynavComponent,
    InstatehousedisplaynavComponent,
    InstatesenatedisplaynavComponent,
    InstatenavComponent,
    ConfdialogsenateComponent,
    ConfdialoggovernComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: InstatenavComponent }]),
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class InstateModule { }
