import { Component, OnInit,Renderer2 } from '@angular/core';
import {API, Auth, Cache} from "aws-amplify";
import {APIService} from "../../API.service";
import {Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-ad-b',
  templateUrl: './ad-b.component.html',
  styleUrls: ['./ad-b.component.css']
})
export class AdBComponent implements OnInit {

  constructor(private api: APIService,private router: Router,public authenticator: AuthenticatorService,private renderer: Renderer2) {
    if(Cache.getItem('profileAstatus')=="yes") {this.profileAflag="yes"; console.log("profileAflagsetinconsrructor")}
    if(Cache.getItem('profileFstatus')=="yes") {this.profileFflag="yes"}
 //   if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])}
    console.log("webpagevalue is", this.webpagevalue)
    console.log("whichtab is", this.whichtab)
    console.log("profileAflag is",this.profileAflag)
    if(Cache.getItem('cookiedenied')=="yes") {this.cookiedenied="yes"}
    if(Cache.getItem('stateuser')=="CA") {this.stateuserCA="yes"}
    this.webpageroute()
 //   this.delayonTop(500)
  }

  ngOnInit(): void {
    this.delayButton1(2000)
  this.ontop()
    this.randomgen()
  }

  async delayonTop(ms: number) {await new Promise(resolve => setTimeout(()=>this.ontop(), ms)).then();}

  webpagevalue="";whichtab="";profileFflag="";profileAflag=""
  delayflag1:boolean=true;
  cookiedenied=""; stateuserCA=""

  async webpageroute() {

    const user = await Auth.currentAuthenticatedUser();
//has the comcategory for whom the results need to be display as view results button was clicked and then there were two ad pages.
    this.api.Getwebpagevalue(user.attributes.sub).then((event2) => {this.webpagevalue=event2.comcateg as unknown as any;
    console.log("inside API call webpagevalue",this.webpagevalue)});
    //this gets the whichtab value and also blanks it.
    this.api.Getwhichtab(user.attributes.sub).then((event1) => {this.whichtab=event1.comcateg as unknown as any;
      console.log("inside API call whichtab",this.whichtab)});

 //   let paramsp5 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
  //  API.get("initializeuserarrayt4", "/index/m", paramsp5).then(response5 => {
  //    this.webpagevalue=response5.data[0].webpagevalue; console.log(this.webpagevalue)}).catch(error => {console.log(error.response5)});

    //   let paramsp70 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
//    API.get("datingapitabindext4", "/datingapitabindex/m", paramsp70).then(response70 => {
//       this.whichtab=response70.data[0].whichtab
//    }).catch(error => {console.log(error.response70);});
  }

  async delayButton1(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag1(), ms)).then();}
  setbuttonflag1() {this.delayflag1=false};

  selectorflag:number
//random number generator which chooses which view section to show
  randomgen() {//this finds a number between 1 and 6, inclusive of both
    let  min = Math.ceil(1);
    let   max = Math.floor(25);
    this.selectorflag=Math.floor(Math.random() * (max - min + 1) + min);
  }

  ontop(){try {const errorField = this.renderer.selectRootElement('.ontop_class');errorField.scrollIntoView();} catch (err) {}}


}
