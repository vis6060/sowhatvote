import { Component, OnInit } from '@angular/core';

import {API, Auth, Cache} from "aws-amplify";
import {MatSnackBar} from '@angular/material/snack-bar';
import {CookiebannerComponent} from "../cookiebanner/cookiebanner.component";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrls: ['./entrypage.component.css'],
})
export class EntrypageComponent implements OnInit {

  constructor(public authenticator: AuthenticatorService, private _snackBar: MatSnackBar) {
  //  if(Cache.getItem('bannernoshow')=="yes") {this.banner="yes"}
    if(Cache.getItem('myaccountenter')=="yes") {Cache.removeItem("myaccountenter"); location.reload()}
  }

  ngOnInit(): void {
    //if user is not authenticated, open the snackbar this way
  this.delaySnack(2000)
    this.randomgen()
    this.delayfunc(100); this.delayfunc(100+(7000*1)); this.delayfunc(100+(7000*2));
  //this.delayfunc(0+(7000*2)); this.delayfunc(0+(7000*3)); this.delayfunc(0+(7000*4)); this.delayfunc(0+(7000*5)); this.delayfunc(0+(7000*6)); this.delayfunc(0+(7000*7)); this.delayfunc(0+(7000*8)); this.delayfunc(0+(7000*9)); this.delayfunc(0+(7000*10)); this.delayfunc(0+(7000*11));
  }
//so, that there is time for the API call to load which checks whether the user is authenticated or not
  async delaySnack(ms: number) {await new Promise(resolve => setTimeout(()=>this.openSnackBar(), ms)).then();}


  clicked1:boolean;clicked2:boolean; banner=""

  async mimicmidtermclick() {
    const expiration = new Date().valueOf()
    Cache.setItem('midtermenter', 'yes', {expires: expiration + 1800000});
  }

  //cookiestatus set to yes meaning permission is denied to store user info
  async donotsellstore() {
    //for a non-logged user set the cache, so it can be used in Community1 and Community2 pages
    const expiration = new Date().valueOf()
    Cache.setItem('cookiedenied', 'yes', { expires: expiration +1800000 });
    //for logged in user set the cookiestatus in db
    const user = await Auth.currentAuthenticatedUser();
    if(this.authenticator.route=="authenticated") {
      const paramspN = {body: {userid:user.attributes.sub}}
      API.put("datingapitest4", "/cookie", paramspN).then(responseN => {console.log("successN");}).catch(error => {console.log(error.responseN);});
    }
  }

//this is the snackbar specifically for the situation when user is not logged in.
  openSnackBar() {
    if(Cache.getItem('bannernoshow')!="yes" && this.authenticator.route!="authenticated") {
    const snackBar =  this._snackBar.openFromComponent(CookiebannerComponent, {
      data: {preClose: () => {snackBar.dismiss()} } //pass a function to be called when you want to close the snackbar
    }); }
  }

  selectorflag:number
//random number generator which chooses which quote to show
  randomgen() {//this finds a number between 1 and 6, inclusive of both
    let  min = Math.ceil(1);
    let   max = Math.floor(8);
    this.selectorflag=Math.floor(Math.random() * (max - min + 1) + min);
  }

  //animations for entry banner


  delayfunc(t:number) {
 //   for (let i = 0; i < 1; i++) {
      this.delayButton1(t)
      this.delayButton2(t+500)
      this.delayButton3(t+1000)
      this.delayButton4(t+1500)
      this.delayButton5(t+2000)
      this.delayButton6(t+2500)
      this.delayButton7(t+3000)
      this.delayButton8(t+3500)
      this.delayButton9(t+4000)
     // t=t+7000
//    }
  }

  delayflag1=false;   delayflag2=false; delayflag3=false; delayflag4=false; delayflag5=false; delayflag6=false; delayflag7=false; delayflag8=false; delayflag9=false;delayflag10=true
  async delayButton1(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag1(), ms)).then();}
  setbuttonflag1() {this.delayflag1=true;this.delayflag2=false;this.delayflag3=false;this.delayflag4=false;this.delayflag5=false;this.delayflag6=false;this.delayflag7=false;this.delayflag8=false;this.delayflag9=false;this.delayflag10=false;};
  async delayButton2(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag2(), ms)).then();}
  setbuttonflag2() {this.delayflag1=false;this.delayflag2=true;this.delayflag3=false;this.delayflag4=false;this.delayflag5=false;this.delayflag6=false;this.delayflag7=false;this.delayflag8=false;this.delayflag9=false;this.delayflag10=false;};
  async delayButton3(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag3(), ms)).then();}
  setbuttonflag3() {this.delayflag1=false;this.delayflag2=false;this.delayflag3=true;this.delayflag4=false;this.delayflag5=false;this.delayflag6=false;this.delayflag7=false;this.delayflag8=false;this.delayflag9=false;this.delayflag10=false;};
  async delayButton4(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag4(), ms)).then();}
  setbuttonflag4() {this.delayflag1=false;this.delayflag2=false;this.delayflag3=false;this.delayflag4=true;this.delayflag5=false;this.delayflag6=false;this.delayflag7=false;this.delayflag8=false;this.delayflag9=false;this.delayflag10=false;};
  async delayButton5(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag5(), ms)).then();}
  setbuttonflag5() {this.delayflag1=false;this.delayflag2=false;this.delayflag3=false;this.delayflag4=false;this.delayflag5=true;this.delayflag6=false;this.delayflag7=false;this.delayflag8=false;this.delayflag9=false;this.delayflag10=false;};
  async delayButton6(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag6(), ms)).then();}
  setbuttonflag6() {this.delayflag1=false;this.delayflag2=false;this.delayflag3=false;this.delayflag4=false;this.delayflag5=false;this.delayflag6=true;this.delayflag7=false;this.delayflag8=false;this.delayflag9=false;this.delayflag10=false;};
  async delayButton7(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag7(), ms)).then();}
  setbuttonflag7() {this.delayflag1=false;this.delayflag2=false;this.delayflag3=false;this.delayflag4=false;this.delayflag5=false;this.delayflag6=false;this.delayflag7=true;this.delayflag8=false;this.delayflag9=false;this.delayflag10=false;};
  async delayButton8(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag8(), ms)).then();}
  setbuttonflag8() {this.delayflag1=false;this.delayflag2=false;this.delayflag3=false;this.delayflag4=false;this.delayflag5=false;this.delayflag6=false;this.delayflag7=false;this.delayflag8=true;this.delayflag9=false;this.delayflag10=false;};
  async delayButton9(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag9(), ms)).then();}
  setbuttonflag9() {this.delayflag1=false;this.delayflag2=false;this.delayflag3=false;this.delayflag4=false;this.delayflag5=false;this.delayflag6=false;this.delayflag7=false;this.delayflag8=false;this.delayflag9=true;this.delayflag10=false;};


}
