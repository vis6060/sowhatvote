import { Component,Injectable, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup,} from '@angular/forms';
import {MatStepperIntl} from '@angular/material/stepper';
import Amplify, {Auth, Cache} from "aws-amplify";
import { API } from 'aws-amplify';
import { DatePipe } from '@angular/common';

import {APIService, DatinguserdbStaging} from "../API.service";
import awsExports from "../../aws-exports";

export interface User {
  name: string;
}

@Injectable()
export class StepperIntl extends MatStepperIntl {
// the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}

@Component({
  selector: 'app-big5parta',
  templateUrl: './big5parta.component.html',
  styleUrls: ['./big5parta.component.css'],
  providers: [DatePipe, {provide: MatStepperIntl, useClass: StepperIntl}],
})
export class Big5partaComponent implements OnInit {

  router: Router;
  constructor(public datepipe: DatePipe, private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl, private api: APIService, private route: ActivatedRoute, _router: Router) {
    Amplify.configure(awsExports); this.router = _router;

  }

  ngOnInit(): void {
    this.zeroFormGroup = this._formBuilder.group({});
    this.movenextpage()
  }

  //refreshes the browser upon button click of next or dislike or connectme
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

locationreload() {  location.reload();}

  //movenextpage() { if(Cache.getItem('profileAstatus')=="yes") {this.seccompleteA();this.router.navigate(['/2022MidtermElections/USSenate'])}}

   movenextpage() { if(Cache.getItem('profileAstatus')=="yes" && (Cache.getItem('midtermclicked')=="yes" ||Cache.getItem('midtermenter')=="yes"))  {
     this.seccompleteA(); this.router.navigate(['/2022MidtermElections/USSenate'])}

  else if(Cache.getItem('profileAstatus')=="yes" && (Cache.getItem('meetupclicked')=="yes" || Cache.getItem('meetupenter')=="yes"))  {
     this.seccompleteA();  this.router.navigate(['/Meetup/Step3'])}}

//to enure that zip codes are only numbers
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;}  return true;
  }

  zeroFormGroup: FormGroup;
  zipuserentered = ""; zipdatabase=""; countydatabase=""; statedatabase=""; ziperrorflag=""; zipcorrflag=""; countyuser="";
  countytab:string=""; statetab:string=""
  async zipstore(event:any) {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp6 = {headers: {}, response: true, queryStringParameters: {zipq:this.zipuserentered} };
    API.get("datingapitest4", "/userdbapizip/m", paramsp6).then(responseF => {console.log(responseF.data[0].county);
      this.zipdatabase=responseF.data[0].zip; this.countydatabase=responseF.data[0].county; this.statedatabase=responseF.data[0].state;

      if (this.zipuserentered==this.zipdatabase) {
        console.log("thank you")
        this.zipcorrflag="yes"; //if a user incorrectly enters zip once, then reset the flag once it has been entered correctly.
        this.ziperrorflag="";
        const paramspG = {body: {userid: user.attributes.sub, zipuserentered:this.zipuserentered, countyuser:this.countydatabase ,
            stateuser:this.statedatabase }}
        API.post("datingapitest4", "/userdbapioccup", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
        this.countytab=this.countydatabase; this.statetab=this.statedatabase;
        console.log(this.countytab)
      }
    }).catch(error => {console.log(error.responseF); this.ziperrorflag="yes";});
  }

  async boxevent10(event:any) {
    if(this.ziperrorflag=="yes") {
      this.zipstore(event)
    }
  }

  //education, age, gender info stored in one initial API call along with initializing of unsubrcribeme variable
  //this will be a true dynamobb.post API (where a new user is created in SWV DB once they enter their age), rest all api calls subsquently below will be dynamodb.update
  agestore1=""; unsubscribematchingme=''; genderstore1=""; educationstore1="";
  stateuser=""; loyalty=0; profilename="";  newWidth=0; newHeight=0; origWidth=0; origHeight=0;
   profilecompPartA="no"; profilecompPartB="no"; profilecompPartC="no"; profilecompPartD="no"; profilecompPartE="no";
  profilecompPartF="no";

  Extraoverall=0; final9type=""; userdescription="";
  Step1Edit=""; Step2Edit=""; Step3Edit=""; Step4Edit=""; Step5Edit="";
  s3file='no_image.png'; //if the user uploads no image, then the default "no image" picture is shown
  toggleBool0: boolean=true;

  async agestore(event:any) {
    this.toggleBool0= false
    const user = await Auth.currentAuthenticatedUser();
    console.log(this.agestore1); console.log(this.genderstore1); console.log(this.educationstore1);
    //   if (typeof +this.agestore1 === 'string') {console.log("string")} else {console.log("integ")} //check with a variable is a string or integer
    const paramspE = {body: {userid: user.attributes.sub, email: user.attributes.email, age:this.agestore1, gender:this.genderstore1, education: this.educationstore1,
        unsubscribematchingme: this.unsubscribematchingme, mentoragree:this.mentoragree, menteeagree:this.menteeagree, makemoneyside:this.makemoneyside,
        veteran:this.veteran, Extraoverall:this.Extraoverall, final9type:this.final9type, emailshareagree:this.emailshareagree,
        userdescription:this.userdescription, s3file:this.s3file, zipuserentered:this.zipuserentered,
        loyalty: this.loyalty+5000, profilename: this.profilename,
        profilecompPartA:this.profilecompPartA, profilecompPartB:this.profilecompPartB, profilecompPartC:this.profilecompPartC,
        profilecompPartD:this.profilecompPartD, profilecompPartE:this.profilecompPartE, profilecompPartF:this.profilecompPartF,
        newWidth:this.newWidth, newHeight:this.newHeight, origHeight:this.origHeight, origWidth:this.origWidth,
        Step1Edit:this.Step1Edit, Step2Edit:this.Step2Edit,Step3Edit:this.Step3Edit,Step4Edit:this.Step4Edit,Step5Edit:this.Step5Edit,
        timestamp:new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),
        timeunix:new Date().valueOf(), lastmeetupviewdate: new Date().valueOf(),
        lastmeetupviewdatecompare: new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),
      }}
    API.post("datingapitest4", "/userdbapiage", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});

    // create the array with itemids for the user to view
    const paramsp1 = {body: {userid: user.attributes.sub, itemidstab1A:[]}}
    API.post("datingapi1At4", "/itemapitab1Ainit1", paramsp1).then(response1 => {console.log("success1");}).catch(error => {console.log(error.response1);});

    const paramsp2 = {body: {userid: user.attributes.sub, itemidstab1B:[], itemidstab2:[], itemidstab3:[], itemidstab3B:[], itemidstab5:[], itemidstab6:[], itemidstab6B:[], itemidstab6C:[]}}
    API.post("datingapitest4", "/itemapitab1A", paramsp2).then(response2 => {console.log("success2");}).catch(error => {console.log(error.response2);});

    const paramsp3 = {body: {userid: user.attributes.sub, itemidstab1C:[]}}
    API.post("datingapi1Ct4", "/itemapitab1Cinit1", paramsp3).then(response3 => {console.log("success3");}).catch(error => {console.log(error.response3);});

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

  //record that Section A is complete.
  async seccompleteA() {

    const user = await Auth.currentAuthenticatedUser();
    const paramsp3 = {body: {userid: user.attributes.sub, seccomplete:"profilecompPartA"}}
    API.post("datingapitest4", "/userdbapiname", paramsp3).then(response3 => {console.log("success3");}).catch(error => {console.log(error.response3);});
  }

  async seccompleteflag() {
    const expiration = new Date().valueOf()
    Cache.setItem('profileAstatus', 'yes', { expires: expiration +60000 }); //expires after 10minute, time is in ms.

  }


}

