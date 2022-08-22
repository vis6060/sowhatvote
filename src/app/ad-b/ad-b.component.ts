import { Component, OnInit } from '@angular/core';
import {API, Auth, Cache} from "aws-amplify";
import {APIService} from "../API.service";

@Component({
  selector: 'app-ad-b',
  templateUrl: './ad-b.component.html',
  styleUrls: ['./ad-b.component.css']
})
export class AdBComponent implements OnInit {

  constructor(private api: APIService,) {
    if(Cache.getItem('profileAstatus')=="yes") {this.profileAflag="yes"; console.log("profileAflagsetinconsrructor")}
    if(Cache.getItem('profileFstatus')=="yes") {this.profileFflag="yes"}
  }

  ngOnInit(): void {
    this.webpageroute()
    this.delayButton1(2000)

  }

  webpagevalue="";whichtab="";profileFflag="";profileAflag=""
  delayflag1:boolean=true;

  async webpageroute() {

    const user = await Auth.currentAuthenticatedUser();
//has the comcategory for whom the results need to be display as view results button was clicked and then there were two ad pages.
    this.api.Getwebpagevalue(user.attributes.sub).then((event2) => {this.webpagevalue=event2.comcateg as unknown as any;});
    //this gets the whichtab value and also blanks it.
    this.api.Getwhichtab(user.attributes.sub).then((event1) => {this.whichtab=event1.comcateg as unknown as any;});

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

}
