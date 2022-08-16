import {Component, Injectable, OnInit, ViewEncapsulation} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatStepperIntl} from "@angular/material/stepper";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import Amplify, {API, Auth, Cache} from "aws-amplify";
import awsExports from "../../../aws-exports";

@Injectable()
export class StepperIntl extends MatStepperIntl {
  // the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}

@Component({
  selector: 'app-tab6nav',
  templateUrl: './tab6nav.component.html',
  styleUrls: ['./tab6nav.component.css'],
  providers: [DatePipe, {provide: MatStepperIntl, useClass: StepperIntl}],
  encapsulation: ViewEncapsulation.None
})

export class Tab6navComponent implements OnInit {


  tab6index:number;

  constructor(public datepipe: DatePipe, public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }

  ngOnInit(): void {
    this.getindex()
  }


  //get index of tab to display
  async getindex() {
    if(Cache.getItem('tab6index')!=null) {
      {this.tab6index=  Cache.getItem('tab6index')} } else {this.tab6index=0}

  }

}
