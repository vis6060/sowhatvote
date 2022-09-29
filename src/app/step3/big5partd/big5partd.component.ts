import { Component,Injectable, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import {MatStepperIntl} from '@angular/material/stepper';
import Amplify, {Auth, Cache} from "aws-amplify";
import { API } from 'aws-amplify';
import { DatePipe } from '@angular/common';

import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

import {APIService} from "../../API.service";
import awsExports from "../../../aws-exports";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

export interface User {
  name: string;
}
@Injectable()
export class StepperIntl extends MatStepperIntl {
  // the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}

@Component({
  selector: 'app-big5partd',
  templateUrl: './big5partd.component.html',
  styleUrls: ['./big5partd.component.css'],
  providers: [DatePipe, {provide: MatStepperIntl, useClass: StepperIntl}],
})
export class Big5partdComponent implements OnInit {

//  private router: Router;
  constructor(public datepipe: DatePipe, private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl, private api: APIService, private route: ActivatedRoute, private router: Router,public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
    if(Cache.getItem('profileAstatus')=="yes") {Cache.removeItem("profileAstatus");location.reload();}
    if(Cache.getItem('profileDstatus')=="yes") { this.reloadscreenblankit="yes"}
    if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])}
  }

  reloadscreenblankit=""

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
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

  movenextpage() { if(Cache.getItem('profileDstatus')=="yes") { this.seccompleteD(); }}

  toggleBool5= "true";    nextcheckfunc5() {this.toggleBool5= "false";}

  //tier1 industry dropdown
  myControl = new FormControl();
  options: User[] = [{name: 'Agriculture, Forestry, Fishing, and Hunting'}, {name: 'Mining, Quarrying, and Oil and Gas Extraction'}, {name: 'Construction'}, {name: 'Manufacturing'}, {name: 'Wholesale Trade'}, {name: 'Retail Trade'}, {name: 'Transportation and Warehousing'}, {name: 'Utilities'}, {name: 'Software & Media (newspapers, motion pictures, data processing, internet publishing, telecommunications, etc.'}, {name: 'Finance and Insurance'}, {name: 'Real Estate and Rental and Leasing'}, {name: 'Professional, Scientific, and Technical Services'}, {name: 'Management of companies and enterprises'}, {name: 'Administrative and support and waste management services'}, {name: 'Educational Services'}, {name: 'Health Care and Social Assistance'}, {name: 'Arts, Entertainment, and Recreation'}, {name: 'Accommodation and Food Services'}, {name: 'Labor Unions, Other Services, Except Public Administration'}, {name: 'Public Administration'}, {name: 'Military'}, {name:'Unemployed, last worked 5 years ago or earlier or never worked'} ];
  filteredOptions: Observable<User[]>;

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  industrylevel1= {} as User; //need to declare as a object that matches the export interface.  Also, need to use (ngModelChange) instead of (change) in the html.
  async industry1store(event:any) {
    const user = await Auth.currentAuthenticatedUser();
    console.log(this.industrylevel1.name);
    const paramspJ = {body: {userid: user.attributes.sub, industrylevel1: this.industrylevel1.name}};
    API.put("datingapitest4", "/userdbapiindustry", paramspJ).then(responseJ => {{console.log("successJ");this.toggleBool5="false";this.geteditStep3()}
    }).catch(error => {console.log(error.responseJ);});

  }

  //record that Section D is complete.
  async seccompleteD() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp3 = {body: {userid: user.attributes.sub, seccomplete:"profilecompPartD"}}
    API.post("datingapitest4", "/userdbapiname", paramsp3).then(response3 => {console.log("success3 seccompleteD");
      this.router.navigate(['/Meetup/Step4'])

    }).catch(error => {console.log(error.response3);});
  }

  editstep3flag="";
  async geteditStep3() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1a = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub,editsection:"Step3Edit"} };
    API.get("datingapitest4", "/userdbapieditform/m", paramsp1a).then(response1a =>
    {this.editstep3flag=response1a.data[0].Step3Edit;}).catch(error => {console.log(error.response1a)});
  }

  async seccompleteflag() {
    const expiration = new Date().valueOf()
    Cache.setItem('profileDstatus', 'yes', { expires: expiration +60000 }); //expires after 10minute, time is in ms.
  }

}
