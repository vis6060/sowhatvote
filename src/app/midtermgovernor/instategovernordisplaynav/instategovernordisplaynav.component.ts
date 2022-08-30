import {Component, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {APIService,CandNameOutArray} from "../../API.service";
import Amplify, {API, Auth, Cache, Storage} from "aws-amplify";
import awsExports from "../../../aws-exports";
import { TitleCasePipe } from '@angular/common';
import {MatDialog,} from '@angular/material/dialog';
import {ConfdialoggovernComponent} from "../confdialoggovern/confdialoggovern.component";


@Component({
  selector: 'app-instategovernordisplaynav',
  templateUrl: './instategovernordisplaynav.component.html',
  styleUrls: ['./instategovernordisplaynav.component.css'],
  providers: [TitleCasePipe],
})
export class InstategovernordisplaynavComponent implements OnInit {

  router: Router;
  constructor(public dialog: MatDialog, public authenticator: AuthenticatorService, private api: APIService, private route: ActivatedRoute, _router: Router,private titlecasePipe:TitleCasePipe,private renderer: Renderer2) {
    Amplify.configure(awsExports);
    this.router = _router;
    if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])}
//    if(Cache.getItem('profAevade')=="yes") {this.router.navigate(['/Meetup/Step0'])}
    const expiration = new Date().valueOf()
    Cache.setItem('midtermenter', 'yes', { expires: expiration +1800000 }); // 30min as login needs to happen and PartA form needs to be completed

  }

  ngOnInit(): void {
    this.gethompage1Binitialize();
  }

  tabinstatedisplayitemid:string=""; tabinstatedisplayitemidtwo:string=""; //this has the itemid profile to display to user for tab1A which is index0 in array
  tabinstatedisplayitemidnext:string="";  //"next" is index1 in array and "nextnext" is index2 in array to check their unsubscribe status and whether needs to be deleted from array
  tabinstatedisplayitemidindex1:string=""; tabinstatedisplayitemidindex1next:string="";
  tabinstateendarrayitemid:string=""; tabinstateendarrayitemidnext:string=""; tabinstateendarrayitemidinitialize:string="";
  initializerflag=""; onetimenextflag=""; backflag=""; backflagnext=""; futureflag="";
  tabinstatelength="0"; tabinstatelengthnext="0";
  clicked0: boolean=false;clicked: boolean=false; clicked1: boolean=false; delayflag1:boolean=true; delayflag2:boolean=true;
  viewtoggle=""; urlA:string;   urlAnext:string; urlA1000:string;  //signed url to the image stored in s3
  stateuser=""; loyalty=0;
  click10=''; click11='';click12='';
  District10="";Party10="";State10="";Office10="";Website10="";PictureAttribution10="";Motto10=""; OverallYea10=""; OverallNay10="";AllOffices10='';
  District100=""; Party100="";State100="";Office100="";Website100="";PictureAttribution100="";Motto100=""; OverallYea100=""; OverallNay100=""; AllOffices100='';
  District1000="";Party1000="";State1000="";Office1000="";Website1000="";PictureAttribution1000="";Motto1000=""; OverallYea1000=""; OverallNay1000=""; AllOffices1000=''
  CandName10=""; CandName100="";CandName1000=""
  votedindexes=[]; comcateg=""; votedindexesissue=[]; isscateg=""; prefercateg=""; votedindexesissuecand10=[];votedindexesissuecand100=[];votedindexesissuecand1000=[];

  BorderYea=0;	BorderNay=0;	ImmigrationYea=0;	ImmigrationNay=0;	AbortionYea=0;	AbortionNay=0;	TransgenderYea=0;	TransgenderNay=0;	VotingYea=0;	VotingNay=0;	SafetyYea=0;	SafetyNay=0;	EducationYea=0;	EducationNay=0;	VeteransYea=0;	VeteransNay=0;	JobsYea=0;	JobsNay=0;	ClimateYea=0;	ClimateNay=0;	HomelessnessYea=0;	HomelessnessNay=0;	MentalYea=0;	MentalNay=0;	GunsYea=0;	GunsNay=0;	CostYea=0;	CostNay=0;	FarmersYea=0;	FarmersNay=0;	PermanentYea=0;	PermanentNay=0;	EconomyYea=0;	EconomyNay=0;	HealthcareYea=0;	HealthcareNay=0;	InfrastructureYea=0;	InfrastructureNay=0;	EnergyYea=0;	EnergyNay=0;	CannabisYea=0;	CannabisNay=0;	TaxesYea=0;	TaxesNay=0;	LandsYea=0;	LandsNay=0;	SeniorsYea=0;	SeniorsNay=0;	ManufacturingYea=0;	ManufacturingNay=0;	HousingYea=0;	HousingNay=0;

  Coms10new=[];  clicked10: boolean=true; CandLastNameSelect=""; nomatchinglastname="";
  Coms100new=[]; Coms1000new=[]; newWidth10=''; newHeight10=''; newWidth100=''; newHeight100=''; newWidth1000=''; newHeight1000='';

  statedropdown=''; HOMEstate=''

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  //delay button, so user doesn't quickly click on it and spoil the array of cands
  async delayButton1(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag1(), ms)).then();}
  async delayButton2(ms: number) {await new Promise(resolve => setTimeout(()=>this.setbuttonflag2(), ms)).then();}
  setbuttonflag1() {this.delayflag1=false;this.delayflag2=true;}; setbuttonflag2() {this.delayflag2=false;this.delayflag1=true;}

  viewtoggle1next() {window.scrollTo(0,0);
    this.CandName10= this.CandName1000; this.Party10=this.Party1000; this.State10=this.State1000; this.District10=this.District1000; this.AllOffices10=this.AllOffices1000
    this.Website10=this.Website1000;this.PictureAttribution10=this.PictureAttribution1000; this.Motto10=this.Motto1000; this.Office10=this.Office1000;
    this.OverallYea10=this.OverallYea1000;this.OverallNay10=this.OverallNay1000;
    this.Coms10new=this.Coms1000new;this.urlA=this.urlA1000;
    this.newWidth10=this.newWidth1000; this.newHeight10=this.newHeight1000;
    this.votedindexesissuecand10=this.votedindexesissuecand1000;
    this.viewtoggle="yes"; this.initializerflag=""; this.onetimenextflag=""; this.clicked=false;
    this.deleteindex0idrecur100Next();
  }

  viewtoggle2next() { window.scrollTo(0,0);
    this.CandName10= this.CandName100; this.Party10=this.Party100; this.State10=this.State100; this.District10=this.District100; this.AllOffices10=this.AllOffices100
    this.Website10=this.Website100;this.PictureAttribution10=this.PictureAttribution100; this.Motto10=this.Motto100;this.Office10=this.Office100;
    this.OverallYea10=this.OverallYea100;this.OverallNay10=this.OverallNay100;
    this.Coms10new=this.Coms100new;this.urlA=this.urlAnext;
    this.newWidth10=this.newWidth100; this.newHeight10=this.newHeight100;
    this.votedindexesissuecand10=this.votedindexesissuecand100;
    this.viewtoggle="no";this.initializerflag=""; this.onetimenextflag=""; this.clicked1=false;
    this.deleteindex0idrecur10Next();
  }

  onetimenextnext() {window.scrollTo(0,0);
    this.CandName10= this.CandName100; this.Party10=this.Party100; this.State10=this.State100; this.District10=this.District100;this.AllOffices10=this.AllOffices100
    this.Website10=this.Website100;this.PictureAttribution10=this.PictureAttribution100; this.Motto10=this.Motto100; this.Office10=this.Office100;
    this.OverallYea10=this.OverallYea100;this.OverallNay10=this.OverallNay100;
    this.Coms10new=this.Coms100new;this.urlA=this.urlAnext;
    this.newWidth10=this.newWidth100; this.newHeight10=this.newHeight100;
    this.votedindexesissuecand10=this.votedindexesissuecand100;
    this.onetimenextflag='yes';this.deleteindex0idinitializeNext();}

  //moves itemid to end of array . deletes item at index0.  this two operations have to be sequenced.
  async deleteindex0idinitializeNext() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtontabgoverninstate(user.attributes.sub,this.tabinstatedisplayitemid).then((event1) => {
      this.gethompage1Arecur10()
    });
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtontabgoverninstate(user.attributes.sub,this.tabinstatedisplayitemidnext).then((event1) => {
      this.gethompage1Arecur10() })
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtontabgoverninstate(user.attributes.sub,this.tabinstatedisplayitemid).then((event1) => {
      this.gethompage1Arecur100()})
  }

  //anytime in UX journey user can click button and the candidates of their home state will be loaded into the main house array. it is a copy from their home array in usercandarraydisplay table into main house array.
  //index 0:AK. 1:AL. 2:AR. 3:AZ. 4:CA. 5:CO. 6:CT. 7:FL. 8:GA. 9:ID. 10:IL. 11:IA. 12:KS. 13:ME.
  // 14:MD. 15:MA. 16:MI. 17:MN. 18:NE. 19:NH. 20:NM. 21:NV. 22:NY. 23:OH. 24:OK. 25:OR. 26:PA.
  // 27:SC. 28:SD. 29:TN. 30:TX. 31:VT. 32:WI. 33:WY.
  async sethomecands() {const user = await Auth.currentAuthenticatedUser();
    this.api.DropdownUpdateArraygovern(user.attributes.sub,this.HOMEstate).then((event1) => {this.reloadComponent()})
  }

  //dropdown state if selected then candidates of that state are loaded
  async setdropdowncands() {const user = await Auth.currentAuthenticatedUser();
    if(this.statedropdown!='') {
      this.api.DropdownUpdateArraygovern(user.attributes.sub,this.statedropdown).then((event1) => {this.reloadComponent()})
    } }

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Binitialize() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("initializeuserarrayt4", "/initgovern/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tabinstatedisplayitemid=response1.data[0];
      this.tabinstatedisplayitemidnext=response1.data[1]; this.tabinstatedisplayitemidtwo=response1.data[2];
      this.tabinstatelength=response1.data[3]; this.tabinstateendarrayitemidinitialize=response1.data[4];
      this.HOMEstate=response1.data[6];
      console.log(this.tabinstatedisplayitemid); console.log(this.tabinstatedisplayitemidnext);
      this.gethompageF1Ainitialize()
      if(+this.tabinstatelength==1) {this.clicked0=true}
    }).catch(error => {console.log(error.response1)});
  }

  async gethompageF1Ainitialize() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    //retrieves basic info on itemid1
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemid} };
    API.get("storeresultt4", "/storegovern/m", paramsp1).then(response1 => { console.log(response1)
      this.Party10=response1.data[0].Party; this.State10=response1.data[0].StateCand; this.statedropdown=response1.data[0].StateCand;
      this.District10=response1.data[0].District;
      this.Website10=response1.data[0].Website; this.PictureAttribution10=response1.data[0].PictureAttribution;
      this.AllOffices10=JSON.parse(response1.data[0].AllOffices);
      this.CandName10=this.tabinstatedisplayitemid; this.Motto10=response1.data[0].Motto; this.OverallYea10=response1.data[0].OverallYea;
      this.OverallNay10=response1.data[0].OverallNay; this.Office10=response1.data[0].Office;
      this.Coms10new=JSON.parse(response1.data[0].Coms)
      Storage.get(response1.data[0].s3file).then( res => {this.urlA=res;
       if(response1.data[0].newWidth!='') {
          this.newWidth10=response1.data[0].newWidth; this.newHeight10=response1.data[0].newHeight}});
      this.initializerflag = "yes";  }).catch(error => {console.log(error.response1)});
    //Issue category-gets kill flags on whether overall issue category has been voted. votedindexesissue is an array of indicies, position0 index in this array is I0 categ, position1 index in this array is I1 categ
    this.api.ListVotedIdsIssuesflagsgovern(user.attributes.sub,this.tabinstatedisplayitemid).then((event4) => {console.log(event4)
      this.votedindexesissuecand10=event4.VotedIdsFlagArrayCand as unknown as any;});
    this.GetIssueInitialize(this.tabinstatedisplayitemid)
    this.getitem2initialize()
  }

  //var1 is candname
  async GetIssueInitialize(var1:string) {const user = await Auth.currentAuthenticatedUser();
    //Com category-gets kill flags on whether a com category has been voted. votedindexes is an array of indices, position0 index in this array is P0 categ, position1 index in this array is P1 categ
    //Issue category for whom the results need to be display as view results button was clicked and then there were two ad pages. this also sets the isscategory to blank after reading it.
    this.api.GetIssueCateggovern(user.attributes.sub,var1).then((event3) => {console.log(event3)
      this.votedindexes = event3.VotedIdsFlagArray as unknown as any; console.log(this.votedindexes)
      //Com results. has the results of all categories from the ushouserepcandscoms table
      let paramsp6 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemid} };
      API.get("issresultt4", "/issgovern/m", paramsp6).then(response6 => {this.BorderYea=+response6.data[0].BorderYea; this.BorderNay=+response6.data[0].BorderNay;  this.ImmigrationYea=+response6.data[0].ImmigrationYea; this.ImmigrationNay=+response6.data[0].ImmigrationNay; this.AbortionYea=+response6.data[0].AbortionYea;  this.AbortionNay=+response6.data[0].AbortionNay; this.TransgenderYea=+response6.data[0].TransgenderYea; this.TransgenderNay=+response6.data[0].TransgenderNay; this.VotingYea=+response6.data[0].VotingYea; this.VotingNay=+response6.data[0].VotingNay; this.SafetyYea=+response6.data[0].SafetyYea; this.SafetyNay=+response6.data[0].SafetyNay; this.EducationYea=+response6.data[0].EducationYea; this.EducationNay=+response6.data[0].EducationNay; this.VeteransYea=+response6.data[0].VeteransYea; this.VeteransNay=+response6.data[0].VeteransNay; this.JobsYea=+response6.data[0].JobsYea; this.JobsNay=+response6.data[0].JobsNay; this.ClimateYea=+response6.data[0].ClimateYea; this.ClimateNay=+response6.data[0].ClimateNay; this.HomelessnessYea=+response6.data[0].HomelessnessYea; this.HomelessnessNay=+response6.data[0].HomelessnessNay; this.MentalYea=+response6.data[0].MentalYea; this.MentalNay=+response6.data[0].MentalNay; this.GunsYea=+response6.data[0].GunsYea; this.GunsNay=+response6.data[0].GunsNay; this.CostYea=+response6.data[0].CostYea; this.CostNay=+response6.data[0].CostNay; this.FarmersYea=+response6.data[0].FarmersYea; this.FarmersNay=+response6.data[0].FarmersNay; this.PermanentYea=+response6.data[0].PermanentYea; this.PermanentNay=+response6.data[0].PermanentNay; this.EconomyYea=+response6.data[0].EconomyYea; this.EconomyNay=+response6.data[0].EconomyNay; this.HealthcareYea=+response6.data[0].HealthcareYea; this.HealthcareNay=+response6.data[0].HealthcareNay; this.InfrastructureYea=+response6.data[0].InfrastructureYea; this.InfrastructureNay=+response6.data[0].InfrastructureNay; this.EnergyYea=+response6.data[0].EnergyYea; this.EnergyNay=+response6.data[0].EnergyNay; this.CannabisYea=+response6.data[0].CannabisYea; this.CannabisNay=+response6.data[0].CannabisNay; this.TaxesYea=+response6.data[0].TaxesYea; this.TaxesNay=+response6.data[0].TaxesNay; this.LandsYea=+response6.data[0].LandsYea; this.LandsNay=+response6.data[0].LandsNay; this.SeniorsYea=+response6.data[0].SeniorsYea; this.SeniorsNay=+response6.data[0].SeniorsNay;this.ManufacturingYea=+response6.data[0].ManufacturingYea; this.ManufacturingNay=+response6.data[0].ManufacturingNay;this.HousingYea=+response6.data[0].HousingYea; this.HousingNay=+response6.data[0].HousingNay;}).catch(error => {console.log(error.response6)});
      //Issues results from the ushouserepcandsissues table
      this.isscateg = event3.isscateg as unknown as any;this.comcateg = event3.comcateg as unknown as any;
    });
  }

  async getitem2initialize() {const user = await Auth.currentAuthenticatedUser();
    //retrieves info in itemid2.
    let paramsp2 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemidnext} };
    API.get("storeresultt4", "/storegovern/m", paramsp2).then(response2 => {
      this.CandName100=this.tabinstatedisplayitemidnext; this.Party100=response2.data[0].Party;this.Office100=response2.data[0].Office;
      this.State100=response2.data[0].StateCand;
      this.District100=response2.data[0].District;
       this.AllOffices100=JSON.parse(response2.data[0].AllOffices);
      this.Website100=response2.data[0].Website; this.PictureAttribution100=response2.data[0].PictureAttribution;
      this.Motto100=response2.data[0].Motto; this.OverallYea100=response2.data[0].OverallYea;
      this.OverallNay100=response2.data[0].OverallNay; this.Coms100new=JSON.parse(response2.data[0].Coms)
      Storage.get(response2.data[0].s3file).then( res => {this.urlAnext=res
        if(response2.data[0].newWidth!='') {this.newWidth100=response2.data[0].newWidth; this.newHeight100=response2.data[0].newHeight}
      });
       this.api.ListVotedIdsIssuesflagsgovern(user.attributes.sub,this.tabinstatedisplayitemidnext).then((event5) => {
        this.votedindexesissuecand100=event5.VotedIdsFlagArrayCand as unknown as any;});
    }).catch(error => {console.log(error.response2)});
  }

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur10() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("initializeuserarrayt4", "/initgovern/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tabinstatedisplayitemid=response1.data[0];
      this.tabinstatedisplayitemidindex1=response1.data[1]
      this.tabinstatelength=response1.data[3]; this.tabinstateendarrayitemid=response1.data[4];
      console.log(this.tabinstatedisplayitemidindex1);
      this.gethompageF1Arecur10(this.tabinstatedisplayitemidindex1)
      if(+this.tabinstatelength==1) {this.clicked0=true}
    }).catch(error => {console.log(error.response1)});
  }

//var1 is candname
  async gethompageF1Arecur10(var1:string) {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {CandName:var1} };
    API.get("storeresultt4", "/storegovern/m", paramsp1).then(response1 => {
      this.CandName1000=var1; this.Party1000=response1.data[0].Party; this.Office1000=response1.data[0].Office;
      this.State1000=response1.data[0].StateCand;
      this.District1000=response1.data[0].District;
      this.AllOffices1000=JSON.parse(response1.data[0].AllOffices);
      this.Website1000=response1.data[0].Website; this.PictureAttribution1000=response1.data[0].PictureAttribution;
      this.Motto1000=response1.data[0].Motto; this.OverallYea1000=response1.data[0].OverallYea;
      this.OverallNay1000=response1.data[0].OverallNay; this.Coms1000new=JSON.parse(response1.data[0].Coms)
       Storage.get(response1.data[0].s3file).then( res => {this.urlA1000=res;
         if(response1.data[0].newWidth!='') {this.newWidth1000=response1.data[0].newWidth; this.newHeight1000=response1.data[0].newHeight}
       });
      this.api.ListVotedIdsIssuesflagsgovern(user.attributes.sub,var1).then((event5) => {
        this.votedindexesissuecand1000=event5.VotedIdsFlagArrayCand as unknown as any;});
    }).catch(error => {console.log(error.response1)});
  }

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur100() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("initializeuserarrayt4", "/initgovern/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tabinstatedisplayitemidnext=response1.data[0];
      this.tabinstatedisplayitemidindex1next=response1.data[1];
      this.tabinstatelengthnext=response1.data[3]; this.tabinstateendarrayitemidnext=response1.data[4];
      console.log(this.tabinstatedisplayitemidindex1next);
      this.gethompageF1Arecur100();
      if(+this.tabinstatelengthnext==1) {this.clicked0=true}
    }).catch(error => {console.log(error.response1)});
  }

  async gethompageF1Arecur100() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp2 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemidindex1next} };
    API.get("storeresultt4", "/storegovern/m", paramsp2).then(response2 => {
      this.CandName100=this.tabinstatedisplayitemidindex1next; this.Party100=response2.data[0].Party;
      this.AllOffices100=JSON.parse(response2.data[0].AllOffices);
      this.State100=response2.data[0].StateCand;
     this.District100=response2.data[0].District;
      this.Office100=response2.data[0].Office;
      this.Website100=response2.data[0].Website; this.PictureAttribution100=response2.data[0].PictureAttribution;
      this.Motto100=response2.data[0].Motto; this.OverallYea100=response2.data[0].OverallYea;
      this.OverallNay100=response2.data[0].OverallNay;this.Coms100new=JSON.parse(response2.data[0].Coms)
      Storage.get(response2.data[0].s3file).then( res => {this.urlAnext=res;
        if(response2.data[0].newWidth!='') {this.newWidth100=response2.data[0].newWidth; this.newHeight100=response2.data[0].newHeight}
      });
      this.api.ListVotedIdsIssuesflagsgovern(user.attributes.sub,this.tabinstatedisplayitemidindex1next).then((event5) => {
        this.votedindexesissuecand100=event5.VotedIdsFlagArrayCand as unknown as any;});
    }).catch(error => {console.log(error.response2)});
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle1back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtontabgoverninstate(user.attributes.sub,this.tabinstateendarrayitemid,
      +this.tabinstatelength).then((event1) => {;this.reloadComponent()})
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle2back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtontabgoverninstate(user.attributes.sub,this.tabinstateendarrayitemidnext,
      +this.tabinstatelengthnext).then((event1) => {;this.reloadComponent()})
  };

  //back button this is needed for one-time itemids
  async initializeclick1itemidback() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab2
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtontabgoverninstate(user.attributes.sub,this.tabinstateendarrayitemidinitialize,
      +this.tabinstatelength).then((event1) => {this.reloadComponent()})
  }

  // this will do a temp store of the webpagevalue and comcateg, so that after the ads we know where the user was. var2 is category of committee.
  async ConfclickComResults( var2:string){
    const user = await Auth.currentAuthenticatedUser();
    const paramspG = {body: {userid:user.attributes.sub, webpagevalue: "Governor", comcateg: var2, categcol:"comcateg"}}
    API.post("initializeuserarrayt4", "/index", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
  }

  //scroll to appropriate section
  ontop(){try {const errorField = this.renderer.selectRootElement('.ontop_class');errorField.scrollIntoView();} catch (err) {}}
  iss0(){try {const errorField = this.renderer.selectRootElement('.iss0_class');errorField.scrollIntoView();} catch (err) {}}
  iss1(){try {const errorField = this.renderer.selectRootElement('.iss1_class');errorField.scrollIntoView();} catch (err) {}}
  iss2(){try {const errorField = this.renderer.selectRootElement('.iss2_class');errorField.scrollIntoView();} catch (err) {}}
  iss3(){try {const errorField = this.renderer.selectRootElement('.iss3_class');errorField.scrollIntoView();} catch (err) {}}
  iss4(){try {const errorField = this.renderer.selectRootElement('.iss4_class');errorField.scrollIntoView();} catch (err) {}}
  iss5(){try {const errorField = this.renderer.selectRootElement('.iss5_class');errorField.scrollIntoView();} catch (err) {}}
  iss6(){try {const errorField = this.renderer.selectRootElement('.iss6_class');errorField.scrollIntoView();} catch (err) {}}
  iss7(){try {const errorField = this.renderer.selectRootElement('.iss7_class');errorField.scrollIntoView();} catch (err) {}}
  iss8(){try {const errorField = this.renderer.selectRootElement('.iss8_class');errorField.scrollIntoView();} catch (err) {}}
  iss9(){try {const errorField = this.renderer.selectRootElement('.iss9_class');errorField.scrollIntoView();} catch (err) {}}
  iss10(){try {const errorField = this.renderer.selectRootElement('.iss10_class');errorField.scrollIntoView();} catch (err) {}}
  iss11(){try {const errorField = this.renderer.selectRootElement('.iss11_class');errorField.scrollIntoView();} catch (err) {}}
  iss12(){try {const errorField = this.renderer.selectRootElement('.iss12_class');errorField.scrollIntoView();} catch (err) {}}
  iss13(){try {const errorField = this.renderer.selectRootElement('.iss13_class');errorField.scrollIntoView();} catch (err) {}}
  iss14(){try {const errorField = this.renderer.selectRootElement('.iss14_class');errorField.scrollIntoView();} catch (err) {}}
  iss15(){try {const errorField = this.renderer.selectRootElement('.iss15_class');errorField.scrollIntoView();} catch (err) {}}
  iss16(){try {const errorField = this.renderer.selectRootElement('.iss16_class');errorField.scrollIntoView();} catch (err) {}}
  iss17(){try {const errorField = this.renderer.selectRootElement('.iss17_class');errorField.scrollIntoView();} catch (err) {}}
  iss18(){try {const errorField = this.renderer.selectRootElement('.iss18_class');errorField.scrollIntoView();} catch (err) {}}
  iss19(){try {const errorField = this.renderer.selectRootElement('.iss19_class');errorField.scrollIntoView();} catch (err) {}}
  iss20(){try {const errorField = this.renderer.selectRootElement('.iss20_class');errorField.scrollIntoView();} catch (err) {}}
  iss21(){try {const errorField = this.renderer.selectRootElement('.iss21_class');errorField.scrollIntoView();} catch (err) {}}
  iss22(){try {const errorField = this.renderer.selectRootElement('.iss22_class');errorField.scrollIntoView();} catch (err) {}}
  iss23(){try {const errorField = this.renderer.selectRootElement('.iss23_class');errorField.scrollIntoView();} catch (err) {}}
  iss24(){try {const errorField = this.renderer.selectRootElement('.iss24_class');errorField.scrollIntoView();} catch (err) {}}
  iss25(){try {const errorField = this.renderer.selectRootElement('.iss25_class');errorField.scrollIntoView();} catch (err) {}}

//Issues confirmation button. Updates the voting results and store loyalty points. and stores that an ID has been voted on, so same button doesn't appear again.  var1 is candidatename. var2 is s3file picture filename.
  //Dialog box pop-up for voting confirmation
  async YEAclick2z() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'Overallygov'},}).afterClosed().subscribe(result => {
    this.api.OverallResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"Overallygov", "Overallgov",100).then((event) => {});});}
  async NAYclick2z() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'Overallngov'},}).afterClosed().subscribe(result => {
    this.api.OverallResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"Overallngov", "Overallgov",100).then((event) => {});});}
  async YEAclickP0() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P0ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('POgov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P0ygov", "P0gov",100).then((event) => {});});}
  async NAYclickP0() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P0ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('POgov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P0ngov", "P0gov",100).then((event) => {});});}
  async YEAclickP1() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P1ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P1gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P1ygov", "P1gov",100).then((event) => {});});}
  async NAYclickP1() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P1ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P1gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P1ngov", "P1gov",100).then((event) => {});});}
  async YEAclickP2() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P2ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P2gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P2ygov", "P2gov",100).then((event) => {});});}
  async NAYclickP2() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P2ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P2gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P2ngov", "P2gov",100).then((event) => {});});}
  async YEAclickP3() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P3ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P3gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P3ygov", "P3gov",100).then((event) => {});});}
  async NAYclickP3() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P3ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P3gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P3ngov", "P3gov",100).then((event) => {});});}
  async YEAclickP4() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P4ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P4gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P4ygov", "P4gov",100).then((event) => {});});}
  async NAYclickP4() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P4ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P4gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P4ngov", "P4gov",100).then((event) => {});});}
  async YEAclickP5() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P5ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P5gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P5ygov", "P5gov",100).then((event) => {});});}
  async NAYclickP5() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P5ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P5gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P5ngov", "P5gov",100).then((event) => {});});}
  async YEAclickP6() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P6ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P6gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P6ygov", "P6gov",100).then((event) => {});});}
  async NAYclickP6() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P6ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P6gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P6ngov", "P6gov",100).then((event) => {});});}
  async YEAclickP7() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P7ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P7gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P7ygov", "P7gov",100).then((event) => {});});}
  async NAYclickP7() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P7ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P7gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P7ngov", "P7gov",100).then((event) => {});});}
  async YEAclickP8() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P8ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P8gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P8ygov", "P8gov",100).then((event) => {});});}
  async NAYclickP8() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P8ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P8gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P8ngov", "P8gov",100).then((event) => {});});}
  async YEAclickP9() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P9ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P9gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P9ygov", "P9gov",100).then((event) => {});});}
  async NAYclickP9() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P9ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P9gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P9ngov", "P9gov",100).then((event) => {});});}
  async YEAclickP10() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P10ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P10gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P10ygov", "P10gov",100).then((event) => {});});}
  async NAYclickP10() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P10ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P1Ogov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P10ngov", "P10gov",100).then((event) => {});});}
  async YEAclickP11() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P11ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P11gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P11ygov", "P11gov",100).then((event) => {});});}
  async NAYclickP11() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P11ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P11gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P11ngov", "P11gov",100).then((event) => {});});}
  async YEAclickP12() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P12ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P12gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P12ygov", "P12gov",100).then((event) => {});});}
  async NAYclickP12() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P12ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P12gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P12ngov", "P12gov",100).then((event) => {});});}
  async YEAclickP13() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P13ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P13gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P13ygov", "P13gov",100).then((event) => {});});}
  async NAYclickP13() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P13ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P13gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P13ngov", "P13gov",100).then((event) => {});});}
  async YEAclickP14() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P14ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P14gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P14ygov", "P14gov",100).then((event) => {});});}
  async NAYclickP14() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P14ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P14gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P14ngov", "P14gov",100).then((event) => {});});}
  async YEAclickP15() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P15ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P15gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P15ygov", "P15gov",100).then((event) => {});});}
  async NAYclickP15() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P15ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P15gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P15ngov", "P15gov",100).then((event) => {});});}
  async YEAclickP16() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P16ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P16gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P16ygov", "P16gov",100).then((event) => {});});}
  async NAYclickP16() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P16ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P16gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P16ngov", "P16gov",100).then((event) => {});});}
  async YEAclickP17() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P17ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P17gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P17ygov", "P17gov",100).then((event) => {});});}
  async NAYclickP17() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P17ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P17gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P17ngov", "P17gov",100).then((event) => {});});}
  async YEAclickP18() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P18ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P18gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P18ygov", "P18gov",100).then((event) => {});});}
  async NAYclickP18() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P18ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P18gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P18ngov", "P18gov",100).then((event) => {});});}
  async YEAclickP19() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P19ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P19gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P19ygov", "P19gov",100).then((event) => {});});}
  async NAYclickP19() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P19ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P19gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P19ngov", "P19gov",100).then((event) => {});});}
  async YEAclickP20() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P20ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P20gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P20ygov", "P20gov",100).then((event) => {});});}
  async NAYclickP20() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P20ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P2Ogov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P20ngov", "P20gov",100).then((event) => {});});}
  async YEAclickP21() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P21ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P21gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P21ygov", "P21gov",100).then((event) => {});});}
  async NAYclickP21() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P21ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P21gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P21ngov", "P21gov",100).then((event) => {});});}
  async YEAclickP22() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P22ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P22gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P22ygov", "P22gov",100).then((event) => {});});}
  async NAYclickP22() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P22ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P22gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P22ngov", "P22gov",100).then((event) => {});});}
  async YEAclickP23() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P23ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P23gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P23ygov", "P23gov",100).then((event) => {});});}
  async NAYclickP23() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P23ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P23gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P23ngov", "P23gov",100).then((event) => {});});}
  async YEAclickP24() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P24ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P24gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P24ygov", "P24gov",100).then((event) => {});});}
  async NAYclickP24() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P24ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P24gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P24ngov", "P24gov",100).then((event) => {});});}
  async YEAclickP25() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P25ygov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P25gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P25ygov", "P25gov",100).then((event) => {});});}
  async NAYclickP25() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialoggovernComponent,{
    data: {voteflag: 'P25ngov'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P25gov');
    this.api.ComResultUpdatetabgoverninstate(this.CandName10,user.attributes.sub,"P25ngov", "P25gov",100).then((event) => {});});}

  async loyaltyview() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub,}}
    API.put("datingapitest4", "/loyaltyadd", paramsp3).then(response3 => {console.log("success3");}).catch(error => {console.log(error.response3);});
  }

  selectorflag:number
//random number generator which chooses which view section to show
  randomgen() {//this finds a number between 1 and 6, inclusive of both
    let  min = Math.ceil(1);
    let   max = Math.floor(2);
    this.selectorflag=Math.floor(Math.random() * (max - min + 1) + min);
  }

}

export interface DialogDatagovern {
  voteflag: 'Overallygov' | 'Overallngov' |'P0ygov' |'P0ngov' |'P1ygov' |'P1ngov' |'P2ygov' |'P2ngov'|'P3ygov' |'P3ngov'|'P4ygov' |'P4ngov'|'P5ygov' |'P5ngov'|'P6ygov' |'P6ngov'
    |'P7ygov' |'P7ngov'|'P8ygov' |'P8ngov'|'P9ygov' |'P9ngov'|'P10ygov' |'P10ngov'|'P11ygov' |'P11ngov'|'P12ygov' |'P12ngov'|'P13ygov' |'P13ngov'|'P14ygov' |'P14ngov'|'P15ygov' |'P15ngov'
    |'P16ygov' |'P16ngov'|'P17ygov' |'P17ngov'|'P18ygov' |'P18ngov'|'P19ygov' |'P19ngov'|'P20ygov' |'P20ngov'|'P21ygov' |'P21ngov' |'P22ygov' |'P22ngov' |'P23ygov' |'P23ngov' |'P24ygov' |'P24ngov' |'P25ygov' |'P25ngov'
}
