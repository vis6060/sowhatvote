import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {TermsdialogboxComponent} from "./termsdialogbox/termsdialogbox.component";



@NgModule({
  declarations: [
    TermsdialogboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TermsdialogboxComponent }]),
  ]
})
export class PrivacyModule { }
