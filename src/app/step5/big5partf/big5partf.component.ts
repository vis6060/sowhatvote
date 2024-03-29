import {Component, Injectable, OnInit} from '@angular/core';
import Predictions, {AmazonAIPredictionsProvider} from '@aws-amplify/predictions';
//Amplify.addPluggable(new AmazonAIPredictionsProvider());
import Amplify, {API, Auth, Cache, Storage} from "aws-amplify";
import {APIService,DatinguserdbStaging} from "../../API.service";
import {DatePipe} from "@angular/common";
import {FormBuilder} from "@angular/forms";
import {MatStepperIntl} from "@angular/material/stepper";
import {ActivatedRoute, Router} from "@angular/router";
import awsExports from "../../../aws-exports";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Injectable()
export class StepperIntl extends MatStepperIntl {
  override optionalLabel = 'Optional Label';
}


@Component({
  selector: 'app-big5partf',
  templateUrl: './big5partf.component.html',
  styleUrls: ['./big5partf.component.css'],
  providers: [DatePipe, {provide: MatStepperIntl, useClass: StepperIntl}],
})


export class Big5partfComponent implements OnInit {


  constructor(public datepipe: DatePipe, private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl, private api: APIService, private route: ActivatedRoute, private router: Router,public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
    if(Cache.getItem('profileEstatus')=="yes") {Cache.removeItem("profileEstatus");location.reload();}
    if(Cache.getItem('profileFstatus')=="yes") { this.reloadscreenblankit="yes"}
    if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])}
  }

  ngOnInit(): void {
    this.delaygetedit(100)
    this.getstatecounty()
    this.movenextpage()
  }

  async delaygetedit(ms: number) {await new Promise(resolve => setTimeout(()=>this.geteditStep5(), ms)).then(()=>console.log("fired"));}

  //refreshes the browser upon button click of next or dislike or connectme
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  locationreload() {  location.reload();}
  movenextpage() { if(Cache.getItem('profileFstatus')=="yes") {this.seccompleteF();
  this.initializetabindex(); this.initializetabs1(); this.dimensionstore()
  }}

  public dealsPer1: Array<DatinguserdbStaging>;  public dealsPer3: Array<DatinguserdbStaging>; public dealsPer5: Array<DatinguserdbStaging>;

  toggleBool7= "true"; toggleBool10=""
  reloadscreenblankit=""
  newWidth=0; newHeight=0; origWidth=0; origHeight=0;

  //listens to the file being uploaded on the front-end and then passes the filename to backend for prediction to runs it unsafe content magic.
  s3file='no_image.png'; //if the user uploads no image, then the default "no image" picture is shown
 olds3file="";
  userstore="";
  unsafe='';
  unsafem='';
  picm=''; sizebig=""; invalidfileextension="";
  url:string; urlflag="" //signed url to the image stored in s3
  async changeEvent(event:any) {const user = await Auth.currentAuthenticatedUser();
    Amplify.addPluggable(new AmazonAIPredictionsProvider());
    this.userstore=user.attributes.sub;
    const { target: { files } } = event;
    const [file,] = files || [];
//checks if image size uploaded is less than 1MB. iphone and samsung can be 8MB in size
    if (event.target.files[0].size < 1000000) {

      await Predictions.identify({
        labels: {
          source: {
            file,
          },
          type: "UNSAFE"
        }
      })
        .then(response => {
          const { unsafe } = response; // boolean
          console.log (unsafe);

          Storage.put(this.userstore.concat(file.name.toString()), file).then( res1 => {
            Storage.get(this.userstore.concat(file.name.toString())).then( res => {this.getMeta(res);
              this.url=res; console.log(res);
      //        const expiration = new Date().valueOf()
      //        Cache.setItem('urlcache', res, { expires: expiration +900000 }); //expires after 15minutes, time is in ms.

            });
          })

          this.s3file = file.name;

          if (unsafe=="YES") {
            Storage.remove(file.name, file);
            this.unsafem="yesm"
          } else {this.picstore();  this.toggleBool7="false";
            const expiration = new Date().valueOf()
            Cache.setItem('toggleBool7',  this.toggleBool7, { expires: expiration +60000 });
            Cache.setItem('editstep5flag',  this.editstep5flag, { expires: expiration +60000 });
          }
        })
        .catch(err => { console.log({ err }); if(err.name="InvalidImageFormatException") {this.invalidfileextension="yes"}});
    }
    else {this.sizebig="yes"} //if size big then user needs to re-upload
  }

  //listen to the image being displayed
  getMeta(url1:string){ const expiration = new Date().valueOf()
    const img = new Image();
    img.addEventListener('load', (event) => {
      this.origWidth = img.naturalWidth; this.origHeight=img.naturalHeight;
      Cache.setItem('naturalWidth',  img.naturalWidth, { expires: expiration +60000 });
      Cache.setItem('naturalHeight', img.naturalHeight, { expires: expiration +60000 });

      if( img.naturalWidth>=img.naturalHeight) {
        this.newWidth=300; this.newHeight=img.naturalHeight/( img.naturalWidth/300);
        Cache.setItem('newWidth',  this.newWidth, { expires: expiration +60000 });
        Cache.setItem('newHeight', this.newHeight, { expires: expiration +60000 });
      } else if(img.naturalWidth<img.naturalHeight) {
        this.newHeight=300; this.newWidth= img.naturalWidth/(img.naturalHeight/300);
      Cache.setItem('newWidth',  this.newWidth, { expires: expiration +60000 });
       Cache.setItem('newHeight', this.newHeight, { expires: expiration +60000 });
      }
    });
    img.src = url1;
  }

//on clicking next button store the original and new width and height of image in the userdb table.
//    this.url=Cache.getItem('urlcache');
//       this.toggleBool10="yes"

  //this function is meant when a user wants to edit their profile pic. don't edit for main flow.
  async  picclick () {
    const user = await Auth.currentAuthenticatedUser();

    if( this.origWidth>this.origHeight) {
      this.newWidth=300; this.newHeight=this.origHeight/( this.origWidth/300);
      console.log(this.origWidth); console.log(this.origHeight);
      const paramsp1b = {body: {userid: user.attributes.sub, newWidth:this.newWidth, newHeight:this.newHeight}}
      API.post("datingapitest4", "/userdbapiloyal", paramsp1b).then(response1b => {console.log("success1b");}).catch(error => {console.log(error.response1b)});
    } else if(this.origWidth<this.origHeight) {
      this.newHeight=300; this.newWidth= this.origWidth/(this.origHeight/300);
      const paramsp1b = {body: {userid: user.attributes.sub, newWidth:this.newWidth, newHeight:this.newHeight}}
      API.post("datingapitest4", "/userdbapiloyal", paramsp1b).then(response1b => {console.log("success1b");}).catch(error => {console.log(error.response1b)});
    }
  }

  async dimensionstore() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp1b = {body: {userid: user.attributes.sub, newWidth:Cache.getItem('newWidth'), newHeight:Cache.getItem('newHeight')}}
    API.post("datingapitest4", "/userdbapiloyal", paramsp1b).then(response1b => {console.log("success1b dimension store");}).catch(error => {console.log(error.response1b)});

  }

  //stores the pic in S3 and record that Section F is complete and all secyion
  async picstore() {
    const user = await Auth.currentAuthenticatedUser();
    if( this.editstep5flag=="") {
    this.userstore=user.attributes.sub;
    const paramspE = {body: {userid: user.attributes.sub, s3file:this.userstore.concat(this.s3file.toString())}}
    API.post("datingapitest4", "/userdbapipic", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});
 } else {
      Storage.remove(this.olds3file);
      this.userstore=user.attributes.sub;
      const paramspE = {body: {userid: user.attributes.sub, s3file:this.userstore.concat(this.s3file.toString())}}
      API.post("datingapitest4", "/userdbapipic", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});
    }
  }

  countyuser=""; stateuser=""
  async getstatecounty() {
    const user = await Auth.currentAuthenticatedUser(); const expiration = new Date().valueOf()
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/userdbapimoney/m", paramsp1).then(response1 =>{

      Cache.setItem('countyuser', response1.data[0].countyuser, { expires: expiration +60000 });
      Cache.setItem('stateuser', response1.data[0].stateuser, { expires: expiration +60000 });

  }).catch(error => {console.log(error.responseE);});
  }

  //insert the entire array of itemids for newly created user
  async initializetabs1(){
    const user = await Auth.currentAuthenticatedUser();
      //inialitize the mat-tab-group selection index on dating display that tab1A first-time loads
      //intialize tab1A same county users
      //need both county and state filter as same county name is used across states
      this.api.ListDatinguserdbStagingsOneBigArray1A(user.attributes.sub,Cache.getItem('countyuser'),{stateuser: {eq:Cache.getItem('stateuser') },
        userid: {ne: user.attributes.sub}, unsubscribematchingme: {eq: ""}, profilecompPartF:{eq: "yes"} }).then((event1) => {console.log("onebigarray1A")});
      //initialize tab1B same state users. same state but different county
      this.api.ListDatinguserdbStagingsOneBigArray(user.attributes.sub,Cache.getItem('stateuser'),{countyuser: {ne:Cache.getItem('countyuser') },
        userid: {ne: user.attributes.sub}, unsubscribematchingme: {eq: ""}, profilecompPartF:{eq: "yes"}}).then((event1) => {console.log("onebigarray")});
      //initialize tab1C same rest of USA users
      this.api.ListDatinguserdbStagingsOneBigArray1C(user.attributes.sub, "yes",{stateuser: {ne: Cache.getItem('stateuser')},userid: {ne: user.attributes.sub},
        unsubscribematchingme: {eq: ""}}).then((event1) => {console.log("onebigarray1C")});

  }

  //save the flag that the user wants to edit their previous section selection
  editstep5flag="";
  async geteditStep5() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1a = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub,editsection:"Step5Edit"} };
    API.get("datingapitest4", "/userdbapieditform/m", paramsp1a).then(response1a =>
    {this.editstep5flag=response1a.data[0].Step5Edit; this.olds3file=response1a.data[0].s3file}).catch(error => {console.log(error.response1a)});
  }

  //initialize the tabindex that tab1A always loads first-time user enters the Dating service.
  async initializetabindex() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp2 = {body: {userid: user.attributes.sub, searchactedids:[], whichtab:""}} //place itemid in index0 position of tab2
    API.post("datingapitabindext4","/datingapitabindex", paramsp2).then(response2 => {console.log("success2 initializetabindex");
    }).catch(error => {console.log(error.response2);});
  }

  //record that Section F is complete.
  async seccompleteF() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp3 = {body: {userid: user.attributes.sub, seccomplete:"profilecompPartF"}}
    API.post("datingapitest4", "/userdbapiname", paramsp3).then(response3 => {console.log("success3");
      this.router.navigate(['/Community1'])
    }).catch(error => {console.log(error.response3);});
  }

  async seccompleteflag() {
    const expiration = new Date().valueOf()
    Cache.setItem('profileFstatus', 'yes', { expires: expiration +1800000 }); //expires after 30minutes as user might be reading the Communty1 and Community2 ads.
    //these are set for 30min, so in case user wants to make a change then the right way is for them to come to MyAccount screen and then edit sections. But, A flag has to be there for 30min as maybe Commnity1, Community2 and US Senate tabs code depends on this flag being alive
  }

}
