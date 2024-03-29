import {Component, Inject, OnInit} from '@angular/core';
import {API, Auth, Cache} from "aws-amplify";
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-cookiebanner',
  templateUrl: './cookiebanner.component.html',
  styleUrls: ['./cookiebanner.component.css']
})
export class CookiebannerComponent implements OnInit {

  constructor(public authenticator: AuthenticatorService,
    //@ts-ignore-
    @Inject(MAT_SNACK_BAR_DATA) public data
  ) {
 //   Cache.clear();
  }

  ngOnInit(): void {
  }

  clicked1:boolean;clicked2:boolean

  bannernoshowf() {
    const expiration = new Date().valueOf()
    if(this.authenticator.route!="authenticated") {
      Cache.setItem('bannernoshow', 'yes', {expires: expiration + 1800000}); //43,200sec are in 12hrs
    }
  }

  dismiss(){
    this.data.preClose(); //access preClose function when you want to close snackbar
  }

  //cookiestatus set to yes meaning permission is denied to store user info
  async donotsellstoreYes() {
    //for a non-logged user set the cache, so it can be used in Community1 and Community2 pages
    const expiration = new Date().valueOf()
     Cache.setItem('cookiedenied', 'yes', { expires: expiration +1800000 });
    // for a logged in user, set the cookiestatus one time.
    const user = await Auth.currentAuthenticatedUser();
    if(this.authenticator.route=="authenticated") {
      const paramspN = {body: {userid:user.attributes.sub}}
      API.put("datingapitest4", "/cookie", paramspN).then(responseN => {console.log("successN");}).catch(error => {console.log(error.responseN);});
    }
  }

  //cookiestatus set to no meaning permission is granted to store user info
  async donotsellstoreNo() {
    const user = await Auth.currentAuthenticatedUser();
    if(this.authenticator.route=="authenticated") {
      const paramspN = {body: {userid:user.attributes.sub}}
      API.post("datingapitest4", "/cookie", paramspN).then(responseN => {console.log("successN");}).catch(error => {console.log(error.responseN);});
    }
  }

}
