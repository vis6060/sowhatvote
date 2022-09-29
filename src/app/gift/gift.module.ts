import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {GiftcardComponent} from "./giftcard/giftcard.component";



@NgModule({
  declarations: [
    GiftcardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: GiftcardComponent }]),
  ]
})
export class GiftModule { }
