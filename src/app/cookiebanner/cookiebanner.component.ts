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

  changemind() {
    const expiration = new Date().valueOf()
    Cache.setItem('bannernoshow', 'yes', {expires: expiration + 60000}); //43,200sec are in 12hrs
  }

  dismiss(){
    this.data.preClose(); //access preClose function when you want to close snackbar
  }

  //cookiestatus set to yes meaning permission is denied to store user info
  async donotsellstoreYes() {
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
