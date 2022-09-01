//import {Component, OnInit, ViewEncapsulation, NgModule} from '@angular/core';
import {Component,  ViewEncapsulation,} from '@angular/core';
import {API, Auth, Cache} from "aws-amplify";
import { Location } from '@angular/common';
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CookiebannerComponent} from "./cookiebanner/cookiebanner.component";
//import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(public authenticator: AuthenticatorService,private readonly location: Location,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.level2tabRest()
    this.routeOnRefresh()
    this.routeOnRefreshmidterm()
 //   this.refreshtab()
   console.log('meetupenter homepage cache', Cache.getItem('meetupenter'));
   console.log( 'midtermenter homepage cache', Cache.getItem('midtermenter'))
    console.log( 'meetupclicked homepage cache', Cache.getItem('meetupclicked'))
    console.log( 'midtermclicked homepage cache', Cache.getItem('midtermclicked'))
    console.log('myaccountenter homepage cache', Cache.getItem('myaccountenter'))
    console.log('profileAstatus homepage cache', Cache.getItem('profileAstatus'))
    console.log('profileDstatus cache', Cache.getItem('profileDstatus'))
    console.log('profileEstatus cache', Cache.getItem('profileEstatus'))
    console.log('profileFstatus cache', Cache.getItem('profileFstatus'))
    console.log('profAevade homepage cache', Cache.getItem('profAevade'))
    console.log('profDevade homepage cache', Cache.getItem('profDevade'))
    console.log('profEevade homepage cache', Cache.getItem('profEevade'))
    console.log('profFevade homepage cache', Cache.getItem('profFevade'))
    console.log('countyuser cache', Cache.getItem('countyuser'))
    console.log('stateuser cache', Cache.getItem('stateuser'))
    console.log('bannernoshow cache', Cache.getItem('bannernoshow'))
    console.log('cookiedenied cache', Cache.getItem('cookiedenied'))
  //  console.log('naturalWidth cache', Cache.getItem('naturalWidth'))
  //  console.log('naturalHeight cache', Cache.getItem('naturalHeight'))
 //   console.log('newWidth cache', Cache.getItem('newWidth'))
  //  console.log('newHeight cache', Cache.getItem('newHeight'))
  //  console.log('toggleBool7 cache', Cache.getItem('toggleBool7'))
    console.log('editstep5flag cache', Cache.getItem('editstep5flag'))
  }

  profilecompPartA="";profilecompPartD="";profilecompPartE=""; profilecompPartF="";
  profileAfag="";profileDfag="";profileEfag="";profileFfag=""
  usernoexist="";
//  refreshtab() {
//    if(Cache.getItem('profileAstatus')=="yes") {this.profileAfag="yes"}
 ////   if(Cache.getItem('profileDstatus')=="yes") {this.profileDfag="yes"}
 //   if(Cache.getItem('profileEstatus')=="yes") {this.profileEfag="yes"}
 //   if(Cache.getItem('profileFstatus')=="yes") {this.profileFfag="yes"}
 // }

  //get the flag whether StepF and StepA in the form sign-up steps are complete.
  async level2tabRest(){
    const user = await Auth.currentAuthenticatedUser();    const expiration = new Date().valueOf()
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/userdbapiname/m", paramsp1).then(response1 => { console.log(response1)
      this.profilecompPartF=response1.data[0].profilecompPartF;  this.profilecompPartA=response1.data[0].profilecompPartA;
      this.profilecompPartD=response1.data[0].profilecompPartD;this.profilecompPartE=response1.data[0].profilecompPartE;

   if(response1.data[0].profilecompPartA=='no') { Cache.setItem('profAevade', 'yes', { expires: expiration +60000 });}
      if(response1.data[0].profilecompPartD=='no')  {  Cache.setItem('profDevade', 'yes', { expires: expiration +60000 });}
      if(response1.data[0].profilecompPartE=='no')  {   Cache.setItem('profEevade', 'yes', { expires: expiration +60000 }); }
      if(response1.data[0].profilecompPartF=='no') {  Cache.setItem('profFevade', 'yes', { expires: expiration +60000 });}

      console.log('profilecompPartA database status', response1.data[0].profilecompPartA)
      console.log('profilecompPartD database status', response1.data[0].profilecompPartD)
      console.log('profilecompPartE database status', response1.data[0].profilecompPartE)
      console.log('profilecompPartF database status', response1.data[0].profilecompPartF)

      //get logged-in user cookie status, if cookie status is blank which means they have not responded to my banner
      if(response1.data[0].cookiestatus=='') {this.openSnackBar() ;Cache.setItem('bannernoshow', 'yes', { expires: expiration +1800000 });}
      if(response1.data[0].cookiestatus=='yes') { Cache.setItem('cookiedenied', 'yes', { expires: expiration +1800000 });
        console.log('cookiedenied cache', Cache.getItem('cookiedenied'))}
      Cache.setItem('stateuser', response1.data[0].stateuser, { expires: expiration +1800000 });

      ;}).catch(error => {console.log(error.response1);
  //    if(error.response1==undefined && this.authenticator.route=="authenticated")
      //   {const expiration = new Date().valueOf()
    //    this.router.navigate(['/Meetup/Step0']); Cache.setItem('usernoexist', 'yes', { expires: expiration +60000 });}


       const expiration = new Date().valueOf()
        if(error.response1==undefined) {this.usernoexist="yes";
          Cache.setItem('usernoexist', 'yes', { expires: expiration +60000 });}
      });
  }


  meetupflag=""; routeString=""; routeflag=""; midtermflag=""; routeflagmidterm="";

  meetupclickedI() {
    const expiration = new Date().valueOf()
      Cache.setItem('meetupenter', 'yes', { expires: expiration +1800000 });
      }

  midtermclickedI() {
    const expiration = new Date().valueOf()
    Cache.setItem('midtermenter', 'yes', { expires: expiration +1800000 });}

  myaccountclicked() {
    const expiration = new Date().valueOf()
    Cache.setItem('myaccountenter', 'yes', { expires: expiration +1800000 });
      }

  meetupclickedA() {this.meetupflag="yes"; this.midtermflag="no";
    const expiration = new Date().valueOf()
    Cache.setItem('meetupclicked', 'yes', { expires: expiration +1800000 }); //expires after 1minute, time is in ms.
  }

  midtermclickedA() {this.meetupflag="no"; this.midtermflag="yes";
    const expiration = new Date().valueOf()
    Cache.setItem('midtermclicked', 'yes', { expires: expiration +1800000 }); //expires after 1minute, time is in ms.
  }

  meetupclicked() {this.meetupflag="yes"; this.midtermflag="no";
    const expiration = new Date().valueOf()
    Cache.setItem('meetupclicked', 'yes', { expires: expiration +1800000 }); //expires after 1minute, time is in ms.

  }

  midtermclicked() {this.meetupflag="no"; this.midtermflag="yes";
    const expiration = new Date().valueOf()
    Cache.setItem('midtermclicked', 'yes', { expires: expiration +1800000 }); //expires after 1minute, time is in ms.
  }

  //when user is on tab1 and they refresh the screen, then below routeflag will ensure the tab1, tab2, tab3, tab6 toolbar will appear
  routeOnRefresh() {
    this.routeString=this.location.path();
    if (this.routeString == "/Meetup/Home" || this.routeString == "/Meetup/AllMembers" || this.routeString == "/Meetup/MutuallyAccepted" || this.routeString == "/Meetup/RequestReceived" || this.routeString == "/Meetup/RequestSent") {
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


  openSnackBar() {
      const snackBar =  this._snackBar.openFromComponent(CookiebannerComponent, {
        data: {preClose: () => {snackBar.dismiss()} } //pass a function to be called when you want to close the snackbar
      });
  }


}
