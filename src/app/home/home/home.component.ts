import {Component, Injectable, OnInit,ViewChild,Renderer2} from '@angular/core';
import awsExports from 'src/aws-exports';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {API, Cache} from 'aws-amplify';
import Amplify, {Auth, Storage} from "aws-amplify";
import { ActivatedRoute,Router } from '@angular/router';
import {AuthenticatorService} from "@aws-amplify/ui-angular";

import {APIService, DatinguserdbStaging, PaginatedDatinguserdbStagings} from "../../API.service";
import {DatePipe} from "@angular/common";
import {MatStepperIntl} from "@angular/material/stepper";
import {MatAccordion} from '@angular/material/expansion';
import {v4 as uuid} from "uuid";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

export interface User {
  name: string;
}

@Injectable()
export class StepperIntl extends MatStepperIntl {
  // the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe, {provide: MatStepperIntl, useClass: StepperIntl}],
})
export class HomeComponent implements OnInit {

  router: Router;
  constructor(public authenticator: AuthenticatorService,public datepipe: DatePipe, private _matStepperIntl: MatStepperIntl,  private _formBuilder: FormBuilder, private api: APIService, private route: ActivatedRoute, _router: Router, private renderer: Renderer2) {
    Amplify.configure(awsExports); this.router = _router;
    if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])}
    if(Cache.getItem('profileFstatus')=="yes") {Cache.removeItem("profileFstatus");location.reload();}
    if(Cache.getItem('meetupenter')=="yes") {Cache.removeItem("meetupenter");} //incase user directly enters house link, then they are taken to login and StepA completion page and then Senate homepage. the midtermenter will ensure this routing.

  }

  ngOnInit(): void {
    //meetup code
    this.zeroFormGroup = this._formBuilder.group({});
    this.initializenewitemidslastlogin() //cannot have any delays to it
    //mentor code
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
    //initialize the tab1, tab2, tab3 arrays with itemids
    this.homeinitialize1A();
   // keep this commented out   this.homeinitialize1B();  this.homeinitialize1C(); this.homeinitialize3(); this.homeinitialize2()
    this.delayitemssearched(250)
    this.delaytab1B(500)
       this.delaytab1C(1000)
       this.delaytab3(1500)
    this.delaytab2(2000)
    this.fifthFormGroup = this._formBuilder.group({fifthCtrl: ['', Validators.required],});
  }
//speed test on amplify domain. basic page load time without any of the above initialize1A and delay statements is 3.40sec. only inserting intialize 1A the time to load text is then 4.40sec and the time to fully load the 1A picture is 6.40sec.
  //speed test on amplify domain. total time after all the above initalize and delay statements it is stll 6.40sec.
  async delaytab1B(ms: number) {
    await new Promise(resolve => setTimeout(()=>this.homeinitialize1B(), ms)).then(()=>console.log("fired"));
  }
  async delaytab1C(ms: number) {
    await new Promise(resolve => setTimeout(()=>this.homeinitialize1C(), ms)).then(()=>console.log("fired"));
  }
  async delaytab3(ms: number) {
    await new Promise(resolve => setTimeout(()=>this.homeinitialize3(), ms)).then(()=>console.log("fired"));
  }
  async delaytab2(ms: number) {
    await new Promise(resolve => setTimeout(()=>this.homeinitialize2(), ms)).then(()=>console.log("fired"));
  }
  async delayitemssearched(ms: number) {
    await new Promise(resolve => setTimeout(()=>this.itemsalreadyviewed(), ms)).then(()=>console.log("fired"));
  }

  zeroFormGroup: FormGroup;
  public dealsPerArray: Array<DatinguserdbStaging>= []; public dealsPerArrayloyalty: Array<DatinguserdbStaging>= []; public dealsPerfacebook : Array<DatinguserdbStaging>= [];
  ageselection=""; genderselection=""; occupselection=""; indusselection=""; stateuser=""; stateitemid=""; stateselection=""; stateselection1="";stateselection2=""; stateselectionloyalty="";
  countyuser=""; countyitemid=""; countyselection=""; veteranselection=""; mentorselection=""; facebookselection="";
  toggleBool0: boolean=true; toggleBool2: boolean=true; toggleBool1: boolean=false; toggleBool3: boolean=false; toggleBoolState: boolean=false; toggleBoolAgain1: boolean=true; toggleBoolAgain2: boolean=true;
  unsub=""; displayflag="";  nodisplay1="";nodisplay2="";removefields=""; displayflagloyalty=""; displayflagfacebook="";
  InitialSearchArraySize=""; FilteredSearchArraySize=""; FilteredDisplaySearchArraySize=0; searchactedids=[];
  newWidthA=''; newHeightA=''; newWidthAfacebook=''; newHeightAfacebook=''; newWidthAloyalty=''; newHeightAloyalty=''; urlarray=[""]; urlarrayloyalty=[""];
  widtharray=[""]; heightarray=[""]; widtharrayloyalty=[""]; heightarrayloyalty=[""];
  urlA:string; urlAloyalty:string; urlAfacebook:string; //signed url to the image stored in s3
  clicked0: boolean=false;  clicked1: boolean=false;clicked2: boolean=false;clicked3: boolean=false;clicked4: boolean=false;clicked5: boolean=false;clicked6: boolean=false;clicked7: boolean=false;clicked8: boolean=false;clicked9: boolean=false;clicked10: boolean=false;clicked11: boolean=false;clicked12: boolean=false;clicked13: boolean=false;clicked14: boolean=false;clicked15: boolean=false;clicked16: boolean=false;clicked17: boolean=false;clicked18: boolean=false;clicked19: boolean=false;clicked20: boolean=false;
  interdate:any; tabviewed=""; tempitemid=""; weektext="";
  industrylevel1= {} as User; interesttemp=[]
  arraytabs=[];arrayindexes=[];  arraytabsfacebook=[];arrayindexesfacebook=[];//section3 -top5 search indexes and which tabs the itemids belong to
  indextab13B6C=0; tab13B6Cname=""; //loyalty tab3B and 6C indexes output from the pipieline
  clicked50: boolean=false; clicked51: boolean=false; clicked52: boolean=false; clicked53: boolean=false; clicked54: boolean=false; clicked55: boolean=false;
  fifthFormGroup: FormGroup; nomatchingfacebook="";
  profilecompPartF="";
  cookiedenied="";stateuserCA="";

  //All disable scenarios: 1) Initial display: Step2a(Meetup) and Step2b(Mentor) nothing entered, then disable search1 and search2 buttons.
  //2) Step2a something entered, then, enable Search1 button and disable entire Step2b form fields and for occup field use the removefields flag to remove it from HTML view
  //3) Step2b something entered, then, enable Search2 button and disable entire Step2a form fields
  //4) Once Search1 or Search2 button clicked, disable Step2a and Step2b form, disable Search1 and Search2 buttons, disable State field, and enable either Search again1 button or Search Again2 button, depending on whether Search1 or Search2 buttton were clicked
  //atleast one search criteria has been entered so the search now button is now enabled
  togglesearchfields(event:any) {this.toggleBool0=false; this.toggleBool2=true; this.toggleBool3=true; this.removefields="yes"}
  togglesearchfields1(event:any) {this.toggleBool0=true; this.toggleBool1=true; this.toggleBool2=false; console.log("entered")}

  //search results display in the main section website
  @ViewChild(MatAccordion) accordion: MatAccordion;
  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }

  //refreshes the browser upon button click of next or dislike or connectme
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  //once a day executed. since, last recorded date all new users will be appended at begining of existing tab1A, tab1B, tab1C arrays
  async initializenewitemidslastlogin() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/userdbapimoney/m", paramsp1).then(response1a => {
      this.stateuser=response1a.data[0].stateuser; this.countyuser=response1a.data[0].countyuser;
      //user has reached the homepage first time in the day, so update in userdatabase the last login date.
      this.interdate = response1a.data[0].lastmeetupviewdatecompare;
      if(this.interdate < new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"})==true) {
        //update tab1A of this user with new itemids since their last login date
        this.api.ListDatinguserdbStagingsOneBigArray1A(user.attributes.sub,response1a.data[0].countyuser,{stateuser: {eq:response1a.data[0].stateuser },
          userid: {ne: user.attributes.sub}, unsubscribematchingme: {eq: ""}, profilecompPartF:{eq: "yes"}, timestamp:{gt:response1a.data[0].lastmeetupviewdatecompare}}).then((event1) => {});
        //update tab1B of this user with new itemids since their last login date
        this.api.ListDatinguserdbStagingsOneBigArray(user.attributes.sub,response1a.data[0].stateuser,{countyuser: {ne:response1a.data[0].countyuser },
          userid: {ne: user.attributes.sub}, unsubscribematchingme: {eq: ""}, profilecompPartF:{eq: "yes"},timestamp:{gt:response1a.data[0].lastmeetupviewdatecompare}}).then((event1) => {});
        //update tab1C of this user with new itemids since their last login date
        this.api.ListDatinguserdbStagingsOneBigArray1C(user.attributes.sub, "yes",{stateuser: {ne: response1a.data[0].stateuser},userid: {ne: user.attributes.sub},
          unsubscribematchingme: {eq: ""},timestamp:{gt:response1a.data[0].lastmeetupviewdatecompare}}).then((event1) => {});
        //calculate weekly average users and
        //insert the new login date in both UNIX and normal date forms in userdb table for next time
        let todaydate = new Date(); var oneJan =  new Date(todaydate.getFullYear(), 0, 1); console.log("week entered1")
        // @ts-ignore
        var numberOfDays =  Math.floor((todaydate - oneJan) / (24 * 60 * 60 * 1000)); var currentweek = Math.ceil(( todaydate.getDay() + numberOfDays) / 7);
        var currentyear=new Date(). getFullYear(); this.weektext="Week"; console.log("week entered2")
        const paramsp2 = {body: {userid: user.attributes.sub, lastmeetupviewdatecompare:new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),
            lastmeetupviewdate:new Date().valueOf(), weeknumber:this.weektext.concat(JSON.stringify(currentweek)).concat(" ",JSON.stringify(currentyear))}}
        API.put("datingapitest4", "/userdbapitime", paramsp2).then(response2 => {}).catch(error => {console.log(error.response2);});
      }
      if(Cache.getItem('cookiedenied')=="yes") {this.cookiedenied="yes"}
      if(Cache.getItem('stateuser')=="CA") {this.stateuserCA="yes"}
    }).catch(error => {console.log(error.response1a);});
  }

  //  user clicks on "next" button without interacting with connect me or dislike buttons (i.e. they just viewed profile, then, move the itemid into the appropariate tab based on if condition
  //var2 is the itemid being displayed.  var3 is the county of the itemid being displayed.
  async nextprofile(var2:string,var3:string) {
    const user = await Auth.currentAuthenticatedUser();
    //reset the interest array in case it was clicked and then nextprofile was clicked, so nothing to store.
    this.categ=new Array();
    //if#1: State selected as mandatory, but irrelevant as County selected as Yes. Age blank. Gender Blank (a only). unsubcribe and not equal to user will always be there
    //need to ensure both state and county of itemid is same as that of the user prior to saying tab1A is the correct home for the itemid.
    if (this.stateselection==this.stateuser && this.countyuser==var3) {//tab1A API
      const paramsp2 = {body: {userid: user.attributes.sub, itemidmove:var2, itemattr:"itemidstab1A"}} //moved itemid to end of array
      API.put("datingapi1At4", "/itemapitab1Adisp", paramsp2).then(response2 => {console.log("success2");}).catch(error => {console.log(error.response2);});
    }
    else if (this.stateselection==this.stateuser) {//tab1B API
      const paramsp2 = {body: {userid: user.attributes.sub, itemidmove:var2, itemattr:"itemidstab1B"}} //moved itemid to end of array
      API.put("datingapitest4", "/itemapitabsmove", paramsp2).then(response2 => {console.log("success2");}).catch(error => {console.log(error.response2);});
    }
    else if (this.stateselection!=this.stateuser) {//tab1C API
      const paramsp2 = {body: {userid: user.attributes.sub, itemidmove:var2, itemattr:"itemidstab1C"}} //moved itemid to end of array
      API.put("datingapi1Ct4", "/itemapitab1Cdisp", paramsp2).then(response2 => {console.log("success2");}).catch(error => {console.log(error.response2);});
    }
  }

  // Dislike button part1 code: tab1B when a user clicks on "dislike" button, move the itemid from tab1B to tab5.
  //Dislike button part2 code: populate interaction table that userid has made the selection to dislike itemid.eventtype:"dislikeselected"
  async disliketab51Apb(var3:string) {
    const user = await Auth.currentAuthenticatedUser();
    //reset the interest array in case it was clicked and then nextprofile was clicked, so nothing to store.
    this.categ=new Array();
    this.api.UpdateDislikeButton(user.attributes.sub,var3,"homedislike",uuid(),new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),new Date().valueOf() ).then((event1) => {})
  }

  //store the reason for connect in array
  categ=new Array();
  async categ1clicked() {this.categ.push("Dating or make new friends with similar interests");};
  async categ2clicked() {this.categ.push("Looking for a Mentor in my occupation/industry/education")};
  async categ3clicked() {this.categ.push("Interested in training a Mentee in my occupation/industry/education")};
  async categ4clicked() {this.categ.push("Looking for like-minded people to serve our community")};
  async categ5clicked() {this.categ.push("Other")};

  async connectmetab61Apb(var1:string) {
    const user = await Auth.currentAuthenticatedUser();
    //moves the itemid from tab1A or tab1B or tab1C to tab6 in itemtracking table when "connect me" button is clicked. tabname:"itemidstab6"
    //populate interaction table with new userid and itemid, with reason for interest, and category of interaction
    //reset the interest array to empty once the interest have been stored in interaction table with a succesful or failing API call
    //for each friendsrequestsent interaction by the user they get 20 loyalty points
    this.interesttemp=this.categ as [];
    this.api.UpdateConnectButton(user.attributes.sub,var1,"homeconnect",uuid(),this.interesttemp,new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),new Date().valueOf() ).then((event1) => {
      console.log(event1); this.categ=new Array();}).catch(error => {console.log(error.response1b);this.categ=new Array();});
  }

  //get the array of itemids the user has already seen
  async itemsalreadyviewed() {
    const user = await Auth.currentAuthenticatedUser();
    //get itemids already viewed
    let paramsp1b = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitabindext4", "/datingapitabindex/m", paramsp1b).then(response1b =>
    { this.searchactedids=response1b.data[0].searchactedids
    }).catch(error => {console.log(error.response1b)});
  }

//put itemid in searchactedids array that the user has interacted with (connect, dislike, next) the user has already seen, so next time search results they don't get same itemid
  async putitemalreadyviewed(var1:string) {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp1b = {body: {userid: user.attributes.sub, itemidput:var1}}
    API.put("datingapitabindext4", "/datingapisearch", paramsp1b).then(response1b => {console.log("success1b");
    }).catch(error => {console.log(error.response1b);});
  }

  //remove itemid from tab1A or tab1B or tab1C using the if condition in executesearchsec1 function to inform which tab api to use
  //var1 is the itemid being displayed.  var3 is the county of the itemid being displayed.
  async removeitemidtabs(var1:String, var3:String) {
    const user = await Auth.currentAuthenticatedUser();
    //if#1: State selected as mandatory, but irrelevant as County selected as Yes. Age blank. Gender Blank (a only). unsubcribe and not equal to user will always be there
    if (this.stateuser==this.stateselectionloyalty && this.countyuser==var3) {//tab1A API
      //this finds the index of the itemid and removes the element from that index in pipeline
      this.api.RemoveDatingitemtrackingStagingtab1A(user.attributes.sub,this.tempitemid).then((event1) => {})
    }
    else if (this.stateuser==this.stateselectionloyalty) {//tab1B API
      //this finds the index of the itemid and removes the element from that index in pipeline
      this.api.RemoveDatingitemtrackingStagingtab1B(user.attributes.sub,this.tempitemid).then((event1) => {})
    }
    else if (this.stateuser!=this.stateselectionloyalty) {//tab1C API
      //this finds the index of the itemid and removes the element from that index in pipeline
      this.api.RemoveDatingitemtrackingStagingtab1C(user.attributes.sub, this.tempitemid).then((event1) => {})
    }
  }

  //var1 is the itemid being displayed. var2 is state of itemid displayed loyalty section.  var3 is the county of the itemid being displayed. var4 is the index counter of the ngfor and so will tell us which is the arrayindex for say an element in itemidstab2 field
  async removeitemidtabsloyalty(var1:String, var3:String, var4: number) {
    const user = await Auth.currentAuthenticatedUser();
    this.tempitemid=var1 as string;
    this.api.GetLoyaltytab3B6Cindex(user.attributes.sub, this.tempitemid).then((event1) =>
    { console.log(event1);
      this.indextab13B6C=event1.indextab13B6C as number; this.tab13B6Cname=event1.tab13B6Cname as string;
      if(this.tab13B6Cname=="itemidstab3B"){//tab3B API
        const paramsp9p = {body: {userid:user.attributes.sub , itemattr:"itemidstab3B", index:this.indextab13B6C}}
        API.put("datingapitest4", "/itemapitab6Cdisli", paramsp9p).then(response9p => {console.log("success9p");}).catch(error => {console.log(error.response9p);});
      }
      else if(this.tab13B6Cname=="itemidstab6C"){//tab6C API
        const paramsp9q = {body: {userid:user.attributes.sub , itemattr:"itemidstab6C", index:this.indextab13B6C}}
        API.put("datingapitest4", "/itemapitab6Cdisli", paramsp9q).then(response9q => {console.log("success9q");}).catch(error => {console.log(error.response9q);});
      }
      //tab2 API
      else  if(this.arraytabs[var4]=="itemidstab2"){
        const paramsp9e = {body: {userid:user.attributes.sub , itemattr:"itemidstab2", index:this.arrayindexes[var4]}}
        API.put("datingapitest4", "/itemapitab6Cdisli", paramsp9e).then(response9e => {console.log("success9e");}).catch(error => {console.log(error.response9e);});
      }
      //tab6B API
      else    if(this.arraytabs[var4]=="itemidstab6B"){
        const paramsp9f = {body: {userid:user.attributes.sub , itemattr:"itemidstab6B", index:this.arrayindexes[var4]}}
        API.put("datingapitest4", "/itemapitab6Cdisli", paramsp9f).then(response9f => {console.log("success9f");}).catch(error => {console.log(error.response9f);});
      }
      //tab3 API
      else    if(this.arraytabs[var4]=="itemidstab3"){
        const paramsp9g = {body: {userid:user.attributes.sub , itemattr:"itemidstab3", index:this.arrayindexes[var4]}}
        API.put("datingapitest4", "/itemapitab6Cdisli", paramsp9g).then(response9g => {console.log("success9g");}).catch(error => {console.log(error.response9g);});
      }
      //tab6 API
      else    if(this.arraytabs[var4]=="itemidstab6"){
        const paramsp9h = {body: {userid:user.attributes.sub , itemattr:"itemidstab6", index:this.arrayindexes[var4]}}
        API.put("datingapitest4", "/itemapitab6Cdisli", paramsp9h).then(response9h => {console.log("success9h");}).catch(error => {console.log(error.response9h);});
      }
      //tab5 API
      else    if(this.arraytabs[var4]=="itemidstab5"){
        const paramsp9i = {body: {userid:user.attributes.sub , itemattr:"itemidstab5", index:this.arrayindexes[var4]}}
        API.put("datingapitest4", "/itemapitab6Cdisli", paramsp9i).then(response9i => {console.log("success9i");}).catch(error => {console.log(error.response9i);});
      }
      //if#1: State selected as mandatory, but irrelevant as County selected as Yes. Age blank. Gender Blank (a only). unsubcribe and not equal to user will always be there
      else  if (this.stateuser==this.stateselectionloyalty && this.countyuser==var3) {//tab1A API
        //this finds the index of the itemid and removes the element from that index in pipeline
        this.api.RemoveDatingitemtrackingStagingtab1A(user.attributes.sub,this.tempitemid).then((event1) => {})
      }
      else if (this.stateuser==this.stateselectionloyalty) {//tab1B API
        //this finds the index of the itemid and removes the element from that index in pipeline
        this.api.RemoveDatingitemtrackingStagingtab1B(user.attributes.sub,this.tempitemid).then((event1) => {})
      }
      else if (this.stateuser!=this.stateselectionloyalty) {//tab1C API
        //this finds the index of the itemid and removes the element from that index in pipeline
        this.api.RemoveDatingitemtrackingStagingtab1C(user.attributes.sub,this.tempitemid).then((event1) => {})
      }     })
  }

//Meetup search coding. Deliver 5 search results at a time
  async executesearchsec1() {
    const user = await Auth.currentAuthenticatedUser();
    this.removefields="yes" //button toggle scenario: when search1 button clicked, industry and occup removefields flag will remove these input boxes from HTML view
    //z=state, a=county, b=age, c=gender
    //if#0: (r only) State selected as mandatory. county blank. age blank. gender blank. industry1 blank. occup blank. mentor blank. veteran blank.   unsubcribe and not equal to user will always be there
    if (this.stateselection!="" && this.countyselection=="" && this.ageselection=="" && this.genderselection=="" && this.indusselection=="" && this.occupselection=="" && this.mentorselection=="" && this.veteranselection=="") {
      this.api.AllDatinguserdbStagingsByStateIndus1(user.attributes.sub,this.stateselection.toString(), this.indusselection,"",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""}},100000).then((event1) =>
      { console.log(event1);console.log("if0 entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay1="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#1: (a only) State selected as mandatory, but irrelevant as County selected as Yes. Age blank. Gender Blank (a only). unsubcribe and not equal to user will always be there
    if (this.stateselection!="" && this.countyselection!="" && this.ageselection=="" && this.genderselection=="") {
      this.api.AllDatinguserdbStagingsByCountyAge1(user.attributes.sub,this.countyuser.toString(), this.ageselection,"",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""}},100000).then((event1) =>
      { console.log(event1);console.log("if#1 entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay1="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#2: (a and b) State selected as mandatory, but irrelevant as County selected as Yes. Age selected. Gender Blank. unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.countyselection!="" && this.ageselection!="" && this.genderselection=="") {
      this.api.AllDatinguserdbStagingsByCountyAge1(user.attributes.sub,this.countyuser.toString(),this.ageselection,"yes",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""} },100000).then((event1) =>
      { console.log(event1);console.log("if#2 entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay1="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }
    //if#3: (a, b and c) State selected as mandatory, but irrelevant as County selected as Yes. Age blank. Gender selected. unsubcribe and not equal to user will always be there
    else   if (this.stateselection!="" && this.countyselection!="" && this.ageselection=="" && this.genderselection!="") {
      this.api.AllDatinguserdbStagingsByCountyGender1(user.attributes.sub,this.countyuser.toString(), this.genderselection,"yes",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""}} ,100000).then((event1) =>
      { console.log(event1);console.log("if#3 entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay1="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }
    //if#4: (a, b and c) State selected as mandatory, but irrelevant as County selected as Yes. Age selected. Gender selected. unsubcribe and not equal to user will always be there
    else   if (this.stateselection!="" && this.countyselection!="" && this.ageselection!="" && this.genderselection!="") {
      this.api.AllDatinguserdbStagingsByCountyAge1(user.attributes.sub,this.countyuser.toString(),this.ageselection,"yes",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""},gender:{eq:this.genderselection} },100000).then((event1) =>
      { console.log(event1);console.log("if#4 entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay1="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }
    //if#5: (z, b and c) State selected as mandatory, County Blank. Age selected. Gender selected. unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.countyselection=="" && this.ageselection!="" && this.genderselection!="") {
      this.api.AllDatinguserdbStagingsByStateAge1(user.attributes.sub, this.stateselection.toString(), this.ageselection,"yes",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""}, gender:{eq:this.genderselection} },100000).then((event1) =>
      { console.log(event1); console.log("if#5 entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay1="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }
    //if#6: (z and b) State selected as mandatory, County Blank. Age selected. Gender Blank. unsubcribe and not equal to user will always be there
    else   if (this.stateselection!="" && this.countyselection=="" && this.ageselection!="" && this.genderselection=="") {
      this.api.AllDatinguserdbStagingsByStateAge1(user.attributes.sub,this.stateselection.toString(), this.ageselection,"yes",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""} },100000).then((event1) =>
      { console.log(event1); console.log("if#6 entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay1="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }
    //if#7: (z and c) State selected as mandatory, County Blank. Age Blank. Gender selected. unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.countyselection=="" && this.ageselection=="" && this.genderselection!="") {
      this.api.AllDatinguserdbStagingsByStateGender1(user.attributes.sub,this.stateselection.toString(),this.genderselection,"yes",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""}} ,100000).then((event1) =>
      { console.log(event1); console.log("if#7 entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay1="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }
  }

  //Mentor code Start
  //tier1 industry dropdown
  myControl = new FormControl();
  options: User[] = [{name: 'Agriculture, Forestry, Fishing, and Hunting'}, {name: 'Mining, Quarrying, and Oil and Gas Extraction'}, {name: 'Construction'}, {name: 'Manufacturing'}, {name: 'Wholesale Trade'}, {name: 'Retail Trade'}, {name: 'Transportation and Warehousing'}, {name: 'Utilities'}, {name: 'Software & Media (newspapers, motion pictures, data processing, internet publishing, telecommunications, etc.'}, {name: 'Finance and Insurance'}, {name: 'Real Estate and Rental and Leasing'}, {name: 'Professional, Scientific, and Technical Services'}, {name: 'Management of companies and enterprises'}, {name: 'Administrative and support and waste management services'}, {name: 'Educational Services'}, {name: 'Health Care and Social Assistance'}, {name: 'Arts, Entertainment, and Recreation'}, {name: 'Accommodation and Food Services'}, {name: 'Labor Unions, Other Services, Except Public Administration'}, {name: 'Public Administration'}, {name: 'Military'}, {name:'Unemployed, last worked 5 years ago or earlier or never worked'} ];
  filteredOptions: Observable<User[]>;

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  //assigns the value to industry variable only if it not blank
  async assignindusvalue(event:any) {if(this.industrylevel1.name!=undefined) {this.indusselection=this.industrylevel1.name;
    this.toggleBool2=false;this.toggleBool0=true; this.toggleBool1=true;}}

  //receives the occupation selection from the child component and assigns value only if it is not blank
  async addItem(newItem: string) {if(newItem!=undefined) {this.occupselection=JSON.parse(newItem);
    this.toggleBool2=false; this.toggleBool0=true; this.toggleBool1=true;}}

// Mentor/occup search coding. Deliver 5 search results at a time
  async executesearchsec2() {
    const user = await Auth.currentAuthenticatedUser();
    this.myControl.disable(); //this will disable industry input field when search button is clicked
    console.log(this.indusselection); console.log(this.occupselection);console.log(this.veteranselection); console.log(this.mentorselection)
//z=state, m=industrylevel1, n=occup, r=mentor, s=veteran
    //if#0:(state only) State selected as mandatory. county blank. age blank. gender blank. industry1 blank. occup blank. mentor blank. veteran blank.   unsubcribe and not equal to user will always be there
    if (this.stateselection!="" && this.countyselection=="" && this.ageselection=="" && this.genderselection=="" && this.indusselection=="" && this.occupselection=="" && this.mentorselection=="" && this.veteranselection=="") {
      this.api.AllDatinguserdbStagingsByStateIndus1(user.attributes.sub,this.stateselection.toString(), this.indusselection,"",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""}},100000).then((event1) =>
      { console.log(event1);console.log("if0 entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

//if#1X: (m only) State selected as mandatory.industry1 selected. occup blank. mentor blank. veteran blank.   unsubcribe and not equal to user will always be there
    if (this.stateselection!="" && this.indusselection!="" && this.occupselection=="" && this.mentorselection=="" && this.veteranselection=="") {
      this.api.AllDatinguserdbStagingsByStateIndus1(user.attributes.sub,this.stateselection.toString(), this.indusselection,"yes",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""}},100000).then((event1) =>
      { console.log(event1);console.log("if#1X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#2X: (n only) State selected as mandatory.industry1 blank. occup selected. mentor blank. veteran blank.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection=="" && this.occupselection!="" && this.mentorselection=="" && this.veteranselection=="") {
      this.api.AllDatinguserdbStagingsByOccupIndus1(user.attributes.sub, this.occupselection, this.indusselection,"",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""}, stateuser:{eq:this.stateselection}},100000).then((event1) =>
      { console.log(event1);console.log("if#2X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#3X: (r only) State selected as mandatory.industry1 blank. occup blank. mentor selected. veteran blank.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection=="" && this.occupselection=="" && this.mentorselection!="" && this.veteranselection=="") {
      this.api.AllDatinguserdbStagingsByStateIndus1(user.attributes.sub,this.stateselection.toString(), this.indusselection,"",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""}, mentoragree: {eq:"Yes"}},100000).then((event1) =>
      { console.log(event1);console.log("if#3X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#4X: (s only) State selected as mandatory.industry1 blank. occup blank. mentor blank. veteran selected.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection=="" && this.occupselection=="" && this.mentorselection=="" && this.veteranselection!="") {
      this.api.AllDatinguserdbStagingsByStateIndus1(user.attributes.sub,this.stateselection.toString(), this.indusselection,"",
        {userid: {ne:user.attributes.sub}, unsubscribematchingme:{eq:""}, veteran: {eq:"Yes"}},100000).then((event1) =>
      { console.log(event1);console.log("if#4X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#5X: (m and n) State selected as mandatory.industry1 selected. occup selected. mentor blank. veteran blank.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection!="" && this.occupselection!="" && this.mentorselection=="" && this.veteranselection=="") {
      this.api.AllDatinguserdbStagingsByOccupIndus1(user.attributes.sub,this.occupselection, this.indusselection,"yes",
        {userid: {ne:user.attributes.sub},unsubscribematchingme:{eq:""}, stateuser:{eq:this.stateselection}},100000).then((event1) =>
      { console.log(event1);console.log("if#5X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#6X: (m and r) State selected as mandatory.industry1 selected. occup blank. mentor selected. veteran blank.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection!="" && this.occupselection=="" && this.mentorselection!="" && this.veteranselection=="") {
      this.api.AllDatinguserdbStagingsByStateIndus1(user.attributes.sub,this.stateselection.toString(), this.indusselection,"yes",
        {userid: {ne:user.attributes.sub},unsubscribematchingme:{eq:""},mentoragree: {eq:"Yes"}},100000).then((event1) =>
      { console.log(event1);console.log("if#6X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#7X: (m and s) State selected as mandatory.industry1 selected. occup blank. mentor blank. veteran slected.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection!="" && this.occupselection=="" && this.mentorselection=="" && this.veteranselection!="") {
      this.api.AllDatinguserdbStagingsByStateIndus1(user.attributes.sub,this.stateselection.toString(), this.indusselection,"yes",
        {userid: {ne:user.attributes.sub},unsubscribematchingme:{eq:""},veteran: {eq:"Yes"}},100000).then((event1) =>
      { console.log(event1);console.log("if#7X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#8X: (n and r) State selected as mandatory.industry1 blank. occup selected. mentor selected. veteran blank.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection=="" && this.occupselection!="" && this.mentorselection!="" && this.veteranselection=="") {
      this.api.AllDatinguserdbStagingsByOccupIndus1(user.attributes.sub,this.occupselection, this.indusselection,"",
        {userid: {ne:user.attributes.sub},unsubscribematchingme:{eq:""}, stateuser:{eq:this.stateselection},mentoragree: {eq:"Yes"}},100000).then((event1) =>
      { console.log(event1);console.log("if#8X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#9X: (n and s) State selected as mandatory.industry1 blank. occup selected. mentor blank. veteran selected.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection=="" && this.occupselection!="" && this.mentorselection=="" && this.veteranselection!="") {
      this.api.AllDatinguserdbStagingsByOccupIndus1(user.attributes.sub,this.occupselection, this.indusselection,"",
        {userid: {ne:user.attributes.sub},unsubscribematchingme:{eq:""}, stateuser:{eq:this.stateselection},veteran: {eq:"Yes"}},100000).then((event1) =>
      { console.log(event1);console.log("if#9X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#10X: (r and s) State selected as mandatory.industry1 blank. occup blank. mentor selected. veteran selected.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection=="" && this.occupselection=="" && this.mentorselection!="" && this.veteranselection!="") {
      this.api.AllDatinguserdbStagingsByStateIndus1(user.attributes.sub,this.stateselection.toString(), this.indusselection,"",
        {userid: {ne:user.attributes.sub},unsubscribematchingme:{eq:""}, mentoragree: {eq:"Yes"},veteran: {eq:"Yes"}},100000).then((event1) =>
      { console.log(event1);console.log("if#10X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#11X: (m, n and r) State selected as mandatory.industry1 selected. occup selected. mentor selected. veteran blank.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection!="" && this.occupselection!="" && this.mentorselection!="" && this.veteranselection=="") {
      this.api.AllDatinguserdbStagingsByOccupIndus1(user.attributes.sub,this.occupselection, this.indusselection,"yes",
        {userid: {ne:user.attributes.sub},unsubscribematchingme:{eq:""}, stateuser:{eq:this.stateselection},mentoragree: {eq:"Yes"}},100000).then((event1) =>
      { console.log(event1);console.log("if#11X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#12X: (n, r and s) State selected as mandatory.industry1 blank. occup selected. mentor selected. veteran selected.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection=="" && this.occupselection!="" && this.mentorselection!="" && this.veteranselection!="") {
      this.api.AllDatinguserdbStagingsByOccupIndus1(user.attributes.sub,this.occupselection, this.indusselection,"",
        {userid: {ne:user.attributes.sub},unsubscribematchingme:{eq:""}, stateuser:{eq:this.stateselection},mentoragree: {eq:"Yes"},veteran: {eq:"Yes"} },100000).then((event1) =>
      { console.log(event1);console.log("if#12X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }

    //if#13X: (m, n, r and s) State selected as mandatory.industry1 selected. occup selected. mentor selected. veteran selected.   unsubcribe and not equal to user will always be there
    else  if (this.stateselection!="" && this.indusselection!="" && this.occupselection!="" && this.mentorselection!="" && this.veteranselection!="") {
      this.api.AllDatinguserdbStagingsByOccupIndus1(user.attributes.sub,this.occupselection, this.indusselection,"yes",
        {userid: {ne:user.attributes.sub},unsubscribematchingme:{eq:""}, stateuser:{eq:this.stateselection},mentoragree: {eq:"Yes"},veteran: {eq:"Yes"}},100000).then((event1) =>
      { console.log(event1);console.log("if#13X entered")
        this.dealsPerArray = event1.DatinguserdbStagings as DatinguserdbStaging[];
        this.FilteredSearchArraySize= event1.FilteredSearchArraySize; this.InitialSearchArraySize=event1.InitialSearchArraySize;
        console.log(this.dealsPerArray);
        if(this.dealsPerArray.length==0) {this.nodisplay2="yes";};
        //store the image url1, width1, height1, url2, width2, height2 in that order.
        for (let i = 0; i < this.dealsPerArray.length; i++) {
          Storage.get(this.dealsPerArray[i].s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
            this.newWidthA=this.dealsPerArray[i].newWidth; this.newHeightA=this.dealsPerArray[i].newHeight;
            this.urlarray[i]=this.urlA;
            this.widtharray[i]=this.newWidthA;
            this.heightarray[i]=this.newHeightA;
            if(i==this.dealsPerArray.length-1) {this.displayflag="yes";};
          })    }     })    }
  }

  //Section3 search: Top5 users with most SWV loyalty points shown once user hits the search button
  async executesearchsec3() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.AllDatinguserdbStagingsByStateLoyalty(user.attributes.sub, this.stateselectionloyalty,
      {userid: {ne:user.attributes.sub},unsubscribematchingme:{eq:""}},100000).then((event1) =>
    { console.log(event1);console.log("loyalty entered")
      this.dealsPerArrayloyalty = event1.DatinguserdbStagings as DatinguserdbStaging[];
      this.arraytabs=event1.arraytabs as []; this.arrayindexes=event1.arrayindexes as [];
      console.log(this.dealsPerArrayloyalty);
      console.log(this.arraytabs);
      console.log(this.arrayindexes);
      //store the image url1, width1, height1, url2, width2, height2 in that order.
      for (let i = 0; i < this.dealsPerArrayloyalty.length; i++) {
        Storage.get(this.dealsPerArrayloyalty[i].s3file).then( res => {this.urlAloyalty=res //this gets the signed url, which will be given to html
          this.newWidthAloyalty=this.dealsPerArrayloyalty[i].newWidth; this.newHeightAloyalty=this.dealsPerArrayloyalty[i].newHeight;
          this.urlarrayloyalty[i]=this.urlAloyalty;
          this.widtharrayloyalty[i]=this.newWidthAloyalty;
          this.heightarrayloyalty[i]=this.newHeightAloyalty;
          if(i==this.dealsPerArrayloyalty.length-1) {this.displayflagloyalty="yes";};
        })    }     })
  }

  //Section4 search: Facebook username specific search button
  async executesearchsec4() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.GetDatinguserdbStagingsfacebook(user.attributes.sub, this.facebookselection,
      {userid: {ne:user.attributes.sub},unsubscribematchingme:{eq:""}}).then((event1) =>
    { console.log(event1);console.log("facebook entered")
      this.dealsPerfacebook = event1.DatinguserdbStagings as DatinguserdbStaging[];
      this.arraytabsfacebook=event1.arraytabs as []; this.arrayindexesfacebook=event1.arrayindexes as [];
      console.log(this.dealsPerfacebook);
      console.log(this.arraytabsfacebook);
      console.log(this.arrayindexesfacebook);
      //store the image url1, width1, height1, url2, width2, height2 in that order.
      Storage.get(this.dealsPerfacebook[0].s3file).then( res => {this.urlAfacebook=res //this gets the signed url, which will be given to html
        this.newWidthAfacebook=this.dealsPerfacebook[0].newWidth; this.newHeightAfacebook=this.dealsPerfacebook[0].newHeight;
        this.displayflagfacebook="yes";
      })        }).catch(error => {console.log(error.response1); this.nomatchingfacebook="yes"})
  }

  //Tab1, Tab2, Tab3 display
  tab1Adisplayitemid1="string";  tab1Adisplayitemid2="string";  tab1Adisplayitemid3="string";  tab1Adisplayitemid4="string";
  tab1Bdisplayitemid1="string";  tab1Bdisplayitemid2="string";  tab1Bdisplayitemid3="string";  tab1Bdisplayitemid4="string";
  tab1Cdisplayitemid1="string";  tab1Cdisplayitemid2="string";  tab1Cdisplayitemid3="string";  tab1Cdisplayitemid4="string";
  tab2displayitemid1="string";  tab2displayitemid2="string";  tab2displayitemid3="string";
  tab3displayitemid1="string";  tab3displayitemid2="string";  tab3displayitemid3="string";
  tab1Anullflag=""; tab1Bnullflag=""; tab1Cnullflag=""; tab2nullflag=""; tab3nullflag="";
  newWidthhome81=''; newHeighthome81=''; urlhome81:string; newWidthhome82=''; newHeighthome82=''; urlhome82:string;
  newWidthhome83=''; newHeighthome83=''; urlhome83:string; newWidthhome84=''; newHeighthome84=''; urlhome84:string;
  newWidthhome85=''; newHeighthome85=''; urlhome85:string; newWidthhome86=''; newHeighthome86=''; urlhome86:string;
  newWidthhome87=''; newHeighthome87=''; urlhome87:string; newWidthhome88=''; newHeighthome88=''; urlhome88:string;
  newWidthhome89=''; newHeighthome89=''; urlhome89:string; newWidthhome90=''; newHeighthome90=''; urlhome90:string;
  public dealPer81: DatinguserdbStaging; public dealPer82: DatinguserdbStaging; public dealPer83: DatinguserdbStaging;
  public dealPer84: Array<DatinguserdbStaging>;public dealPer85: Array<DatinguserdbStaging>;public dealPer86: Array<DatinguserdbStaging>;
  public dealPer87: Array<DatinguserdbStaging>; public dealPer88: Array<DatinguserdbStaging>; public dealPer89: Array<DatinguserdbStaging>;
  public dealPer90: Array<DatinguserdbStaging>; public temparray: Array<DatinguserdbStaging> = [];
  public ngfortab3array: Array<DatinguserdbStaging> = []; public ngfortab2array: Array<DatinguserdbStaging> = [];
  homedisplays: String[]; urlhomearray=[""]; widthhomearray=[""]; heighthomearray=[""];
  urlhomearraytab3=[""]; widthhomearraytab3=[""]; heighthomearraytab3=[""]; urlhomearraytab2=[""]; widthhomearraytab2=[""]; heighthomearraytab2=[""];
  initializerflag=""; initializerflag1A=""; initializerflag1B=""; initializerflag1C=""; initializerflag2="";initializerflag3=""; initializerflag81=""; initializerflag82="";initializerflag83="";initializerflag84="";initializerflag85="";initializerflag86="";initializerflag87="";
  initializerflag88="";initializerflag89="";initializerflag90="";
  stepperlength=0;tab2length=0; tab3length=0;
  clicked100: boolean=false;  clicked101: boolean=false;clicked102: boolean=false;clicked103: boolean=false;clicked104: boolean=false;clicked105: boolean=false;clicked106: boolean=false;clicked107: boolean=false;clicked108: boolean=false;clicked109: boolean=false;clicked110: boolean=false;clicked111: boolean=false;clicked112: boolean=false;clicked113: boolean=false;clicked114: boolean=false;clicked115: boolean=false;clicked116: boolean=false;clicked117: boolean=false;clicked118: boolean=false;clicked119: boolean=false;clicked120: boolean=false;
  interestcateginittemp21:any; interestcateginittemp22:any; interestcateginittemp23:any; interestcateginit21:any;interestdateinit21:any; interdatetempinit21="";
  interestcateginit22:any;interestdateinit22:any; interdatetempinit22=""; interestcateginit23:any;interestdateinit23:any; interdatetempinit23="";
  interestcateginittemp31:any; interestcateginittemp32:any; interestcateginittemp33:any; interestcateginit31:any;interestdateinit31:any; interdatetempinit31="";
  interestcateginit32:any;interestdateinit32:any; interdatetempinit32=""; interestcateginit33:any;interestdateinit33:any; interdatetempinit33="";
  emailshareflag1=""; emailshareflag2=""; emailshareflag3="";

  //var2 is state of itemid being displayed. var3 is the county of the itemid being displayed. var4 is the index of the for loop in front-end, which will tell us which tabs itemid index need to remove
  async removehomeitemidtabs(var2:String, var3:String, var4:Number) {
    const user = await Auth.currentAuthenticatedUser();
    if (var2 == this.stateuser && this.countyuser == var3) {//tab1A API
      //this removes the itemid from the list
      const paramsp9e = {body: {userid:user.attributes.sub , index:var4}}
      API.put("datingapi1At4", "/itemapitab1Apost", paramsp9e).then(response9e => {console.log("success9e");
      }).catch(error => {console.log(error.response9e);});
    }
    else if (var2==this.stateuser) {//tab1B API
      const paramsp9f = {body: {userid:user.attributes.sub , index:var4}}
      API.put("datingapitest4", "/itemapitab6Cdisli", paramsp9f).then(response9f => {console.log("success9f");
      }).catch(error => {console.log(error.response9f);});
    }
    else if (var2!=this.stateuser) {//tab1C API
      const paramsp9g = {body: {userid:user.attributes.sub , index:var4}}
      API.put("datingapi1Ct4", "/itemapitab1Cpost1", paramsp9g).then(response9g => {console.log("success9g");
      }).catch(error => {console.log(error.response9g);});
    }
  }

  //var1 is the itemid being displayed.var2 is state of itemid being displayed.  var3 is the county of the itemid being displayed.
  async nexthomeprofile(var1:string, var2:string,var3:string) {
    const user = await Auth.currentAuthenticatedUser();
    //if#1: State selected as mandatory, but irrelevant as County selected as Yes. Age blank. Gender Blank (a only). unsubcribe and not equal to user will always be there
    //need to ensure both state and county of itemid is same as that of the user prior to saying tab1A is the correct home for the itemid.
    if (var2==this.stateuser && this.countyuser==var3) {//tab1A API
      const paramsp2 = {body: {userid: user.attributes.sub, itemidmove:var1, itemattr:"itemidstab1A"}} //moved itemid to end of array
      API.put("datingapi1At4", "/itemapitab1Adisp", paramsp2).then(response2 => {console.log("success2");}).catch(error => {console.log(error.response2);});
    }
    else if (var2==this.stateuser) {//tab1B API
      const paramsp2 = {body: {userid: user.attributes.sub, itemidmove:var1, itemattr:"itemidstab1B"}} //moved itemid to end of array
      API.put("datingapitest4", "/itemapitabsmove", paramsp2).then(response2 => {console.log("success2");}).catch(error => {console.log(error.response2);});
    }
    else if (var2!=this.stateuser) {//tab1C API
      const paramsp2 = {body: {userid: user.attributes.sub, itemidmove:var1, itemattr:"itemidstab1C"}} //moved itemid to end of array
      API.put("datingapi1Ct4", "/itemapitab1Cdisp", paramsp2).then(response2 => {console.log("success2");}).catch(error => {console.log(error.response2);});
    }
  }

  //obtain index 0 itemid from tab1A array
  async homeinitialize1A() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapi1At4", "/itemapitab1Adisp/m", paramsp1).then(response1 =>
    { console.log(response1);  this.tab1Adisplayitemid1=response1.data[0];   console.log(this.tab1Adisplayitemid1);
      if(this.tab1Adisplayitemid1!=null) {
        this.api.GetDatinguserdbStaging(this.tab1Adisplayitemid1).then((event81) => {console.log(event81);
          this.dealPer81 = event81 as DatinguserdbStaging
          Storage.get(event81.s3file).then( res81 => {this.urlhome81=res81;this.newWidthhome81=event81.newWidth; this.newHeighthome81=event81.newHeight})
          this.initializerflag1A="yes";});  } else {this.tab1Anullflag="yes"}       }).catch(error => {console.log(error.response1)})
  }

  //obtain index 0 itemid from tab1B array
  async homeinitialize1B() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp2 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapistan1/m", paramsp2).then(response2 =>
    { console.log(response2);  this.tab1Bdisplayitemid1=response2.data[0];   console.log(this.tab1Bdisplayitemid1);
      if(this.tab1Bdisplayitemid1!=null) {
        this.api.GetDatinguserdbStaging(this.tab1Bdisplayitemid1).then((event82) => {console.log(event82);
          this.dealPer82 = event82 as DatinguserdbStaging
          Storage.get(event82.s3file).then( res82 => {this.urlhome82=res82;this.newWidthhome82=event82.newWidth; this.newHeighthome82=event82.newHeight})
          this.initializerflag1B="yes";});  } else {this.tab1Bnullflag="yes"}       }).catch(error => {console.log(error.response2)})
  }

//obtain index 0 itemid from tab1C array
  async homeinitialize1C() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp3 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapi1Ct4", "/itemapitab1Cdisp/m", paramsp3).then(response3 =>
    { console.log(response3);  this.tab1Cdisplayitemid1=response3.data[0];   console.log(this.tab1Cdisplayitemid1);
      if(this.tab1Cdisplayitemid1!=null) {
        this.api.GetDatinguserdbStaging(this.tab1Cdisplayitemid1).then((event83) => {console.log(event83);
          this.dealPer83 = event83 as DatinguserdbStaging
          Storage.get(event83.s3file).then( res83 => {this.urlhome83=res83;this.newWidthhome83=event83.newWidth; this.newHeighthome83=event83.newHeight})
          this.initializerflag1C="yes";});  } else {this.tab1Cnullflag="yes"}       }).catch(error => {console.log(error.response3)})
  }

  //tab2: this removes the itemid from index 0 position
// var2 is index 0,1,2 of element position
  async removetab2(var1: number) {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab2", itemidindex: var1}}
    API.post("datingapitest4", "/itemapitab6Cdisli", paramsp3).then(response3 => {console.log("success3");}).catch(error => {console.log(error.response3);});
  }

  //this removes the itemid from index 0 position
// var1 is index 0,1,2 of element position
  async removetab3(var1: number) {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab3", itemidindex: var1}}
    API.post("datingapitest4", "/itemapitab6Cdisli", paramsp3).then(response3 => {console.log("success3");}).catch(error => {console.log(error.response3);});
  }

  //user has seen it once now move it to end of array of tab2
  //var1 is itemid to move.
  async nexttab2(var1:string) {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp2 = {body: {userid: user.attributes.sub, itemidmove:var1, itemattr:"itemidstab2"}} //moved itemid to end of array
    API.put("datingapitest4", "/itemapitabsmove", paramsp2).then(response2 => {console.log("success2");}).catch(error => {console.log(error.response2);});
  }

  //user has seen it once now move it to end of array of  tab3.
  //var1 is itemid to move.
  async nexttab3(var1:string) {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp2 = {body: {userid: user.attributes.sub, itemidmove:var1, itemattr:"itemidstab3"}} //moved itemid to end of array
    API.put("datingapitest4", "/itemapitabsmove", paramsp2).then(response2 => {console.log("success2");}).catch(error => {console.log(error.response2);});
  }

  //var1 is the itemid which the front-end will provide.  var2 is the interestcategory array which front-end will give
  async acceptrequesttab3(var1:string, var2:[]) {
    const user = await Auth.currentAuthenticatedUser();
    //moves the itemid from tab3 to tab2 in itemtracking table.
    //moves the userid from tab3 to tab2 in itemtracking table of the itemid's row.
    //for each accept interaction by the user they get 50 loyalty points
    //this saves interactiondb timestamp of requestaccepted event
    // index of array of itemid to delete for tab6. Userid and itemid are swapped in the graphqlapi (next, remove itemid from tab6 of the user who sent the request)
    //  once we have tab6 index removes the itemid from the tab6 list, this too has the userid and itemid swapped
    this.api.UpdateAcceptRequestatb3Button(user.attributes.sub,var1,"homeaccept",uuid(),var2,new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),
      new Date().valueOf()).then((event1) => {})
  }

//var1 is the itemid which the front-end will provide.  var2 is the interestcategory array which front-end will give
  async declinerequesttab3(var1:string, var2:[]) {
    const user = await Auth.currentAuthenticatedUser();
    //moves the itemid from tab3 to tab6B in itemtracking table.
    //moves the userid from tab3 to tab6B in itemtracking table of the itemid's row
    //populate interaction table with userid and itemid, with "requestdeclined"
    this.api.UpdateDeclineRequestatb3Button(user.attributes.sub,var1,"homedecline",uuid(),var2,new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),
      new Date().valueOf()).then((event1) => {})
  }

//obtain tab3 array's index0, index1, index2 itemids
  async homeinitialize3() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp2 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapistan2/m", paramsp2).then(response2 =>
    { console.log(response2) //this is the entire row of the user of itemtracking table
      this.tab3displayitemid1=response2.data[0]; this.tab3displayitemid2=response2.data[1]; this.tab3displayitemid3=response2.data[2];
      this.tab3length=response2.data[3];

      if(this.tab3length>=3) {
        this.api.GetDatinguserdbStaging(this.tab3displayitemid1).then((event84) => {console.log(event84);
          this.ngfortab3array[0]= {age: event84.age, countyuser:event84.countyuser, education:event84.education , email:event84.email , emailshareagree:event84.emailshareagree , facebookbusername:event84.facebookbusername , gender:event84.gender , industrylevel2:event84.industrylevel2 , loyalty:event84.loyalty , menteeagree:event84.menteeagree , mentoragree:event84.mentoragree , newHeight:event84.newHeight , newWidth:event84.newWidth , occup:event84.occup , profilename: event84.profilename, s3file:event84.s3file , stateuser:event84.stateuser , unsubscribematchingme:event84.unsubscribematchingme , userdescription:event84.userdescription , userid:event84.userid , veteran:event84.veteran, __typename: "DatinguserdbStaging"},
            Storage.get(event84.s3file).then( res84 => {this.urlhomearraytab3[0]=res84;this.widthhomearraytab3[0]=event84.newWidth; this.heighthomearraytab3[0]=event84.newHeight
              this.api.ListDatinguserdbStagingsQuery(this.tab3displayitemid1,user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
                console.log(event);
                this.interestcateginittemp31 = event.interestcategory;
                this.interestcateginit31=JSON.stringify(this.interestcateginittemp31).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                this.interdatetempinit31 = event.timestamp as string
                this.interestdateinit31 = new Date(this.interdatetempinit31);
              });

              this.api.GetDatinguserdbStaging(this.tab3displayitemid2).then((event85) => {console.log(event85);
                this.ngfortab3array[1]={age: event85.age, countyuser:event85.countyuser, education:event85.education , email:event85.email , emailshareagree:event85.emailshareagree , facebookbusername:event85.facebookbusername , gender:event85.gender , industrylevel2:event85.industrylevel2 , loyalty:event85.loyalty , menteeagree:event85.menteeagree , mentoragree:event85.mentoragree , newHeight:event85.newHeight , newWidth:event85.newWidth , occup:event85.occup , profilename: event85.profilename, s3file:event85.s3file , stateuser:event85.stateuser , unsubscribematchingme:event85.unsubscribematchingme , userdescription:event85.userdescription , userid:event85.userid , veteran:event85.veteran, __typename: "DatinguserdbStaging"},
                  Storage.get(event85.s3file).then( res85 => {this.urlhomearraytab3[1]=res85;this.widthhomearraytab3[1]=event85.newWidth; this.heighthomearraytab3[1]=event85.newHeight
                    this.api.ListDatinguserdbStagingsQuery(this.tab3displayitemid2,user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
                      console.log(event);
                      this.interestcateginittemp32 = event.interestcategory;
                      this.interestcateginit32=JSON.stringify(this.interestcateginittemp32).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                      this.interdatetempinit32 = event.timestamp as string
                      this.interestdateinit32 = new Date(this.interdatetempinit32);
                    });

                    this.api.GetDatinguserdbStaging(this.tab3displayitemid3).then((event86) => {console.log(event86);
                      this.ngfortab3array[2]= {age: event86.age, countyuser:event86.countyuser, education:event86.education , email:event86.email , emailshareagree:event86.emailshareagree , facebookbusername:event86.facebookbusername , gender:event86.gender , industrylevel2:event86.industrylevel2 , loyalty:event86.loyalty , menteeagree:event86.menteeagree , mentoragree:event86.mentoragree , newHeight:event86.newHeight , newWidth:event86.newWidth , occup:event86.occup , profilename: event86.profilename, s3file:event86.s3file , stateuser:event86.stateuser , unsubscribematchingme:event86.unsubscribematchingme , userdescription:event86.userdescription , userid:event86.userid , veteran:event86.veteran, __typename: "DatinguserdbStaging"},
                        Storage.get(event86.s3file).then( res86 => {this.urlhomearraytab3[2]=res86;this.widthhomearraytab3[2]=event86.newWidth; this.heighthomearraytab3[2]=event86.newHeight
                          this.api.ListDatinguserdbStagingsQuery(this.tab3displayitemid3,user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
                            console.log(event);
                            this.interestcateginittemp33 = event.interestcategory;
                            this.interestcateginit33=JSON.stringify(this.interestcateginittemp33).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                            this.interdatetempinit33 = event.timestamp as string
                            this.interestdateinit33 = new Date(this.interdatetempinit33);
                          });

                          this.initializerflag3="yes"
                        })   });    })   });  })   });  }

      if(this.tab3length==2) {
        this.api.GetDatinguserdbStaging(this.tab3displayitemid1).then((event84) => {console.log(event84);
          this.ngfortab3array[0]= {age: event84.age, countyuser:event84.countyuser, education:event84.education , email:event84.email , emailshareagree:event84.emailshareagree , facebookbusername:event84.facebookbusername , gender:event84.gender , industrylevel2:event84.industrylevel2 , loyalty:event84.loyalty , menteeagree:event84.menteeagree , mentoragree:event84.mentoragree , newHeight:event84.newHeight , newWidth:event84.newWidth , occup:event84.occup , profilename: event84.profilename, s3file:event84.s3file , stateuser:event84.stateuser , unsubscribematchingme:event84.unsubscribematchingme , userdescription:event84.userdescription , userid:event84.userid , veteran:event84.veteran, __typename: "DatinguserdbStaging"},
            Storage.get(event84.s3file).then( res84 => {this.urlhomearraytab3[0]=res84;this.widthhomearraytab3[0]=event84.newWidth; this.heighthomearraytab3[0]=event84.newHeight
              this.api.ListDatinguserdbStagingsQuery(this.tab3displayitemid1,user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
                console.log(event);
                this.interestcateginittemp31 = event.interestcategory;
                this.interestcateginit31=JSON.stringify(this.interestcateginittemp31).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                this.interdatetempinit31 = event.timestamp as string
                this.interestdateinit31 = new Date(this.interdatetempinit31);
              });

              this.api.GetDatinguserdbStaging(this.tab3displayitemid2).then((event85) => {console.log(event85);
                this.ngfortab3array[1]={age: event85.age, countyuser:event85.countyuser, education:event85.education , email:event85.email , emailshareagree:event85.emailshareagree , facebookbusername:event85.facebookbusername , gender:event85.gender , industrylevel2:event85.industrylevel2 , loyalty:event85.loyalty , menteeagree:event85.menteeagree , mentoragree:event85.mentoragree , newHeight:event85.newHeight , newWidth:event85.newWidth , occup:event85.occup , profilename: event85.profilename, s3file:event85.s3file , stateuser:event85.stateuser , unsubscribematchingme:event85.unsubscribematchingme , userdescription:event85.userdescription , userid:event85.userid , veteran:event85.veteran, __typename: "DatinguserdbStaging"},
                  Storage.get(event85.s3file).then( res85 => {this.urlhomearraytab3[1]=res85;this.widthhomearraytab3[1]=event85.newWidth; this.heighthomearraytab3[1]=event85.newHeight
                    this.api.ListDatinguserdbStagingsQuery(this.tab3displayitemid2,user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
                      console.log(event);
                      this.interestcateginittemp32 = event.interestcategory;
                      this.interestcateginit32=JSON.stringify(this.interestcateginittemp32).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                      this.interdatetempinit32 = event.timestamp as string
                      this.interestdateinit32 = new Date(this.interdatetempinit32);
                    });
                    this.initializerflag3="yes"
                  })   });  })   });}

      if(this.tab3length==1) {
        this.api.GetDatinguserdbStaging(this.tab3displayitemid1).then((event84) => {console.log(event84);
          this.ngfortab3array[0]= {age: event84.age, countyuser:event84.countyuser, education:event84.education , email:event84.email , emailshareagree:event84.emailshareagree , facebookbusername:event84.facebookbusername , gender:event84.gender , industrylevel2:event84.industrylevel2 , loyalty:event84.loyalty , menteeagree:event84.menteeagree , mentoragree:event84.mentoragree , newHeight:event84.newHeight , newWidth:event84.newWidth , occup:event84.occup , profilename: event84.profilename, s3file:event84.s3file , stateuser:event84.stateuser , unsubscribematchingme:event84.unsubscribematchingme , userdescription:event84.userdescription , userid:event84.userid , veteran:event84.veteran, __typename: "DatinguserdbStaging"},
            Storage.get(event84.s3file).then( res84 => {this.urlhomearraytab3[0]=res84;this.widthhomearraytab3[0]=event84.newWidth; this.heighthomearraytab3[0]=event84.newHeight
              this.api.ListDatinguserdbStagingsQuery(this.tab3displayitemid1,user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
                console.log(event);
                this.interestcateginittemp31 = event.interestcategory;
                this.interestcateginit31=JSON.stringify(this.interestcateginittemp31).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                this.interdatetempinit31 = event.timestamp as string
                this.interestdateinit31 = new Date(this.interdatetempinit31);
              });
              this.initializerflag3="yes"
            })   });}

      if(this.tab3displayitemid1==null && this.tab3displayitemid2==null && this.tab3displayitemid3==null) {this.tab3nullflag="yes"}
    }).catch(error => {console.log(error.response2)})
  }

  //obtain tab2 array's index0, index1, index2 itemids
  async homeinitialize2() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp2 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab2/m", paramsp2).then(response2 =>
    { console.log(response2) //this is the entire row of the user of itemtracking table
      this.tab2displayitemid1=response2.data[0]; this.tab2displayitemid2=response2.data[1]; this.tab2displayitemid3=response2.data[2];
      this.tab2length=response2.data[3];

      if(this.tab2length>=3) {
        this.api.GetDatinguserdbStaging(this.tab2displayitemid1).then((event87) => {console.log(event87);
          if(event87.emailshareagree=="true") {this.emailshareflag1="yes";}
          this.ngfortab2array[0]= {age: event87.age, countyuser:event87.countyuser, education:event87.education , email:event87.email , emailshareagree:event87.emailshareagree , facebookbusername:event87.facebookbusername , gender:event87.gender , industrylevel2:event87.industrylevel2 , loyalty:event87.loyalty , menteeagree:event87.menteeagree , mentoragree:event87.mentoragree , newHeight:event87.newHeight , newWidth:event87.newWidth , occup:event87.occup , profilename: event87.profilename, s3file:event87.s3file , stateuser:event87.stateuser , unsubscribematchingme:event87.unsubscribematchingme , userdescription:event87.userdescription , userid:event87.userid , veteran:event87.veteran, __typename: "DatinguserdbStaging"},
            Storage.get(event87.s3file).then( res87 => {this.urlhomearraytab2[0]=res87;this.widthhomearraytab2[0]=event87.newWidth; this.heighthomearraytab2[0]=event87.newHeight
              this.api.ListDatinguserdbStagingsQuery(this.tab2displayitemid1,user.attributes.sub, {eventtype: {eq: "requestaccepted"}}).then((event) => {
                console.log(event);
                this.interestcateginittemp21 = event.interestcategory;
                this.interestcateginit21=JSON.stringify(this.interestcateginittemp21).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                this.interdatetempinit21 = event.timestamp as string
                this.interestdateinit21 = new Date(this.interdatetempinit21);
              }).catch(error => {
                this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab2displayitemid1,{eventtype: {eq: "requestaccepted"}}).then((event) => {
                  console.log(event);
                  this.interestcateginittemp21 = event.interestcategory;
                  this.interestcateginit21=JSON.stringify(this.interestcateginittemp21).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                  this.interdatetempinit21 = event.timestamp as string
                  this.interestdateinit21 = new Date(this.interdatetempinit21);
                })  })

              this.api.GetDatinguserdbStaging(this.tab2displayitemid2).then((event88) => {console.log(event88);
                if(event88.emailshareagree=="true") {this.emailshareflag2="yes";}
                this.ngfortab2array[1]=  {age: event88.age, countyuser:event88.countyuser, education:event88.education , email:event88.email , emailshareagree:event88.emailshareagree , facebookbusername:event88.facebookbusername , gender:event88.gender , industrylevel2:event88.industrylevel2 , loyalty:event88.loyalty , menteeagree:event88.menteeagree , mentoragree:event88.mentoragree , newHeight:event88.newHeight , newWidth:event88.newWidth , occup:event88.occup , profilename: event88.profilename, s3file:event88.s3file , stateuser:event88.stateuser , unsubscribematchingme:event88.unsubscribematchingme , userdescription:event88.userdescription , userid:event88.userid , veteran:event88.veteran, __typename: "DatinguserdbStaging"},
                  Storage.get(event88.s3file).then( res88 => {this.urlhomearraytab2[1]=res88;this.widthhomearraytab2[1]=event88.newWidth; this.heighthomearraytab2[1]=event88.newHeight
                    this.api.ListDatinguserdbStagingsQuery(this.tab2displayitemid2,user.attributes.sub, {eventtype: {eq: "requestaccepted"}}).then((event) => {
                      console.log(event);
                      this.interestcateginittemp22 = event.interestcategory;
                      this.interestcateginit22=JSON.stringify(this.interestcateginittemp22).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                      this.interdatetempinit22 = event.timestamp as string
                      this.interestdateinit22 = new Date(this.interdatetempinit22);
                    }).catch(error => {
                      this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab2displayitemid2, {eventtype: {eq: "requestaccepted"}}).then((event) => {
                        console.log(event);
                        this.interestcateginittemp22 = event.interestcategory;
                        this.interestcateginit22=JSON.stringify(this.interestcateginittemp22).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                        this.interdatetempinit22 = event.timestamp as string
                        this.interestdateinit22 = new Date(this.interdatetempinit22);
                      }) })


                    this.api.GetDatinguserdbStaging(this.tab2displayitemid3).then((event89) => {console.log(event89);
                      if(event89.emailshareagree=="true") {this.emailshareflag3="yes";}
                      this.ngfortab2array[2]=  {age: event89.age, countyuser:event89.countyuser, education:event89.education , email:event89.email , emailshareagree:event89.emailshareagree , facebookbusername:event89.facebookbusername , gender:event89.gender , industrylevel2:event89.industrylevel2 , loyalty:event89.loyalty , menteeagree:event89.menteeagree , mentoragree:event89.mentoragree , newHeight:event89.newHeight , newWidth:event89.newWidth , occup:event89.occup , profilename: event89.profilename, s3file:event89.s3file , stateuser:event89.stateuser , unsubscribematchingme:event89.unsubscribematchingme , userdescription:event89.userdescription , userid:event89.userid , veteran:event89.veteran, __typename: "DatinguserdbStaging"},
                        Storage.get(event89.s3file).then( res89 => {this.urlhomearraytab2[2]=res89;this.widthhomearraytab2[2]=event89.newWidth; this.heighthomearraytab2[2]=event89.newHeight
                          this.api.ListDatinguserdbStagingsQuery(this.tab2displayitemid3,user.attributes.sub, {eventtype: {eq: "requestaccepted"}}).then((event) => {
                            console.log(event);
                            this.interestcateginittemp23 = event.interestcategory;
                            this.interestcateginit23=JSON.stringify(this.interestcateginittemp23).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                            this.interdatetempinit23 = event.timestamp as string
                            this.interestdateinit23 = new Date(this.interdatetempinit23);
                          }).catch(error => {
                            this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab2displayitemid3, {eventtype: {eq: "requestaccepted"}}).then((event) => {
                              console.log(event);
                              this.interestcateginittemp23 = event.interestcategory;
                              this.interestcateginit23=JSON.stringify(this.interestcateginittemp23).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                              this.interdatetempinit23 = event.timestamp as string
                              this.interestdateinit23 = new Date(this.interdatetempinit23);
                            }) })
                          this.initializerflag2="yes"
                        })   });    })   });  })   });  }

      if(this.tab2length==2) {
        this.api.GetDatinguserdbStaging(this.tab2displayitemid1).then((event87) => {console.log(event87);
          if(event87.emailshareagree=="true") {this.emailshareflag1="yes";}
          this.ngfortab2array[0]= {age: event87.age, countyuser:event87.countyuser, education:event87.education , email:event87.email , emailshareagree:event87.emailshareagree , facebookbusername:event87.facebookbusername , gender:event87.gender , industrylevel2:event87.industrylevel2 , loyalty:event87.loyalty , menteeagree:event87.menteeagree , mentoragree:event87.mentoragree , newHeight:event87.newHeight , newWidth:event87.newWidth , occup:event87.occup , profilename: event87.profilename, s3file:event87.s3file , stateuser:event87.stateuser , unsubscribematchingme:event87.unsubscribematchingme , userdescription:event87.userdescription , userid:event87.userid , veteran:event87.veteran, __typename: "DatinguserdbStaging"},
            Storage.get(event87.s3file).then( res87 => {this.urlhomearraytab2[0]=res87;this.widthhomearraytab2[0]=event87.newWidth; this.heighthomearraytab2[0]=event87.newHeight
              this.api.ListDatinguserdbStagingsQuery(this.tab2displayitemid1,user.attributes.sub, {eventtype: {eq: "requestaccepted"}}).then((event) => {
                console.log(event);
                this.interestcateginittemp21 = event.interestcategory;
                this.interestcateginit21=JSON.stringify(this.interestcateginittemp21).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                this.interdatetempinit21 = event.timestamp as string
                this.interestdateinit21 = new Date(this.interdatetempinit21);
              }).catch(error => {
                this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab2displayitemid1, {eventtype: {eq: "requestaccepted"}}).then((event) => {
                  console.log(event);
                  this.interestcateginittemp21 = event.interestcategory;
                  this.interestcateginit21=JSON.stringify(this.interestcateginittemp21).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                  this.interdatetempinit21 = event.timestamp as string
                  this.interestdateinit21 = new Date(this.interdatetempinit21);
                }) })

              this.api.GetDatinguserdbStaging(this.tab2displayitemid2).then((event88) => {console.log(event88);
                if(event88.emailshareagree=="true") {this.emailshareflag2="yes";}
                this.ngfortab2array[1]=  {age: event88.age, countyuser:event88.countyuser, education:event88.education , email:event88.email , emailshareagree:event88.emailshareagree , facebookbusername:event88.facebookbusername , gender:event88.gender , industrylevel2:event88.industrylevel2 , loyalty:event88.loyalty , menteeagree:event88.menteeagree , mentoragree:event88.mentoragree , newHeight:event88.newHeight , newWidth:event88.newWidth , occup:event88.occup , profilename: event88.profilename, s3file:event88.s3file , stateuser:event88.stateuser , unsubscribematchingme:event88.unsubscribematchingme , userdescription:event88.userdescription , userid:event88.userid , veteran:event88.veteran, __typename: "DatinguserdbStaging"},
                  Storage.get(event88.s3file).then( res88 => {this.urlhomearraytab2[1]=res88;this.widthhomearraytab2[1]=event88.newWidth; this.heighthomearraytab2[1]=event88.newHeight
                    this.api.ListDatinguserdbStagingsQuery(this.tab2displayitemid2,user.attributes.sub, {eventtype: {eq: "requestaccepted"}}).then((event) => {
                      console.log(event);
                      this.interestcateginittemp22 = event.interestcategory;
                      this.interestcateginit22=JSON.stringify(this.interestcateginittemp22).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                      this.interdatetempinit22 = event.timestamp as string
                      this.interestdateinit22 = new Date(this.interdatetempinit22);
                    }).catch(error => {
                      this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab2displayitemid2, {eventtype: {eq: "requestaccepted"}}).then((event) => {
                        console.log(event);
                        this.interestcateginittemp22 = event.interestcategory;
                        this.interestcateginit22=JSON.stringify(this.interestcateginittemp22).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                        this.interdatetempinit22 = event.timestamp as string
                        this.interestdateinit22 = new Date(this.interdatetempinit22);
                      }) })
                    this.initializerflag2="yes"
                  })   });  })   });  }

      if(this.tab2length==1) {
        this.api.GetDatinguserdbStaging(this.tab2displayitemid1).then((event87) => {console.log(event87);
          if(event87.emailshareagree=="true") {this.emailshareflag1="yes";}
          this.ngfortab2array[0]= {age: event87.age, countyuser:event87.countyuser, education:event87.education , email:event87.email , emailshareagree:event87.emailshareagree , facebookbusername:event87.facebookbusername , gender:event87.gender , industrylevel2:event87.industrylevel2 , loyalty:event87.loyalty , menteeagree:event87.menteeagree , mentoragree:event87.mentoragree , newHeight:event87.newHeight , newWidth:event87.newWidth , occup:event87.occup , profilename: event87.profilename, s3file:event87.s3file , stateuser:event87.stateuser , unsubscribematchingme:event87.unsubscribematchingme , userdescription:event87.userdescription , userid:event87.userid , veteran:event87.veteran, __typename: "DatinguserdbStaging"},
            Storage.get(event87.s3file).then( res87 => {this.urlhomearraytab2[0]=res87;this.widthhomearraytab2[0]=event87.newWidth; this.heighthomearraytab2[0]=event87.newHeight
              this.api.ListDatinguserdbStagingsQuery(this.tab2displayitemid1,user.attributes.sub, {eventtype: {eq: "requestaccepted"}}).then((event) => {
                console.log(event);
                this.interestcateginittemp21 = event.interestcategory;
                this.interestcateginit21=JSON.stringify(this.interestcateginittemp21).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                this.interdatetempinit21 = event.timestamp as string
                this.interestdateinit21 = new Date(this.interdatetempinit21);
              }).catch(error => {
                this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab2displayitemid1, {eventtype: {eq: "requestaccepted"}}).then((event) => {
                  console.log(event);
                  this.interestcateginittemp21 = event.interestcategory;
                  this.interestcateginit21=JSON.stringify(this.interestcateginittemp21).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
                  this.interdatetempinit21 = event.timestamp as string
                  this.interestdateinit21 = new Date(this.interdatetempinit21);
                }) })
              this.initializerflag2="yes"
            })   });  }

      if(this.tab2displayitemid1==null && this.tab2displayitemid2==null && this.tab2displayitemid3==null) {this.tab2nullflag="yes"}
    }).catch(error => {console.log(error.response2)})
  }

//scroll to appropriate section
  search1(){try {const errorField = this.renderer.selectRootElement('.search1');errorField.scrollIntoView();} catch (err) {}}
  search2(){try {const errorField = this.renderer.selectRootElement('.search2');errorField.scrollIntoView();} catch (err) {}}
  search3(){try {const errorField = this.renderer.selectRootElement('.search3');errorField.scrollIntoView();} catch (err) {}}
  search4(){try {const errorField = this.renderer.selectRootElement('.search4');errorField.scrollIntoView();} catch (err) {}}
  searchresult(){try {const errorField = this.renderer.selectRootElement('.searchresult');errorField.scrollIntoView();} catch (err) {}}
  tab1A(){try {const errorField = this.renderer.selectRootElement('.tab1A');errorField.scrollIntoView();} catch (err) {}}
  tab1B(){try {const errorField = this.renderer.selectRootElement('.tab1B');errorField.scrollIntoView();} catch (err) {}}
  tab1C(){try {const errorField = this.renderer.selectRootElement('.tab1C');errorField.scrollIntoView();} catch (err) {}}
  tab3(){try {const errorField = this.renderer.selectRootElement('.tab3');errorField.scrollIntoView();} catch (err) {}}
  tab2(){try {const errorField = this.renderer.selectRootElement('.tab2');errorField.scrollIntoView();} catch (err) {}}


}
