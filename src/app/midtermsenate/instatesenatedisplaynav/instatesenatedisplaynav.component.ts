import {Component, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {APIService,CandNameOutArray} from "../../API.service";
import Amplify, {API, Auth, Storage, Cache} from "aws-amplify";
import awsExports from "../../../aws-exports";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import {MatDialog,} from '@angular/material/dialog';
import {ConfdialogsenateComponent} from "../confdialogsenate/confdialogsenate.component";

@Component({
  selector: 'app-instatesenatedisplaynav',
  templateUrl: './instatesenatedisplaynav.component.html',
  styleUrls: ['./instatesenatedisplaynav.component.css'],
  providers: [TitleCasePipe],
})
export class InstatesenatedisplaynavComponent implements OnInit {

  router: Router;
  constructor(public dialog: MatDialog, public authenticator: AuthenticatorService, private _formBuilder: FormBuilder, private api: APIService, private route: ActivatedRoute, _router: Router,private titlecasePipe:TitleCasePipe,private renderer: Renderer2) {
    Amplify.configure(awsExports);
    this.router = _router;

 if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])}
    if(Cache.getItem('midtermenter')=="yes") {Cache.removeItem("midtermenter");} //incase user directly enters house link, then they are taken to login and StepA completion page and then Senate homepage. the midtermenter will ensure this routing.
    if(Cache.getItem('meetupclicked')=="yes") {Cache.removeItem("meetupclicked");}
    if(Cache.getItem('profileAstatus')=="yes") {Cache.removeItem("profileAstatus");location.reload();}


    //   if(Cache.getItem('profAevade')=="yes") {this.router.navigate(['/Meetup/Step0'])}
  }

  ngOnInit(): void {
    this.gethompage1Binitialize();
    this.zeroFormGroup = this._formBuilder.group({});
    this.fifthFormGroup = this._formBuilder.group({fifthCtrl: ['', Validators.required],});
    this.randomgen()
  }

  tabinstatedisplayitemid:string=""; tabinstatedisplayitemidtwo:string=""; //this has the itemid profile to display to user for tab1A which is index0 in array
  tabinstatedisplayitemidnext:string="";  //"next" is index1 in array and "nextnext" is index2 in array to check their unsubscribe status and whether needs to be deleted from array
  tabinstatedisplayitemidindex1:string=""; tabinstatedisplayitemidindex1next:string="";
  tabinstateendarrayitemid:string=""; tabinstateendarrayitemidnext:string=""; tabinstateendarrayitemidinitialize:string="";
  initializerflag=""; onetimenextflag=""; backflag=""; backflagnext=""; futureflag=""; initsearchflag=""; CandNeutralflag=""
  tabinstatelength="0"; tabinstatelengthnext="0";
  clicked0: boolean=false;clicked: boolean=false; clicked1: boolean=false; delayflag1:boolean=true; delayflag2:boolean=true;
  viewtoggle=""; urlA:string;   urlAnext:string; urlA1000:string; urlSearch:string; s3file10=""; s3file100=""; s3file1000=""; //signed url to the image stored in s3
  stateuser=""; loyalty=0; FindDistrict='https://www.senate.gov/senators/senators-contact.htm';
  click10=''; click11='';click12='';
  Party10="";State10="";Website10="";PictureAttribution10="";Coms10="";Motto10=""; OverallYea10=""; OverallNay10=""
  Party100="";State100="";Website100="";PictureAttribution100="";Coms100="";Motto100=""; OverallYea100=""; OverallNay100=""
  Party1000="";State1000="";Website1000="";PictureAttribution1000="";Coms1000="";Motto1000=""; OverallYea1000=""; OverallNay1000=""
  CandName10=""; CandName100="";CandName1000=""
  votedindexes=[]; comcateg=""; votedindexesissue=[]; isscateg=""; prefercateg=""; searchcandname=""; votedindexesissuecand10=[];votedindexesissuecand100=[];votedindexesissuecand1000=[];votedissuecounter10=[0]; votedissuecounter100=[0];votedissuecounter1000=[0];
  futurecomcandsvotedon10=[""];FutureComPreferArray10=[]

  CAgricultureYea=0; CAgricultureNay=0; CAppropriationsYea=0;	CAppropriationsNay=0;	CArmedYea=0;	CArmedNay=0;	CBankingYea=0;	CBankingNay=0;	CBudgetYea=0;	CBudgetNay=0;	CCommerceYea=0;	CCommerceNay=0;	CEnergyYea=0;	CEnergyNay=0;	CEnvironmentYea=0;	CEnvironmentNay=0;	CFinanceYea=0;	CFinanceNay=0;	CForeignYea=0;	CForeignNay=0;	CHealthYea=0;	CHealthNay=0;	CHomelandYea=0;	CHomelandNay=0;	CIndianYea=0;	CIndianNay=0;	CPrintingYea=0;	CPrintingNay=0;	CTaxationYea=0;	CTaxationNay=0;	CLibraryYea=0;	CLibraryNay=0;	CEconomicYea=0;	CEconomicNay=0;	CJudiciaryYea=0;	CJudiciaryNay=0;	CRulesYea=0;	CRulesNay=0;	CEthicsYea=0;	CEthicsNay=0;	CIntelligenceYea=0;	CIntelligenceNay=0;	CBusinessYea=0;	CBusinessNay=0;	CAgingYea=0;	CAgingNay=0;	CVeteranYea=0;	CVeteranNay=0;
  IAbortionYea=0;	IAbortionNay=0;	IGunsYea=0;	IGunsNay=0; IJobsYea=0; IJobsNay=0;	IVeteransYea=0;	IVeteransNay=0; IBorderYea=0;	IBorderNay=0;IFarmersYea=0;	IFarmersNay=0; IClimateYea=0;	IClimateNay=0;	ISeniorsYea=0;	ISeniorsNay=0;  IDefenseYea=0;	IDefenseNay=0; IEnergyYea=0;	IEnergyNay=0;IInfrastructureYea=0;	IInfrastructureNay=0; INaturalYea=0;	INaturalNay=0;	IManufacturingYea=0;	IManufacturingNay=0;	 ILandsYea=0;	ILandsNay=0;IHealthcareYea=0;	IHealthcareNay=0; IMentalYea=0;	IMentalNay=0;	IEducationYea=0;	IEducationNay=0;	IEconomyYea=0;	IEconomyNay=0;

  zeroFormGroup: FormGroup; fifthFormGroup: FormGroup; FutureCom1=""; FutureCom2=""; FutureCom3="";
  Coms10new=[]; FirstComPrefer10=[]; SecondComPrefer10=[]; ThirdComPrefer10=[]; FutureComCandViewed:Number; clicked10: boolean=true; CandLastNameSelect=""; nomatchinglastname="";
  CandNameSearch="";s3fileSearch=""; DistrictSearch="";PartySearch="";StateSearch="";WebsiteSearch="";PictureAttributionSearch="";MottoSearch=""; OverallYeaSearch=""; OverallNaySearch="";FirstComPreferSearch=[]; SecondComPreferSearch=[]; ThirdComPreferSearch=[];
  Coms100new=[]; FirstComPrefer100=[]; SecondComPrefer100=[]; ThirdComPrefer100=[];
  Coms1000new=[]; FirstComPrefer1000=[]; SecondComPrefer1000=[]; ThirdComPrefer1000=[]; statedropdown=''; HOMEstate=''

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
    this.CandName10= this.CandName1000; this.Party10=this.Party1000; this.State10=this.State1000;
    this.Website10=this.Website1000;this.PictureAttribution10=this.PictureAttribution1000; this.Motto10=this.Motto1000;
    this.OverallYea10=this.OverallYea1000;this.OverallNay10=this.OverallNay1000; this.s3file10=this.s3file1000;this.Coms10=this.Coms1000;
    this.Coms10new=this.Coms1000new;this.urlA=this.urlA1000;this.FirstComPrefer10=this.FirstComPrefer1000;this.SecondComPrefer10=this.SecondComPrefer1000; this.ThirdComPrefer10=this.ThirdComPrefer1000
    this.votedindexesissuecand10=this.votedindexesissuecand1000; this.votedissuecounter10=this.votedissuecounter1000
    this.viewtoggle="yes"; this.initializerflag=""; this.onetimenextflag=""; this.clicked=false;
    this.deleteindex0idrecur100Next();
  }

  viewtoggle2next() { window.scrollTo(0,0);
    this.CandName10= this.CandName100; this.Party10=this.Party100; this.State10=this.State100;
    this.Website10=this.Website100;this.PictureAttribution10=this.PictureAttribution100; this.Motto10=this.Motto100;
    this.OverallYea10=this.OverallYea100;this.OverallNay10=this.OverallNay100; this.s3file10=this.s3file100;this.Coms10=this.Coms100;
    this.Coms10new=this.Coms100new;this.urlA=this.urlAnext;this.FirstComPrefer10=this.FirstComPrefer100;this.SecondComPrefer10=this.SecondComPrefer100; this.ThirdComPrefer10=this.ThirdComPrefer100
    this.votedindexesissuecand10=this.votedindexesissuecand100; this.votedissuecounter10=this.votedissuecounter100;
    this.viewtoggle="no";this.initializerflag=""; this.onetimenextflag=""; this.clicked1=false;
    this.deleteindex0idrecur10Next();
  }

  onetimenextnext() {window.scrollTo(0,0);
    this.CandName10= this.CandName100; this.Party10=this.Party100; this.State10=this.State100;
    this.Website10=this.Website100;this.PictureAttribution10=this.PictureAttribution100; this.Motto10=this.Motto100;
    this.OverallYea10=this.OverallYea100;this.OverallNay10=this.OverallNay100; this.s3file10=this.s3file100;this.Coms10=this.Coms100;
    this.Coms10new=this.Coms100new;this.urlA=this.urlAnext;this.FirstComPrefer10=this.FirstComPrefer100;this.SecondComPrefer10=this.SecondComPrefer100; this.ThirdComPrefer10=this.ThirdComPrefer100
    this.votedindexesissuecand10=this.votedindexesissuecand100; this.votedissuecounter10=this.votedissuecounter100
    this.onetimenextflag='yes';this.deleteindex0idinitializeNext();}

  //moves itemid to end of array . deletes item at index0.  this two operations have to be sequenced.
  async deleteindex0idinitializeNext() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtontabsenateinstate(user.attributes.sub,this.tabinstatedisplayitemid).then((event1) => {
      this.gethompage1Arecur10()
    });
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtontabsenateinstate(user.attributes.sub,this.tabinstatedisplayitemidnext).then((event1) => {
      this.gethompage1Arecur10() })
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtontabsenateinstate(user.attributes.sub,this.tabinstatedisplayitemid).then((event1) => {
      this.gethompage1Arecur100()})
  }

  //anytime in UX journey user can click button and the candidates of their home state will be loaded into the main house array. it is a copy from their home array in usercandarraydisplay table into main house array.
  //index 0:AL. 1:AZ. 2:AR. 3:CA. 4:CO. 5:CT. 6:DE. 7:FL. 8:GA. 9:HI. 10:ID. 11:IL. 12:IN. 13: IA.
  // 14:KS. 15:KY. 16:LA. 17:ME. 18:MD. 19:MA. 20:MI. 21:MN. 22:MS. 23:MO. 24:MT. 25:NE. 26:NV.
  // 27:NH. 28:NJ. 29:NM. 30:NY. 31:NC. 32:ND. 33:OH. 34:OK. 35:OR. 36:PA. 37:RI. 38:SC. 39:SD.
  //40:TN. 41:TX. 42:UT. 43:VT. 44:VA. 45:WA. 46:WV. 47:WI. 48:WY. 49: AK.
  async sethomecands() {const user = await Auth.currentAuthenticatedUser();
     this.api.DropdownUpdateArraysenate(user.attributes.sub, this.HOMEstate).then((event1) => {this.reloadComponent()})
  }

  //dropdown state if selected then candidates of that state are loaded
  async setdropdowncands() {const user = await Auth.currentAuthenticatedUser();
    if(this.statedropdown!='') {
      this.api.DropdownUpdateArraysenate(user.attributes.sub,this.statedropdown).then((event1) => {this.reloadComponent()})
    } }

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Binitialize() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/initsenatedup/m", paramsp1).then(response1 =>
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
    API.get("storeresultt4", "/storesenate/m", paramsp1).then(response1 => { console.log(response1)
       this.Party10=response1.data[0].Party; this.State10=response1.data[0].StateCand; this.statedropdown=response1.data[0].StateCand;
      this.Website10=response1.data[0].Website; this.PictureAttribution10=response1.data[0].PictureAttribution;
      this.CandName10=this.tabinstatedisplayitemid; this.Motto10=response1.data[0].Motto; this.OverallYea10=response1.data[0].OverallYea;
      this.OverallNay10=response1.data[0].OverallNay; this.s3file10=response1.data[0].s3file;
      this.Coms10=response1.data[0].Coms; this.Coms10new=JSON.parse(response1.data[0].Coms)
      Storage.get(response1.data[0].s3file).then( res => {this.urlA=res});
      this.FirstComPrefer10=response1.data[0].FirstComPrefer;
      this.SecondComPrefer10=response1.data[0].SecondComPrefer; this.ThirdComPrefer10=response1.data[0].ThirdComPrefer;
      this.initializerflag = "yes"; }).catch(error => {console.log(error.response1)});
    //Issue category-gets kill flags on whether overall issue category has been voted. votedindexesissue is an array of indicies, position0 index in this array is I0 categ, position1 index in this array is I1 categ
    this.api.ListVotedIdsIssuesflagssenate(user.attributes.sub,this.tabinstatedisplayitemid).then((event4) => {console.log(event4)
      this.votedindexesissuecand10=event4.VotedIdsFlagArrayCand as unknown as any;
      this.futurecomcandsvotedon10=event4.futurecomcandsvotedon as string[]; this.FutureComPreferArray10=event4.FutureComPreferArray as [];
      this.FutureComCandViewed=event4.FutureComCandViewed as unknown as any;});
    this.GetIssueInitialize(this.tabinstatedisplayitemid)
    this.getitem2initialize()
  }

  //var1 is candname
  async GetIssueInitialize(var1:string) {const user = await Auth.currentAuthenticatedUser();
    //Com category-gets kill flags on whether a com category has been voted. votedindexes is an array of indices, position0 index in this array is P0 categ, position1 index in this array is P1 categ
    //Issue category for whom the results need to be display as view results button was clicked and then there were two ad pages. this also sets the isscategory to blank after reading it.
    this.api.GetIssueCategsenate(user.attributes.sub,var1).then((event3) => {console.log(event3)
      this.votedindexes = event3.VotedIdsFlagArray as unknown as any; console.log(this.votedindexes)
        //Com results. has the results of all categories from the ushouserepcandscoms table
    let paramsp6 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemid} };
    API.get("comsresultt4", "/comssenate/m", paramsp6).then(response6 => {this.CAgricultureYea=+response6.data[0].CAgricultureYea; this.CAgricultureNay=+response6.data[0].CAgricultureNay;  this.CAppropriationsYea=+response6.data[0].CAppropriationsYea; this.CAppropriationsNay=+response6.data[0].CAppropriationsNay; this.CArmedYea=+response6.data[0].CArmedYea;  this.CArmedNay=+response6.data[0].CArmedNay; this.CBankingYea=+response6.data[0].CBankingYea; this.CBankingNay=+response6.data[0].CBankingNay; this.CBudgetYea=+response6.data[0].CBudgetYea; this.CBudgetNay=+response6.data[0].CBudgetNay; this.CCommerceYea=+response6.data[0].CCommerceYea; this.CCommerceNay=+response6.data[0].CCommerceNay; this.CEnergyYea=+response6.data[0].CEnergyYea; this.CEnergyNay=+response6.data[0].CEnergyNay; this.CEnvironmentYea=+response6.data[0].CEnvironmentYea; this.CEnvironmentNay=+response6.data[0].CEnvironmentNay; this.CFinanceYea=+response6.data[0].CFinanceYea; this.CFinanceNay=+response6.data[0].CFinanceNay; this.CForeignYea=+response6.data[0].CForeignYea; this.CForeignNay=+response6.data[0].CForeignNay; this.CHealthYea=+response6.data[0].CHealthYea; this.CHealthNay=+response6.data[0].CHealthNay; this.CHomelandYea=+response6.data[0].CHomelandYea; this.CHomelandNay=+response6.data[0].CHomelandNay; this.CIndianYea=+response6.data[0].CIndianYea; this.CIndianNay=+response6.data[0].CIndianNay; this.CPrintingYea=+response6.data[0].CPrintingYea; this.CPrintingNay=+response6.data[0].CPrintingNay; this.CTaxationYea=+response6.data[0].CTaxationYea; this.CTaxationNay=+response6.data[0].CTaxationNay; this.CLibraryYea=+response6.data[0].CLibraryYea; this.CLibraryNay=+response6.data[0].CLibraryNay; this.CEconomicYea=+response6.data[0].CEconomicYea; this.CEconomicNay=+response6.data[0].CEconomicNay; this.CJudiciaryYea=+response6.data[0].CJudiciaryYea; this.CJudiciaryNay=+response6.data[0].CJudiciaryNay; this.CRulesYea=+response6.data[0].CRulesYea; this.CRulesNay=+response6.data[0].CRulesNay; this.CEthicsYea=+response6.data[0].CEthicsYea; this.CEthicsNay=+response6.data[0].CEthicsNay; this.CIntelligenceYea=+response6.data[0].CIntelligenceYea; this.CIntelligenceNay=+response6.data[0].CIntelligenceNay; this.CBusinessYea=+response6.data[0].CBusinessYea; this.CBusinessNay=+response6.data[0].CBusinessNay; this.CAgingYea=+response6.data[0].CAgingYea; this.CAgingNay=+response6.data[0].CAgingNay; this.CVeteranYea=+response6.data[0].CVeteranYea; this.CVeteranNay=+response6.data[0].CVeteranNay;}).catch(error => {console.log(error.response6)});
    //Issues results from the ushouserepcandsissues table
        let paramsp7 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemid} };
        API.get("issresultt4", "/isssenate/m", paramsp7).then(response7 => {this.IAbortionYea=+response7.data[0].IAbortionYea; this.IAbortionNay=+response7.data[0].IAbortionNay; this.IGunsYea=+response7.data[0].IGunsYea; this.IGunsNay=+response7.data[0].IGunsNay; this.IJobsYea=+response7.data[0].IJobsYea; this.IJobsNay=+response7.data[0].IJobsNay; this.IVeteransYea=+response7.data[0].IVeteransYea; this.IVeteransNay=+response7.data[0].IVeteransNay; this.IBorderYea=+response7.data[0].IBorderYea; this.IBorderNay=+response7.data[0].IBorderNay; this.IFarmersYea=+response7.data[0].IFarmersYea; this.IFarmersNay=+response7.data[0].IFarmersNay; this.IClimateYea=+response7.data[0].IClimateYea; this.IClimateNay=+response7.data[0].IClimateNay; this.ISeniorsYea=+response7.data[0].ISeniorsYea; this.ISeniorsNay=+response7.data[0].ISeniorsNay; this.IDefenseYea=+response7.data[0].IDefenseYea; this.IDefenseNay=+response7.data[0].IDefenseNay; this.IEnergyYea=+response7.data[0].IEnergyYea; this.IEnergyNay=+response7.data[0].IEnergyNay; this.IInfrastructureYea=+response7.data[0].IInfrastructureYea; this.IInfrastructureNay=+response7.data[0].IInfrastructureNay; this.INaturalYea=+response7.data[0].INaturalYea; this.INaturalNay=+response7.data[0].INaturalNay; this.IManufacturingYea=+response7.data[0].IManufacturingYea; this.IManufacturingNay=+response7.data[0].IManufacturingNay; this.ILandsYea=+response7.data[0].ILandsYea; this.ILandsNay=+response7.data[0].ILandsNay; this.IHealthcareYea=+response7.data[0].IHealthcareYea; this.IHealthcareNay=+response7.data[0].IHealthcareNay; this.IEducationYea=+response7.data[0].IEducationYea; this.IEducationNay=+response7.data[0].IEducationNay; this.IEconomyYea=+response7.data[0].IEconomyYea; this.IEconomyNay=+response7.data[0].IEconomyNay;}).catch(error => {console.log(error.response7)});
      this.prefercateg = event3.prefercateg as unknown as any;
      this.isscateg = event3.isscateg as unknown as any;this.comcateg = event3.comcateg as unknown as any;
    });
  }

  async getitem2initialize() {const user = await Auth.currentAuthenticatedUser();
    //retrieves info in itemid2.
    let paramsp2 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemidnext} };
    API.get("storeresultt4", "/storesenate/m", paramsp2).then(response2 => {
      this.CandName100=this.tabinstatedisplayitemidnext; this.Party100=response2.data[0].Party; this.State100=response2.data[0].StateCand;
      this.Website100=response2.data[0].Website; this.PictureAttribution100=response2.data[0].PictureAttribution;
      this.Motto100=response2.data[0].Motto; this.OverallYea100=response2.data[0].OverallYea;
      this.OverallNay100=response2.data[0].OverallNay;  this.s3file100=response2.data[0].s3file;
      this.Coms100=response2.data[0].Coms;this.Coms100new=JSON.parse(response2.data[0].Coms)
      Storage.get(response2.data[0].s3file).then( res => {this.urlAnext=res});
      this.FirstComPrefer100=response2.data[0].FirstComPrefer;
      this.SecondComPrefer100=response2.data[0].SecondComPrefer; this.ThirdComPrefer100=response2.data[0].ThirdComPrefer;
      this.api.ListVotedIdsIssuesflagssenate(user.attributes.sub,this.tabinstatedisplayitemidnext).then((event5) => {
        this.votedindexesissuecand100=event5.VotedIdsFlagArrayCand as unknown as any;});
    }).catch(error => {console.log(error.response2)});
  }

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur10() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/initsenatedup/m", paramsp1).then(response1 =>
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
    API.get("storeresultt4", "/storesenate/m", paramsp1).then(response1 => {
      this.CandName1000=var1; this.Party1000=response1.data[0].Party; this.State1000=response1.data[0].StateCand;
      this.Website1000=response1.data[0].Website; this.PictureAttribution1000=response1.data[0].PictureAttribution;
      this.Motto1000=response1.data[0].Motto; this.OverallYea1000=response1.data[0].OverallYea;
      this.OverallNay1000=response1.data[0].OverallNay; this.s3file1000=response1.data[0].s3file;
      this.Coms1000=response1.data[0].Coms; this.Coms1000new=JSON.parse(response1.data[0].Coms)
      this.FirstComPrefer1000=response1.data[0].FirstComPrefer;this.SecondComPrefer1000=response1.data[0].SecondComPrefer; this.ThirdComPrefer1000=response1.data[0].ThirdComPrefer;
      Storage.get(response1.data[0].s3file).then( res => {this.urlA1000=res});
      this.api.ListVotedIdsIssuesflagssenate(user.attributes.sub,var1).then((event5) => {
        this.votedindexesissuecand1000=event5.VotedIdsFlagArrayCand as unknown as any;});
    }).catch(error => {console.log(error.response1)});
  }


  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur100() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/initsenatedup/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tabinstatedisplayitemidnext=response1.data[0];
      this.tabinstatedisplayitemidindex1next=response1.data[1];
      this.tabinstatelengthnext=response1.data[3]; this.tabinstateendarrayitemidnext=response1.data[4];
      console.log(this.tabinstatedisplayitemidnext);
      this.gethompageF1Arecur100();
      if(+this.tabinstatelengthnext==1) {this.clicked0=true}
    }).catch(error => {console.log(error.response1)});
  }

  async gethompageF1Arecur100() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp2 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemidindex1next} };
    API.get("storeresultt4", "/storesenate/m", paramsp2).then(response2 => {
      this.CandName100=this.tabinstatedisplayitemidindex1next; this.Party100=response2.data[0].Party; this.State100=response2.data[0].StateCand;
      this.Website100=response2.data[0].Website; this.PictureAttribution100=response2.data[0].PictureAttribution;
      this.Motto100=response2.data[0].Motto; this.OverallYea100=response2.data[0].OverallYea;
      this.OverallNay100=response2.data[0].OverallNay; this.s3file100=response2.data[0].s3file;
      this.Coms100=response2.data[0].Coms;this.Coms100new=JSON.parse(response2.data[0].Coms)
      this.FirstComPrefer100=response2.data[0].FirstComPrefer; this.SecondComPrefer100=response2.data[0].SecondComPrefer; this.ThirdComPrefer100=response2.data[0].ThirdComPrefer;
      Storage.get(response2.data[0].s3file).then( res => {this.urlAnext=res});
      this.api.ListVotedIdsIssuesflagssenate(user.attributes.sub,this.tabinstatedisplayitemidindex1next).then((event5) => {
        this.votedindexesissuecand100=event5.VotedIdsFlagArrayCand as unknown as any;});
    }).catch(error => {console.log(error.response2)});
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle1back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtontabsenateinstate(user.attributes.sub,this.tabinstateendarrayitemid,
      +this.tabinstatelength).then((event1) => {;this.reloadComponent()})
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle2back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtontabsenateinstate(user.attributes.sub,this.tabinstateendarrayitemidnext,
      +this.tabinstatelengthnext).then((event1) => {;this.reloadComponent()})
  };

  //back button this is needed for one-time itemids
  async initializeclick1itemidback() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab2
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtontabsenateinstate(user.attributes.sub,this.tabinstateendarrayitemidinitialize,
      +this.tabinstatelength).then((event1) => {this.reloadComponent()})
  }

  //future comittee: this will do a temp store of the webpagevalue and prefercateg, so that after the ads we know where the user was.
  async ConfclickPreferResults(){
    const user = await Auth.currentAuthenticatedUser();
      const paramspG = {body: {userid:user.attributes.sub, webpagevalue: "Senate", comcateg: "future", categcol:"prefercateg"}}
      API.post("initializeuserarrayt4", "/index", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
    }

//enable the submit button when atleast one field of the committee is chosen
  async futcom(event:any) {this.clicked10=false};

  //store future committee assignments selection. var1 is cand name. var2 is array of firstpreference commitee with 22 indicies. var3 and var4 is secondpreference and thirdpreference committes. var5 is s3filename.
  async comprefer(var1:string, var2:number[],var3:number[],var4:number[],var5:string) {const user = await Auth.currentAuthenticatedUser(); console.log(var2); console.log(this.FutureCom1)
    this.api.FutureComPreferResultsenate(var1,user.attributes.sub,var2,var3,var4,this.FutureCom1,this.FutureCom2,this.FutureCom3,100).then((event8) => {});
  }

  // this will do a temp store of the webpagevalue and comcateg, so that after the ads we know where the user was. var2 is category of committee.
  async ConfclickComResults( var2:string){
    const user = await Auth.currentAuthenticatedUser();
      const paramspG = {body: {userid:user.attributes.sub, webpagevalue: "Senate", comcateg: var2, categcol:"comcateg"}}
      API.post("initializeuserarrayt4", "/index", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
    }

  // this will do a temp store of the webpagevalue and issuecateg, so that after the ads we know where the user was. var2 is category of committee.
  async ConfclickIssResults( var2:string){
    const user = await Auth.currentAuthenticatedUser();
      const paramspG = {body: {userid:user.attributes.sub, webpagevalue: "Senate", comcateg: var2, categcol:"isscateg"}}
      API.post("initializeuserarrayt4", "/index", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
    }

  //scroll to appropriate section
  overallfunc(){try {const errorField = this.renderer.selectRootElement('.overall_class');errorField.scrollIntoView();} catch (err) {}}
  assignfunc(){try {const errorField = this.renderer.selectRootElement('.assign_class');errorField.scrollIntoView();} catch (err) {}}
  comperffunc(){try {const errorField = this.renderer.selectRootElement('.comperf_class');errorField.scrollIntoView();} catch (err) {}}
  issperffunc(){try {const errorField = this.renderer.selectRootElement('.issperf_class');errorField.scrollIntoView();} catch (err) {}}
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

  //Issues confirmation button. Updates the voting results and store loyalty points. and stores that an ID has been voted on, so same button doesn't appear again.  var1 is candidatename. var2 is s3file picture filename.
  //Dialog box pop-up for voting confirmation
  async YEAclick2z() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'Overallysen'},}).afterClosed().subscribe(result => {
    this.api.OverallResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"Overallysen", "Overallsen",100).then((event) => {});});}
  async NAYclick2z() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'Overallnsen'},}).afterClosed().subscribe(result => {
    this.api.OverallResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"Overallnsen", "Overallsen",100).then((event) => {});});}
  async YEAclickP0() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P0ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('POsen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P0ysen", "P0sen",100).then((event) => {});});}
  async NAYclickP0() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P0nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('POsen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P0nsen", "P0sen",100).then((event) => {});});}
  async YEAclickP1() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P1ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P1sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P1ysen", "P1sen",100).then((event) => {});});}
  async NAYclickP1() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P1nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P1sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P1nsen", "P1sen",100).then((event) => {});});}
  async YEAclickP2() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P2ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P2sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P2ysen", "P2sen",100).then((event) => {});});}
  async NAYclickP2() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P2nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P2sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P2nsen", "P2sen",100).then((event) => {});});}
  async YEAclickP3() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P3ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P3sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P3ysen", "P3sen",100).then((event) => {});});}
  async NAYclickP3() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P3nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P3sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P3nsen", "P3sen",100).then((event) => {});});}
  async YEAclickP4() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P4ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P4sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P4ysen", "P4sen",100).then((event) => {});});}
  async NAYclickP4() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P4nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P4sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P4nsen", "P4sen",100).then((event) => {});});}
  async YEAclickP5() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P5ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P5sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P5ysen", "P5sen",100).then((event) => {});});}
  async NAYclickP5() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P5nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P5sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P5nsen", "P5sen",100).then((event) => {});});}
  async YEAclickP6() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P6ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P6sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P6ysen", "P6sen",100).then((event) => {});});}
  async NAYclickP6() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P6nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P6sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P6nsen", "P6sen",100).then((event) => {});});}
  async YEAclickP7() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P7ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P7sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P7ysen", "P7sen",100).then((event) => {});});}
  async NAYclickP7() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P7nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P7sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P7nsen", "P7sen",100).then((event) => {});});}
  async YEAclickP8() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P8ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P8sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P8ysen", "P8sen",100).then((event) => {});});}
  async NAYclickP8() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P8nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P8sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P8nsen", "P8sen",100).then((event) => {});});}
  async YEAclickP9() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P9ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P9sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P9ysen", "P9sen",100).then((event) => {});});}
  async NAYclickP9() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P9nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P9sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P9nsen", "P9sen",100).then((event) => {});});}
  async YEAclickP10() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P10ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P10sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P10ysen", "P10sen",100).then((event) => {});});}
  async NAYclickP10() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P10nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P1Osen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P10nsen", "P10sen",100).then((event) => {});});}
  async YEAclickP11() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P11ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P11sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P11ysen", "P11sen",100).then((event) => {});});}
  async NAYclickP11() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P11nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P11sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P11nsen", "P11sen",100).then((event) => {});});}
  async YEAclickP12() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P12ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P12sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P12ysen", "P12sen",100).then((event) => {});});}
  async NAYclickP12() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P12nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P12sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P12nsen", "P12sen",100).then((event) => {});});}
  async YEAclickP13() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P13ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P13sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P13ysen", "P13sen",100).then((event) => {});});}
  async NAYclickP13() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P13nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P13sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P13nsen", "P13sen",100).then((event) => {});});}
  async YEAclickP14() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P14ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P14sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P14ysen", "P14sen",100).then((event) => {});});}
  async NAYclickP14() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P14nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P14sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P14nsen", "P14sen",100).then((event) => {});});}
  async YEAclickP15() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P15ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P15sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P15ysen", "P15sen",100).then((event) => {});});}
  async NAYclickP15() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P15nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P15sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P15nsen", "P15sen",100).then((event) => {});});}
  async YEAclickP16() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P16ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P16sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P16ysen", "P16sen",100).then((event) => {});});}
  async NAYclickP16() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P16nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P16sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P16nsen", "P16sen",100).then((event) => {});});}
  async YEAclickP17() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P17ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P17sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P17ysen", "P17sen",100).then((event) => {});});}
  async NAYclickP17() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P17nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P17sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P17nsen", "P17sen",100).then((event) => {});});}
  async YEAclickP18() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P18ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P18sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P18ysen", "P18sen",100).then((event) => {});});}
  async NAYclickP18() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P18nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P18sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P18nsen", "P18sen",100).then((event) => {});});}
  async YEAclickP19() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P19ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P19sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P19ysen", "P19sen",100).then((event) => {});});}
  async NAYclickP19() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P19nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P19sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P19nsen", "P19sen",100).then((event) => {});});}
  async YEAclickP20() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P20ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P20sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P20ysen", "P20sen",100).then((event) => {});});}
  async NAYclickP20() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P20nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P2Osen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P20nsen", "P20sen",100).then((event) => {});});}
  async YEAclickP21() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P21ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P21sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P21ysen", "P21sen",100).then((event) => {});});}
  async NAYclickP21() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P21nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P21sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P21nsen", "P21sen",100).then((event) => {});});}
  async YEAclickP22() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P22ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P22sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P22ysen", "P22sen",100).then((event) => {});});}
  async NAYclickP22() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P22nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P22sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P22nsen", "P22sen",100).then((event) => {});});}
  async YEAclickP23() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P23ysen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P23sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P23ysen", "P23sen",100).then((event) => {});});}
  async NAYclickP23() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'P23nsen'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P23sen');
    this.api.ComResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"P23nsen", "P23sen",100).then((event) => {});});}


  async YEAclickI0() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I0ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I0sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I0ysen", "I0sen",100).then((event) => {});});}
  async NAYclickI0() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I0nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I0sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I0nsen", "I0sen",100).then((event) => {});});}
  async YEAclickI1() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I1ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I1sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I1ysen", "I1sen",100).then((event) => {});});}
  async NAYclickI1() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I1nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I1sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I1nsen", "I1sen",100).then((event) => {});});}
  async YEAclickI2() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I2ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I2sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I2ysen", "I2sen",100).then((event) => {});});}
  async NAYclickI2() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I2nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I2sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I2nsen", "I2sen",100).then((event) => {});});}
  async YEAclickI3() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I3ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I3sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I3ysen", "I3sen",100).then((event) => {});});}
  async NAYclickI3() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I3nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I3sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I3nsen", "I3sen",100).then((event) => {});});}
  async YEAclickI4() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I4ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I4sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I4ysen", "I4sen",100).then((event) => {});});}
  async NAYclickI4() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I4nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I4sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I4nsen", "I4sen",100).then((event) => {});});}
  async YEAclickI5() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I5ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I5sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I5ysen", "I5sen",100).then((event) => {});});}
  async NAYclickI5() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I5nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I5sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I5nsen", "I5sen",100).then((event) => {});});}
  async YEAclickI6() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I6ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I6sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I6ysen", "I6sen",100).then((event) => {});});}
  async NAYclickI6() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I6nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I6sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I6nsen", "I6sen",100).then((event) => {});});}
  async YEAclickI7() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I7ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I7sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I7ysen", "I7sen",100).then((event) => {});});}
  async NAYclickI7() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I7nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I7sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I7nsen", "I7sen",100).then((event) => {});});}
  async YEAclickI8() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I8ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I8sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I8ysen", "I8sen",100).then((event) => {});});}
  async NAYclickI8() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I8nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I8sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I8nsen", "I8sen",100).then((event) => {});});}
  async YEAclickI9() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I9ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I9sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I9ysen", "I9sen",100).then((event) => {});});}
  async NAYclickI9() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I9nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I9sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I9nsen", "I9sen",100).then((event) => {});});}
  async YEAclickI10() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I10ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I10sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I10ysen", "I10sen",100).then((event) => {});});}
  async NAYclickI10() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I10nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I10sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I10nsen", "I10sen",100).then((event) => {});});}
  async YEAclickI11() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I11ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I11sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I11ysen", "I11sen",100).then((event) => {});});}
  async NAYclickI11() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I11nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I11sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I11nsen", "I11sen",100).then((event) => {});});}
  async YEAclickI12() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I12ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I12sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I12ysen", "I12sen",100).then((event) => {});});}
  async NAYclickI12() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I12nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I12sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I12nsen", "I12sen",100).then((event) => {});});}
  async YEAclickI13() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I13ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I13sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I13ysen", "I13sen",100).then((event) => {});});}
  async NAYclickI13() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I13nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I13sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I13nsen", "I13sen",100).then((event) => {});});}
  async YEAclickI14() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I14ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I14sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I14ysen", "I14sen",100).then((event) => {});});}
  async NAYclickI14() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I14nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I14sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I14nsen", "I14sen",100).then((event) => {});});}
  async YEAclickI15() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I15ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I15sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I15ysen", "I15sen",100).then((event) => {});});}
  async NAYclickI15() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I15nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I15sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I15nsen", "I15sen",100).then((event) => {});});}
  async YEAclickI16() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I16ysen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I16sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I16ysen", "I16sen",100).then((event) => {});});}
  async NAYclickI16() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogsenateComponent,{
    data: {voteflag: 'I16nsen'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I16sen');
    this.api.IssResultUpdatetabsenateinstate(this.CandName10,user.attributes.sub,"I16nsen", "I16sen",100).then((event) => {});});}

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
    let   max = Math.floor(6);
    this.selectorflag=Math.floor(Math.random() * (max - min + 1) + min);
  }


}
export interface DialogDatasenate {
  voteflag: 'Overallysen' | 'Overallnsen' |'P0ysen' |'P0nsen' |'P1ysen' |'P1nsen' |'P2ysen' |'P2nsen'|'P3ysen' |'P3nsen'|'P4ysen' |'P4nsen'|'P5ysen' |'P5nsen'|'P6ysen' |'P6nsen'
    |'P7ysen' |'P7nsen'|'P8ysen' |'P8nsen'|'P9ysen' |'P9nsen'|'P10ysen' |'P10nsen'|'P11ysen' |'P11nsen'|'P12ysen' |'P12nsen'|'P13ysen' |'P13nsen'|'P14ysen' |'P14nsen'|'P15ysen' |'P15nsen'
    |'P16ysen' |'P16nsen'|'P17ysen' |'P17nsen'|'P18ysen' |'P18nsen'|'P19ysen' |'P19nsen'|'P20ysen' |'P20nsen'|'P21ysen' |'P21nsen' |'P22ysen' |'P22nsen' |'P23ysen' |'P23nsen' |'I0ysen' |'I0nsen' |'I1ysen' |'I1nsen' |'I2ysen' |'I2nsen'|'I3ysen' |'I3nsen'|'I4ysen' |'I4nsen'|'I5ysen' |'I5nsen'|'I6ysen' |'I6nsen'
    |'I7ysen' |'I7nsen'|'I8ysen' |'I8nsen'|'I9ysen' |'I9nsen'|'I10ysen' |'I10nsen'|'I11ysen' |'I11nsen'|'I12ysen' |'I12nsen'|'I13ysen' |'I13nsen'|'I14ysen' |'I14nsen'|'I15ysen' |'I15nsen'
    |'I16ysen' |'I16nsen';
}




