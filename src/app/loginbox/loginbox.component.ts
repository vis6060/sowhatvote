import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import Amplify, {Auth, Predictions, Storage} from "aws-amplify";
import awsExports from "src/aws-exports";
import {API} from 'aws-amplify';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../big5parta/big5parta.component";
import {APIService, DatinguserdbStaging} from "../API.service";

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.css']
})
export class LoginboxComponent implements OnInit {

  user: CognitoUserInterface | undefined;
  authState: AuthState;

  emaildisplay=""
  public dealsPer1: Array<DatinguserdbStaging>;  public dealsPer3: Array<DatinguserdbStaging>; public dealsPer5: Array<DatinguserdbStaging>;

  router: Router;
  constructor(public authenticator: AuthenticatorService, private route: ActivatedRoute,private api: APIService,_router: Router) {
    Amplify.configure(awsExports);this.router = _router;
  }

  ngOnInit(): void {
    this.showexistingprofile()
    this.showemail();
  }

  //amplify authenticator box
  async showemail() { const user = await Auth.currentAuthenticatedUser();this.emaildisplay=user.attributes.email;  console.log('attributes:', user.attributes);}



  //tab2: unsubscribe from matchup service
  unsubscribematchingme = "";
  async boxevent4(event:any) {
    const user = await Auth.currentAuthenticatedUser();
    this.unsubscribematchingme="yes"
    console.log(this.unsubscribematchingme)
    const paramsp = {body: {userid: user.attributes.sub, unsubscribematchingme:this.unsubscribematchingme}}
    API.put("datingapitest4", "/userdbapiage", paramsp).then(response => {console.log("success")

    ;}).catch(error => {console.log(error.response);});
  }

  unsubflag="";  unsubflag1=""
  //allow the user to re-subscribe to meetup service
  async editunsub() {this.unsubflag="yes"}

  //store the latest status whether user wants to unsubsribe and re-initialize with latest itemids the array
  substatus="";
  async unsubstore() {
    this.unsubflag1="yes"
    const user = await Auth.currentAuthenticatedUser();
    const paramsp1b = {body: {userid: user.attributes.sub, unsubscribematchingme:this.substatus}}
    API.put("datingapitest4", "/userdbapiage", paramsp1b).then(response1b => {console.log("success1b");}).catch(error => {console.log(error.response1b)});

    //substatus blank value from user input means we need to resume matchup service and load a new latest array of itemids in 1A, 1B, 1C tabs
    if (this.substatus=="") {
      //intialize tab1A same county users
      //need both county and state filter as same county name is used across states
      this.api.ListDatinguserdbStagingsOneBigArray1A(user.attributes.sub,this.countyuser,{stateuser: {eq:this.stateuser },
        userid: {ne: user.attributes.sub}, unsubscribematchingme: {eq: ""}, profilecompPartF:{eq: "yes"} }).then((event1) => {});
      //initialize tab1B same state users. same state but different county
      this.api.ListDatinguserdbStagingsOneBigArray(user.attributes.sub,this.stateuser,{countyuser: {ne:this.countyuser },
        userid: {ne: user.attributes.sub}, unsubscribematchingme: {eq: ""}, profilecompPartF:{eq: "yes"}}).then((event1) => {});
      //initialize tab1C same rest of USA users
      this.api.ListDatinguserdbStagingsOneBigArray1C(user.attributes.sub, "yes",{stateuser: {ne: this.stateuser},userid: {ne: user.attributes.sub},
        unsubscribematchingme: {eq: ""}}).then((event1) => {});
    }
  }

  //tab1: meetup settings - user can edit the sections and view all the data they entered
  zipuserentered = "";  agestore1="";  genderstore1=""; educationstore1=""; occup=""; industrylevel2="";
  loyalty:0; profilename="";  newWidth=""; newHeight=""; origWidth=""; origHeight=""; url:string;

  facebookbusername = ""; userdescription="";
  s3file=''; //if the user uploads no image, then the default "no image" picture is shown
  industrylevel1= {} as User;

  mentoragree = false;  menteeagree = false; makemoneyside = false; veteran = false;  emailshareagree = false;

  profilecompPartF="";

  countyuser=""; stateuser=""; readyflag="";

  async showexistingprofile() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/userdbapiemail/m", paramsp1).then(response1 =>
    { console.log(response1);
      Storage.get(response1.data[0].s3file).then( res => {this.url=res; console.log(res);
        this.newWidth=response1.data[0].newWidth; this.newHeight=response1.data[0].newHeight;
        this.readyflag="yes"});
       console.log(response1.data[0].s3file)
      this.zipuserentered=response1.data[0].zipuserentered; this.agestore1=response1.data[0].age; this.genderstore1=response1.data[0].gender;
      this.educationstore1=response1.data[0].education; this.veteran=response1.data[0].veteran; this.mentoragree=response1.data[0].mentoragree;
      this.menteeagree=response1.data[0].menteeagree; this.makemoneyside=response1.data[0].makemoneyside; this.emailshareagree=response1.data[0].emailshareagree;
      this.profilename=response1.data[0].profilename; this.facebookbusername=response1.data[0].facebookbusername;
      this.userdescription=response1.data[0].userdescription; this.industrylevel1=response1.data[0].industrylevel1;
      this.industrylevel2=response1.data[0].industrylevel2; this.occup=response1.data[0].occup;

      //this gets the signed URL for new dimension image to display

      this.profilecompPartF=response1.data[0].profilecompPartF;
      this.unsubscribematchingme=response1.data[0].unsubscribematchingme;
      this.countyuser=response1.data[0].countyuser;
      this.stateuser=response1.data[0].stateuser;
      this.loyalty=response1.data[0].loyalty;
    }).catch(error => {console.log(error.response1)});
  }

//sets the flag that a user wants to edit the section. this flag is used to create a new button in that step screen- this button will return the user after edit back to MyAccount screen
  async editStep1() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp1b = {body: {userid: user.attributes.sub, editsection:"Step1Edit"}}
    API.put("datingapitest4", "/userdbapieditform", paramsp1b).then(response1b => {console.log("success1b");}).catch(error => {console.log(error.response1b)});
  }

  async editStep2() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp1b = {body: {userid: user.attributes.sub, editsection:"Step2Edit"}}
    API.put("datingapitest4", "/userdbapieditform", paramsp1b).then(response1b => {console.log("success1b");}).catch(error => {console.log(error.response1b)});
  }

  async editStep3() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp1b = {body: {userid: user.attributes.sub, editsection:"Step3Edit"}}
    API.put("datingapitest4", "/userdbapieditform", paramsp1b).then(response1b => {console.log("success1b");}).catch(error => {console.log(error.response1b)});
  }

  async editStep4() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp1b = {body: {userid: user.attributes.sub, editsection:"Step4Edit"}}
    API.put("datingapitest4", "/userdbapieditform", paramsp1b).then(response1b => {console.log("success1b");}).catch(error => {console.log(error.response1b)});
  }

  async editStep5() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp1b = {body: {userid: user.attributes.sub, editsection:"Step5Edit"}}
    API.put("datingapitest4", "/userdbapieditform", paramsp1b).then(response1b => {console.log("success1b");}).catch(error => {console.log(error.response1b)});
  }




}


