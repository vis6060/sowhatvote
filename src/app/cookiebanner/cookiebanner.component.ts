import { Component, OnInit } from '@angular/core';
import {Cache} from "aws-amplify";

@Component({
  selector: 'app-cookiebanner',
  templateUrl: './cookiebanner.component.html',
  styleUrls: ['./cookiebanner.component.css']
})
export class CookiebannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clicked1:boolean;clicked2:boolean

  changemind() { this.clicked1=true;
    const expiration = new Date().valueOf()
    Cache.setItem('bannernoshow', 'yes', {expires: expiration + 60000}); //43,200sec are in 12hrs
  }



}
