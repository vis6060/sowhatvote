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
  //  this.openSnackBar()
  }

  clicked1:boolean;clicked2:boolean; banner=""

  async mimicmidtermclick() {
    const expiration = new Date().valueOf()
    Cache.setItem('midtermenter', 'yes', {expires: expiration + 1800000});
  }

  async donotsellstore() {
    const user = await Auth.currentAuthenticatedUser();
    if(this.authenticator.route=="authenticated") {
      const paramspN = {body: {userid:user.attributes.sub}}
      API.post("datingapitest4", "/cookie", paramspN).then(responseN => {console.log("successN");}).catch(error => {console.log(error.responseN);});
    }
  }

  openSnackBar() {
    if(this.banner=="yes") {
    const snackBar =  this._snackBar.openFromComponent(CookiebannerComponent, {
      data: {preClose: () => {snackBar.dismiss()} } //pass a function to be called when you want to close the snackbar
    });}
  }



}
