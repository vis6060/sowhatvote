import { Component, OnInit } from '@angular/core';
import {API, Auth, Cache} from "aws-amplify";
import {APIService} from "../API.service";
import {Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-ad-a',
  templateUrl: './ad-a.component.html',
  styleUrls: ['./ad-a.component.css']
})
export class AdAComponent implements OnInit {


  constructor(private api: APIService,private router: Router,public authenticator: AuthenticatorService) {
  // if(Cache.getItem('')!=null) {Cache.removeItem("");}
 //   if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])} //SEO crawlers can then access the html conetents
  }

  ngOnInit(): void {
    this.randomgen()
    this.delayButton1(2000)
  }

  webpagevalue="";whichtab=""; profileFflag="";profileAflag=""
  webpageobtained=""; whichobtained=""; delayflag1:boolean=true;

  async delayButton1(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag1(), ms)).then();}
  setbuttonflag1() {this.delayflag1=false};

  selectorflag:number
//random number generator which chooses which view section to show
   randomgen() {//this finds a number between 1 and 6, inclusive of both
  let  min = Math.ceil(1);
  let   max = Math.floor(6);
     this.selectorflag=Math.floor(Math.random() * (max - min + 1) + min);
   }



}
