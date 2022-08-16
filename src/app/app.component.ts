import {Component, OnInit, ViewEncapsulation, NgModule} from '@angular/core';
import {API, Auth, Cache} from "aws-amplify";
import { Location } from '@angular/common';
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(public authenticator: AuthenticatorService,private readonly location: Location) {}

  ngOnInit(): void {
    this.level2tabRest()
    this.routeOnRefresh()
    this.routeOnRefreshmidterm()
    this.refreshtab()
    console.log('meetupenter homepage cache', Cache.getItem('meetupenter'));
    console.log( 'midtermenter homepage cache', Cache.getItem('midtermenter'))
    console.log( 'meetupclicked homepage cache', Cache.getItem('meetupclicked'))
    console.log( 'midtermclicked homepage cache', Cache.getItem('midtermclicked'))
    console.log('myaccountenter homepage cache', Cache.getItem('myaccountenter'))
    console.log('profileAstatus homepage cache', Cache.getItem('profileAstatus'))
    console.log('profileDstatus cache', Cache.getItem('profileDstatus'))
    console.log('profileEstatus cache', Cache.getItem('profileEstatus'))
    console.log('profileFstatus cache', Cache.getItem('profileFstatus'))
  }

  profilecompPartA="";profilecompPartD="";profilecompPartE=""; profilecompPartF="";
  profileAfag="";profileDfag="";profileEfag="";profileFfag=""

  refreshtab() {
    if(Cache.getItem('profileAstatus')=="yes") {this.profileAfag="yes"}
    if(Cache.getItem('profileDstatus')=="yes") {this.profileDfag="yes"}
    if(Cache.getItem('profileEstatus')=="yes") {this.profileEfag="yes"}
    if(Cache.getItem('profileFstatus')=="yes") {this.profileFfag="yes"}
  }

  //get the flag whether StepF and StepA in the form sign-up steps are complete.
  async level2tabRest(){
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/userdbapiname/m", paramsp1).then(response1 => {
      this.profilecompPartF=response1.data[0].profilecompPartF;  this.profilecompPartA=response1.data[0].profilecompPartA;
      this.profilecompPartD=response1.data[0].profilecompPartD;this.profilecompPartE=response1.data[0].profilecompPartE;
      ;}).catch(error => {console.log(error.response1)});
  }

  meetupflag=""; routeString=""; routeflag=""; midtermflag=""; routeflagmidterm="";

  meetupclickedI() {
    const expiration = new Date().valueOf()
      Cache.setItem('meetupenter', 'yes', { expires: expiration +60000 });
      }

  midtermclickedI() {
    const expiration = new Date().valueOf()
    Cache.setItem('midtermenter', 'yes', { expires: expiration +60000 });}

  myaccountclicked() {
    const expiration = new Date().valueOf()
    Cache.setItem('myaccountenter', 'yes', { expires: expiration +60000 });
      }

  meetupclickedA() {this.meetupflag="yes"; this.midtermflag="no";
    const expiration = new Date().valueOf()
    Cache.setItem('meetupclicked', 'yes', { expires: expiration +60000 }); //expires after 1minute, time is in ms.
  }

  midtermclickedA() {this.meetupflag="no"; this.midtermflag="yes";
    const expiration = new Date().valueOf()
    Cache.setItem('midtermclicked', 'yes', { expires: expiration +60000 }); //expires after 1minute, time is in ms.
  }

  meetupclicked() {this.meetupflag="yes"; this.midtermflag="no";
    const expiration = new Date().valueOf()
    Cache.setItem('meetupclicked', 'yes', { expires: expiration +60000 }); //expires after 1minute, time is in ms.

  }

  midtermclicked() {this.meetupflag="no"; this.midtermflag="yes";
    const expiration = new Date().valueOf()
    Cache.setItem('midtermclicked', 'yes', { expires: expiration +60000 }); //expires after 1minute, time is in ms.
  }

  //when user is on tab1 and they refresh the screen, then below routeflag will ensure the tab1, tab2, tab3, tab6 toolbar will appear
  routeOnRefresh() {
    this.routeString=this.location.path();
    if (this.routeString == "/Meetup/Home" || this.routeString == "/Meetup/Tab1" || this.routeString == "/Meetup/Tab2" || this.routeString == "/Meetup/Tab3" || this.routeString == "/Meetup/Tab6") {
      this.routeflag = "yes"
    }
  }

  //2022MidtermElections. //StateExecutiveOffices.  USSenate. USHouse.  AllProfileNames.
  routeOnRefreshmidterm() {
    this.routeString=this.location.path();
    if (this.routeString == "/2022MidtermElections/USSenate" || this.routeString == "/2022MidtermElections/USHouse" || this.routeString == "/2022MidtermElections/StateExecutiveOffices" || this.routeString == "/2022MidtermElections/AllProfileNames") {
      this.routeflagmidterm = "yes"
    }
  }




}
