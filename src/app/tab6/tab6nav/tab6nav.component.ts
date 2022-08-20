import {Component, Injectable, OnInit, ViewEncapsulation} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatStepperIntl} from "@angular/material/stepper";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import Amplify, {API, Auth, Cache} from "aws-amplify";
import awsExports from "../../../aws-exports";
import {Router} from "@angular/router";

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

  constructor(public datepipe: DatePipe, public authenticator: AuthenticatorService,private router: Router) {
    Amplify.configure(awsExports);
    if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])} else
    if(Cache.getItem('profAevade')=="yes") {this.router.navigate(['/Meetup/Step0'])} else
    if(Cache.getItem('profDevade')=="yes") {this.router.navigate(['/Meetup/Step3'])} else
    if(Cache.getItem('profEevade')=="yes") {this.router.navigate(['/Meetup/Step4'])} else
    if(Cache.getItem('profFevade')=="yes") {this.router.navigate(['/Meetup/Step5'])}
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
