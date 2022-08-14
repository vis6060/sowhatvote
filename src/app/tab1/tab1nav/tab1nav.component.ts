import {Component, OnInit, ViewEncapsulation, Input, NgModule, Injectable} from '@angular/core';
import Amplify, {API, Auth} from "aws-amplify";
import {DatePipe} from "@angular/common";
import {MatStepperIntl} from "@angular/material/stepper";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import awsExports from "../../../aws-exports";

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

  loadflag="";
  tab1index:number;

  constructor(public datepipe: DatePipe, public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }

  ngOnInit(): void {
    this.getindex()
  }


  //get index of tab to display
  async getindex() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp70 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitabindext4", "/datingapitabindex/m", paramsp70).then(response70 => {
      this.tab1index=response70.data[0].tab1index;
      this.loadflag="yes";
    }).catch(error => {console.log(error.response70);
      this.loadflag="yes"
    });
  }


}
