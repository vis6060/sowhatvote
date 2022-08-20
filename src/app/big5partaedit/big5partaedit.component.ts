import {Component, Injectable, OnInit} from '@angular/core';
import {MatStepperIntl} from "@angular/material/stepper";
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup,} from '@angular/forms';
import Amplify, {Auth} from "aws-amplify";
import { API } from 'aws-amplify';
import { DatePipe } from '@angular/common';

import {APIService, DatinguserdbStaging} from "../API.service";
import awsExports from "../../aws-exports";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Injectable()
export class StepperIntl extends MatStepperIntl {
  override optionalLabel = 'Optional Label';
}

@Component({
  selector: 'app-big5partaedit',
  templateUrl: './big5partaedit.component.html',
  styleUrls: ['./big5partaedit.component.css'],
  providers: [DatePipe, {provide: MatStepperIntl, useClass: StepperIntl}],
})
export class Big5partaeditComponent implements OnInit {


  constructor(public datepipe: DatePipe, private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl, private api: APIService, private route: ActivatedRoute, private router: Router,public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
    if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])}
  }

  ngOnInit(): void {
    this.zeroFormGroup = this._formBuilder.group({});
  }

  zeroFormGroup: FormGroup;
  agestore1=""; educationstore1=""; genderstore1="";
  toggleBool0: boolean=true;

  //store the new age, gender, education. Next button has to enabled here as rest of the checkboxes are optional
  async ageeduput(event:any) {
    this.toggleBool0= false
    const user = await Auth.currentAuthenticatedUser();
    console.log(this.mentoragree)
    const paramspF = {body: {userid: user.attributes.sub, putfield1:"age", putvalue1:this.agestore1, putfield2:"education", putvalue2:this.educationstore1, putfield3:"gender", putvalue3:this.genderstore1}}
    API.post("datingapitest4", "/userdbapieditform", paramspF).then(responseF => {console.log("successF");}).catch(error => {console.log(error.responseF);});
  }


  //user checks a box if they agree to become a mentor
  mentoragree = false;
  async boxevent5(event:any) {
    const user = await Auth.currentAuthenticatedUser();
    console.log(this.mentoragree)
    const paramspF = {body: {userid: user.attributes.sub, mentoragree:"Yes"}}
    API.put("datingapitest4", "/userdbapimentor", paramspF).then(responseF => {console.log("successF");}).catch(error => {console.log(error.responseF);});
  }

  //user checks a box if they agree to become a mentee
  menteeagree = false;
  async boxevent6(event:any) {
    const user = await Auth.currentAuthenticatedUser();
    console.log(this.menteeagree)
    const paramspG = {body: {userid: user.attributes.sub, menteeagree: "Yes"}}
    API.post("datingapitest4", "/userdbapimentor", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
  }

  //user checks a box if they want to make side money
  makemoneyside = false;
  async boxevent7(event:any) {
    const user = await Auth.currentAuthenticatedUser();
    console.log(this.makemoneyside)
    const paramspH = {body: {userid: user.attributes.sub, makemoneyside:this.makemoneyside}}
    API.post("datingapitest4", "/userdbapimoney", paramspH).then(responseH => {console.log("successH");}).catch(error => {console.log(error.responseH);});
  }

  //user checks a box if they are a veteran
  veteran = false; vetflag="";
  async boxevent8(event:any) {
    const user = await Auth.currentAuthenticatedUser();
    this.vetflag="yes";
    console.log(this.veteran)
    const paramspI = {body: {userid: user.attributes.sub, veteran:"Yes"}}
    API.put("datingapitest4", "/userdbapimoney", paramspI).then(responseI => {console.log("successI");}).catch(error => {console.log(error.responseI);});
  }

  //this changes to true when the user checks the box that they agree to share email address
  emailshareagree = false;
  async boxevent3(event:any) {
    const user = await Auth.currentAuthenticatedUser();
    console.log(this.emailshareagree)
    const paramspB = {body: {userid: user.attributes.sub, emailshareagree:this.emailshareagree}}
    API.put("datingapitest4", "/userdbapiemail", paramspB).then(responseB => {console.log("successB");}).catch(error => {console.log(error.responseB);});
  }




}
