import {Component, OnInit, ViewEncapsulation, Input, NgModule, Injectable} from '@angular/core';
import Amplify, {API, Auth} from "aws-amplify";
import {DatePipe} from "@angular/common";
import {MatStepperIntl} from "@angular/material/stepper";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import awsExports from "../../../aws-exports";

import { Cache } from 'aws-amplify';

@Injectable()
export class StepperIntl extends MatStepperIntl {
  // the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}

@Component({
  selector: 'app-tab1nav',
  templateUrl: './tab1nav.component.html',
  styleUrls: ['./tab1nav.component.css'],
  providers: [DatePipe, {provide: MatStepperIntl, useClass: StepperIntl}],
  encapsulation: ViewEncapsulation.None
})
export class Tab1navComponent implements OnInit {


  tab1index:number;

  constructor(public datepipe: DatePipe, public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }

  ngOnInit(): void {
    this.getindex()
  }


  //get index of tab to display
  async getindex() {
    if(Cache.getItem('tab1index')!=null) {
    {this.tab1index=  Cache.getItem('tab1index'); } } else {this.tab1index=0}


  }


}
