import {Component, OnInit, ViewEncapsulation, NgModule} from '@angular/core';
import  {API, Auth} from "aws-amplify";
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private readonly location: Location) {}

  ngOnInit(): void {
    this.level2tabRest()
    this.routeOnRefresh()
    this.routeOnRefreshmidterm()
  }

  profilecompPartA="";profilecompPartB="";profilecompPartC="";profilecompPartD="";profilecompPartE=""; profilecompPartF="";

  //get the flag whether StepF and StepA in the form sign-up steps are complete.

  //get the flag whether StepF and StepA in the form sign-up steps are complete.
  async level2tabRest(){
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/userdbapiname/m", paramsp1).then(response1 => {
      this.profilecompPartF=response1.data[0].profilecompPartF;  this.profilecompPartA=response1.data[0].profilecompPartA;
      this.profilecompPartB=response1.data[0].profilecompPartB;this.profilecompPartC=response1.data[0].profilecompPartC;
      this.profilecompPartD=response1.data[0].profilecompPartD;this.profilecompPartE=response1.data[0].profilecompPartE;
      ;}).catch(error => {console.log(error.response1)});
  }

  meetupflag=""; routeString=""; routeflag=""; midtermflag=""; routeflagmidterm="";

  meetupclicked() {this.meetupflag="yes"; this.midtermflag="no";}

  midtermclicked() {this.meetupflag="no"; this.midtermflag="yes";}

  //when user is on tab1 and they refresh the screen, then below routeflag will ensure the tab1, tab2, tab3, tab6 toolbar will appear
  routeOnRefresh() {
    this.routeString=this.location.path();
    if (this.routeString == "/Meetup/Home" || this.routeString == "/Meetup/Tab1" || this.routeString == "/Meetup/Tab2" || this.routeString == "/Meetup/Tab3" || this.routeString == "/Meetup/Tab6") {
      this.routeflag = "yes"
    }
  }

  routeOnRefreshmidterm() {
    this.routeString=this.location.path();
    if (this.routeString == "/Midterm/InState" || this.routeString == "Midterm/AllUSA") {
      this.routeflagmidterm = "yes"
    }
  }




}
