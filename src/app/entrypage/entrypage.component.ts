import { Component, OnInit } from '@angular/core';
import {Cache} from "aws-amplify";
import {MatSnackBar} from '@angular/material/snack-bar';
import {CookiebannerComponent} from "../cookiebanner/cookiebanner.component";

@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrls: ['./entrypage.component.css']
})
export class EntrypageComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {
    if(Cache.getItem('bannernoshow')=="yes") {this.banner="yes"}
  }

  ngOnInit(): void {
  //  this.openSnackBar()
  }

  clicked1:boolean;clicked2:boolean; banner=""

  async mimicmidtermclick() {
    const expiration = new Date().valueOf()
    Cache.setItem('midtermenter', 'yes', {expires: expiration + 60000});
  }

  openSnackBar() {
    this._snackBar.openFromComponent(CookiebannerComponent);
  }

  // if(Cache.getItem('bannernoshow')=="yes") {this.banner="yes"}

}
