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

  }

  ngOnInit(): void {
    this.webpageroute()
  }

  webpagevalue="";whichtab=""; profileFflag="";profileAflag=""

  async webpageroute() {
    if(Cache.getItem('profileAstatus')=="yes") {this.profileAflag="yes"}
    if(Cache.getItem('profileFstatus')=="yes") {this.profileFflag="yes"}
    const user = await Auth.currentAuthenticatedUser();
//has the comcategory for whom the results need to be display as view results button was clicked and then there were two ad pages.
    this.api.Getwebpagevalue(user.attributes.sub).then((event2) => {this.webpagevalue=event2.comcateg as unknown as any;});
    //this gets the whichtab value and also blanks it.
    this.api.Getwhichtab(user.attributes.sub).then((event1) => {this.whichtab=event1.comcateg as unknown as any;});
}

}
