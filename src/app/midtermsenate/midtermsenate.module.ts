import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstatesenatedisplaynavComponent } from '../midtermsenate/instatesenatedisplaynav/instatesenatedisplaynav.component';


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
import { ConfdialogsenateComponent } from '../midtermsenate/confdialogsenate/confdialogsenate.component';



@NgModule({
  declarations: [
    InstatesenatedisplaynavComponent,
    ConfdialogsenateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: InstatesenatedisplaynavComponent }]),
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
export class MidtermsenateModule { }
