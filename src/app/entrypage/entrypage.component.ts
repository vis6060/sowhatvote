import { Component, OnInit } from '@angular/core';
import {API, Auth, Cache} from "aws-amplify";
import {MatSnackBar} from '@angular/material/snack-bar';
import {CookiebannerComponent} from "../cookiebanner/cookiebanner.component";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrls: ['./entrypage.component.css']
})
export class EntrypageComponent implements OnInit {

  constructor(public authenticator: AuthenticatorService, private _snackBar: MatSnackBar) {
  //  if(Cache.getItem('bannernoshow')=="yes") {this.banner="yes"}
    if(Cache.getItem('myaccountenter')=="yes") {Cache.removeItem("myaccountenter"); location.reload()}
  }

  ngOnInit(): void {
    //if user is not authenticated, open the snackbar this way
    if(this.authenticator.route!="authenticated") { this.openSnackBar() }
  }

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



}
