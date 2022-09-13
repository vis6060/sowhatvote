import { Component, OnInit,Renderer2 } from '@angular/core';
import {API, Auth, Cache} from "aws-amplify";
import {APIService} from "../../API.service";
import {Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-ad-a',
  templateUrl: './ad-a.component.html',
  styleUrls: ['./ad-a.component.css']
})
export class AdAComponent implements OnInit {


  constructor(public authenticator: AuthenticatorService,private renderer: Renderer2) {
  // if(Cache.getItem('')!=null) {Cache.removeItem("");}
 //   if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])} //SEO crawlers can then access the html conetents
    if(Cache.getItem('cookiedenied')=="yes") {this.cookiedenied="yes"}
    if(Cache.getItem('stateuser')=="CA") {this.stateuserCA="yes"}
    this.delayonTop(500)
  }

  ngOnInit(): void {
    this.randomgen()

    this.delayButton1(2000)
  }

  async delayonTop(ms: number) {await new Promise(resolve => setTimeout(()=>this.ontop(), ms)).then();}


  webpagevalue="";whichtab=""; profileFflag="";profileAflag=""
  webpageobtained=""; whichobtained=""; delayflag1:boolean=true;

  cookiedenied=""; stateuserCA=""

  async delayButton1(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag1(), ms)).then();}
  setbuttonflag1() {this.delayflag1=false};

  selectorflag:number
//random number generator which chooses which view section to show
   randomgen() {//this finds a number between 1 and 28, inclusive of both
  let  min = Math.ceil(1);
  let   max = Math.floor(28);
     this.selectorflag=Math.floor(Math.random() * (max - min + 1) + min);
   }

  ontop(){try {const errorField = this.renderer.selectRootElement('.ontop_class');errorField.scrollIntoView();} catch (err) {}}


}
