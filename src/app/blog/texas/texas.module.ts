import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TexascComponent} from "./texasc/texasc.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TexascComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TexascComponent }]),
  ]
})
export class TexasModule { }
