import { Component, OnInit } from '@angular/core';
import {API, Auth, Cache} from "aws-amplify";
import {APIService} from "../API.service";

@Component({
  selector: 'app-ad-a',
  templateUrl: './ad-a.component.html',
  styleUrls: ['./ad-a.component.css']
})
export class AdAComponent implements OnInit {

  constructor(private api: APIService,) {
  // if(Cache.getItem('')!=null) {Cache.removeItem("");}
    if(Cache.getItem('profileAstatus')=="yes") {this.profileAflag="yes"}
    if(Cache.getItem('profileFstatus')=="yes") {this.profileFflag="yes"}
  }

  ngOnInit(): void {
    this.webpageroute()
    this.randomgen()
  }

  webpagevalue="";whichtab=""; profileFflag="";profileAflag=""

  async webpageroute() {
    const user = await Auth.currentAuthenticatedUser();
//has the comcategory for whom the results need to be display as view results button was clicked and then there were two ad pages.
    this.api.Getwebpagevalue(user.attributes.sub).then((event2) => {this.webpagevalue=event2.comcateg as unknown as any;});
    //this gets the whichtab value and also blanks it.
    this.api.Getwhichtab(user.attributes.sub).then((event1) => {this.whichtab=event1.comcateg as unknown as any;});
}

selectorflag:number
//random number generator which chooses which view section to show
   randomgen() {//this finds a number between 1 and 10, inclusive of both
  let  min = Math.ceil(1);
  let   max = Math.floor(3);
     this.selectorflag=Math.floor(Math.random() * (max - min + 1) + min);
   }



}
