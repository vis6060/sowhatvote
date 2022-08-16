import {Component, Injectable, OnInit} from '@angular/core';
import Predictions from "@aws-amplify/predictions";
import Amplify, {API, Auth, Cache} from "aws-amplify";
import {DatePipe} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatStepperIntl} from "@angular/material/stepper";
import {APIService} from "../API.service";
import {ActivatedRoute, Router} from "@angular/router";
import awsExports from "../../aws-exports";

@Injectable()
export class StepperIntl extends MatStepperIntl {
  override optionalLabel = 'Optional Label';
}


@Component({
  selector: 'app-big5parte',
  templateUrl: './big5parte.component.html',
  styleUrls: ['./big5parte.component.css'],
  providers: [DatePipe, {provide: MatStepperIntl, useClass: StepperIntl}],
})
export class Big5parteComponent implements OnInit {

  router: Router;
  constructor(public datepipe: DatePipe, private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl, private api: APIService, private route: ActivatedRoute,_router: Router) {
    Amplify.configure(awsExports);this.router = _router;}


  ngOnInit(): void {
    this.prefifthFormGroup = this._formBuilder.group({prefifthCtrl: ['', Validators.required],});
    this.fifthFormGroup = this._formBuilder.group({fifthCtrl: ['', Validators.required],});
    this.sixthFormGroup = this._formBuilder.group({sixthCtrl: ['', Validators.required],});
    this.movenextpage()
  }

  //refreshes the browser upon button click of next or dislike or connectme
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  movenextpage() { if(Cache.getItem('profileEstatus')=="yes") {this.router.navigate(['/Meetup/Step5'])}}


  toggleBool6= "true";
  profilename="";

  fifthFormGroup: FormGroup; prefifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;

  //ensure profile name is not obscene
  unsafetext2='';
  async nameevent(event:any) {
    // @ts-ignore
    Predictions.interpret({
      text: {
        source: {
          text: this.profilename,
          language: "en"
        },
        // @ts-ignore
        type: "SENTIMENT"
      }
    })
      // @ts-ignore
      .then(response => {
        //   console.log({response})
        console.log(response.textInterpretation.sentiment?.predominant) //this synatax will extract the sentiment Neutral, Mixed from the response object
        if (response.textInterpretation.sentiment?.predominant=='NEGATIVE') {
          console.log("yes")
          this.unsafetext2="yestext"
        } else {this.unsafetext2="notext"} //this else statement will remove the message to update the description.

        if(response.textInterpretation.sentiment?.predominant!='NEGATIVE') {
          this.namestore()
        }
      })
      // @ts-ignore
      .catch(err => console.log({ err }));
  };

  async namestore() {
    const user = await Auth.currentAuthenticatedUser();
    console.log(this.userdescription);
    const paramspD = {body: {userid: user.attributes.sub, profilename:this.profilename}}
    API.put("datingapitest4", "/userdbapiname", paramspD).then(responseD => {console.log("successD");}).catch(error => {console.log(error.responseD);});
  }

//stores the facebook username in backend
  facebookbusername = ""; unsafetext1='';
  async boxevent(event:any) {
    // @ts-ignore
    Predictions.interpret({
      text: {
        source: {
          text: this.facebookbusername,
          language: "en"
        },
        // @ts-ignore
        type: "SENTIMENT"
      }
    })
      // @ts-ignore
      .then(response => {
        //   console.log({response})
        console.log(response.textInterpretation.sentiment?.predominant) //this synatax will extract the sentiment Neutral, Mixed from the response object
        if (response.textInterpretation.sentiment?.predominant=='NEGATIVE') {
          console.log("yes")
          this.unsafetext1="yestext"
        } else {this.unsafetext1="notext"} //this else statement will remove the message to update the description.

        if(response.textInterpretation.sentiment?.predominant!='NEGATIVE') {
          this.facebookstore()
        }
      })
      // @ts-ignore
      .catch(err => console.log({ err }));
  }

  async facebookstore() {
    const user = await Auth.currentAuthenticatedUser();
    const paramspC = {body: {userid: user.attributes.sub, facebookbusername:this.facebookbusername}}
    API.post("datingapitest4", "/userdbapiemail", paramspC).then(responseC => {console.log("successC");}).catch(error => {console.log(error.responseC);});
  }

  //store the description backend and run predicitions on it
  userdescription="";
  unsafetext='';
  async boxevent1(event:any) {
    // @ts-ignore
    Predictions.interpret({
      text: {
        source: {
          text: this.userdescription,
          language: "en"
        },
        // @ts-ignore
        type: "SENTIMENT"
      }
    })
      // @ts-ignore
      .then(response => {
        //   console.log({response})
        console.log(response.textInterpretation.sentiment?.predominant) //this synatax will extract the sentiment Neutral, Mixed from the response object
        if (response.textInterpretation.sentiment?.predominant=='NEGATIVE') {
          console.log("yes")
          this.unsafetext="yestext"
        } else {this.unsafetext="notext"} //this else statement will remove the message to update the description.

        if(response.textInterpretation.sentiment?.predominant!='NEGATIVE') {
          this.descriptionstore()
        }
      })
      // @ts-ignore
      .catch(err => console.log({ err }));
  };

  async descriptionstore() {
    const user = await Auth.currentAuthenticatedUser();
    console.log(this.userdescription);
    const paramspD = {body: {userid: user.attributes.sub, userdescription:this.userdescription}}
    API.put("datingapitest4", "/userdbapipic", paramspD).then(responseD => {console.log("successD");}).catch(error => {console.log(error.responseD);});
  }

  async checkallunsafe() {
    console.log(this.unsafetext); console.log(this.unsafetext1); console.log(this.unsafetext2);
    if(this.unsafetext=="yestext" ||this.unsafetext1=="yestext" || this.unsafetext2=="yestext" ) {
      this.toggleBool6="true"
    } else if(this.unsafetext=="notext" && this.unsafetext1=="notext" && this.unsafetext2=="notext" ) {
      this.toggleBool6 = "false"; this.geteditStep4()
    }
  }

  //record that Section E is complete.
  async seccompleteE() {
    const expiration = new Date().valueOf()
    Cache.setItem('profileEstatus', 'yes', { expires: expiration +1800000 }); //expires after 30minutes, time is in ms.

    const user = await Auth.currentAuthenticatedUser();
    const paramsp3 = {body: {userid: user.attributes.sub, seccomplete:"profilecompPartE"}}
    API.post("datingapitest4", "/userdbapiname", paramsp3).then(response3 => {console.log("success3");}).catch(error => {console.log(error.response3);});
  }

  editstep4flag="";
  async geteditStep4() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1a = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub,editsection:"Step4Edit"} };
    API.get("datingapitest4", "/userdbapieditform/m", paramsp1a).then(response1a =>
    {this.editstep4flag=response1a.data[0].Step4Edit;}).catch(error => {console.log(error.response1a)});
  }

}
