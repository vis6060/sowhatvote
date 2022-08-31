import {Component, Inject, OnInit} from '@angular/core';
import {Cache} from "aws-amplify";
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cookiebanner',
  templateUrl: './cookiebanner.component.html',
  styleUrls: ['./cookiebanner.component.css']
})
export class CookiebannerComponent implements OnInit {

  constructor(
    //@ts-ignore-
    @Inject(MAT_SNACK_BAR_DATA) public data
  ) {
 //   Cache.clear();
  }

  ngOnInit(): void {
  }

  clicked1:boolean;clicked2:boolean

  changemind() { this.clicked1=true;
    const expiration = new Date().valueOf()
    Cache.setItem('bannernoshow', 'yes', {expires: expiration + 60000}); //43,200sec are in 12hrs
  }

  dismiss(){
    this.data.preClose(); //access preClose function when you want to close snackbar
  }

}
