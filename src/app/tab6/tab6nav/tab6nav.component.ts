import {Component, Injectable, OnInit, ViewEncapsulation} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatStepperIntl} from "@angular/material/stepper";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import Amplify, {API, Auth} from "aws-amplify";
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

  loadflag6="";
  tab6index:number;

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
      this.tab6index=response70.data[0].tab6index;
      this.loadflag6="yes";
    }).catch(error => {console.log(error.response70);
      this.loadflag6="yes"
    });
  }

}
