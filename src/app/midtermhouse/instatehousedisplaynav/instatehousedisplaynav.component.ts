
import {Component, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {APIService,CandNameOutArray} from "../../API.service";
import Amplify, {API, Auth, Cache, Storage} from "aws-amplify";
import awsExports from "../../../aws-exports";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import {MatDialog,} from '@angular/material/dialog';
import {ConfdialogComponent} from "../confdialog/confdialog.component";

@Component({
  selector: 'app-instatehousedisplaynav',
  templateUrl: './instatehousedisplaynav.component.html',
  styleUrls: ['./instatehousedisplaynav.component.css'],
  providers: [TitleCasePipe],
})
export class InstatehousedisplaynavComponent implements OnInit {

  router: Router;
  constructor(public dialog: MatDialog, public authenticator: AuthenticatorService, private _formBuilder: FormBuilder, private api: APIService, private route: ActivatedRoute, _router: Router,private titlecasePipe:TitleCasePipe,private renderer: Renderer2) {
    Amplify.configure(awsExports); this.router = _router;
    if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])}
//    if(Cache.getItem('profAevade')=="yes") {this.router.navigate(['/Meetup/Step0'])}
    const expiration = new Date().valueOf()
    Cache.setItem('midtermenter', 'yes', { expires: expiration +1800000 }); // 30min as login needs to happen and PartA form needs to be completed

  }

  ngOnInit(): void {
    this.gethompage1Binitialize()
    this.zeroFormGroup = this._formBuilder.group({});
    this.fifthFormGroup = this._formBuilder.group({fifthCtrl: ['', Validators.required],});
  }

  tabinstatedisplayitemid:string=""; tabinstatedisplayitemidtwo:string=""; //this has the itemid profile to display to user for tab1A which is index0 in array
  tabinstatedisplayitemidnext:string="";  //"next" is index1 in array and "nextnext" is index2 in array to check their unsubscribe status and whether needs to be deleted from array
  tabinstatedisplayitemidindex1:string=""; tabinstatedisplayitemidindex1next:string="";
  tabinstateendarrayitemid:string=""; tabinstateendarrayitemidnext:string=""; tabinstateendarrayitemidinitialize:string="";
  initializerflag=""; onetimenextflag=""; backflag=""; backflagnext=""; futureflag=""; initsearchflag=""; CandNeutralflag=""
  public CandSearch: CandNameOutArray;
  tabinstatelength="0"; tabinstatelengthnext="0";
  clicked0: boolean=false;clicked: boolean=false; clicked1: boolean=false; delayflag1:boolean=true; delayflag2:boolean=true;
  viewtoggle=""; urlA:string;   urlAnext:string; urlA1000:string; urlSearch:string; s3file10=""; s3file100=""; s3file1000=""; //signed url to the image stored in s3
  stateuser=""; loyalty=0; FindDistrict='https://www.house.gov/representatives/find-your-representative';
  click10=''; click11='';click12='';
  District10="";Party10="";State10="";Website10="";PictureAttribution10="";Coms10="";Motto10=""; OverallYea10=""; OverallNay10=""
  District100="";Party100="";State100="";Website100="";PictureAttribution100="";Coms100="";Motto100=""; OverallYea100=""; OverallNay100=""
  District1000="";Party1000="";State1000="";Website1000="";PictureAttribution1000="";Coms1000="";Motto1000=""; OverallYea1000=""; OverallNay1000=""
  CandName10=""; CandName100="";CandName1000=""
  votedindexes=[]; comcateg=""; votedindexesissue=[]; isscateg=""; prefercateg=""; searchcandname=""; votedindexesissuecand10=[];votedindexesissuecand100=[];votedindexesissuecand1000=[];votedissuecounter10=[0]; votedissuecounter100=[0];votedissuecounter1000=[0];
  futurecomcandsvotedon10=[""];FutureComPreferArray10=[]

  CAgricultureYea=0; CAgricultureNay=0;	CFinancialYea=0;	CFinancialNay=0;	CEducationYea=0;	CEducationNay=0;	CAppropriationsYea=0;	CAppropriationsNay=0;	CAdminstrationYea=0;	CAdminstrationNay=0;	CForeignYea=0;	CForeignNay=0;	CTransportationYea=0;	CTransportationNay=0;	CVeteransYea=0;	CVeteransNay=0;	CClimateYea=0;	CClimateNay=0;	CEnergyYea=0;	CEnergyNay=0;	CEthicsYea=0;	CEthicsNay=0;	CWaysYea=0;	CWaysNay=0;	CScienceYea=0;	CScienceNay=0;	CArmedYea=0;	CArmedNay=0;	CJudiciaryYea=0;	CJudiciaryNay=0;	CHomelandYea=0;	CHomelandNay=0;	CBudgetYea=0;	CBudgetNay=0;	CNaturalYea=0;	CNaturalNay=0;	COversightYea=0;	COversightNay=0;	CSmallYea=0;	CSmallNay=0;	CTaxationYea=0;	CTaxationNay=0;	CIntelligenceYea=0;	CIntelligenceNay=0;
  IAbortionYea=0;	IAbortionNay=0;	IGunsYea=0;	IGunsNay=0; IJobsYea=0; IJobsNay=0;	IVeteransYea=0;	IVeteransNay=0; IBorderYea=0;	IBorderNay=0;IFarmersYea=0;	IFarmersNay=0; IClimateYea=0;	IClimateNay=0;	ISeniorsYea=0;	ISeniorsNay=0;  IDefenseYea=0;	IDefenseNay=0; IEnergyYea=0;	IEnergyNay=0;IInfrastructureYea=0;	IInfrastructureNay=0; INaturalYea=0;	INaturalNay=0;	IManufacturingYea=0;	IManufacturingNay=0;	 ILandsYea=0;	ILandsNay=0;IHealthcareYea=0;	IHealthcareNay=0; IMentalYea=0;	IMentalNay=0;	IEducationYea=0;	IEducationNay=0;	IEconomyYea=0;	IEconomyNay=0;

  zeroFormGroup: FormGroup; fifthFormGroup: FormGroup; FutureCom1=""; FutureCom2=""; FutureCom3=""; CandNameNeutral="";
  Coms10new=[]; FirstComPrefer10=[]; SecondComPrefer10=[]; ThirdComPrefer10=[]; FutureComCandViewed:Number; clicked10: boolean=true; CandLastNameSelect=""; nomatchinglastname="";
  CandNameSearch="";s3fileSearch=""; DistrictSearch="";PartySearch="";StateSearch="";WebsiteSearch="";PictureAttributionSearch="";MottoSearch=""; OverallYeaSearch=""; OverallNaySearch="";FirstComPreferSearch=[]; SecondComPreferSearch=[]; ThirdComPreferSearch=[];
  Coms100new=[]; FirstComPrefer100=[]; SecondComPrefer100=[]; ThirdComPrefer100=[];
  Coms1000new=[]; FirstComPrefer1000=[]; SecondComPrefer1000=[]; ThirdComPrefer1000=[];

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
    this.CandName10= this.CandName1000; this.District10=this.District1000; this.Party10=this.Party1000; this.State10=this.State1000;
    this.Website10=this.Website1000;this.PictureAttribution10=this.PictureAttribution1000; this.Motto10=this.Motto1000;
    this.OverallYea10=this.OverallYea1000;this.OverallNay10=this.OverallNay1000; this.s3file10=this.s3file1000;this.Coms10=this.Coms1000;
    this.Coms10new=this.Coms1000new;this.urlA=this.urlA1000;this.FirstComPrefer10=this.FirstComPrefer1000;this.SecondComPrefer10=this.SecondComPrefer1000; this.ThirdComPrefer10=this.ThirdComPrefer1000
    this.votedindexesissuecand10=this.votedindexesissuecand1000; this.votedissuecounter10=this.votedissuecounter1000
    this.viewtoggle="yes"; this.initializerflag=""; this.onetimenextflag=""; this.clicked=false;
    this.deleteindex0idrecur100Next();
  }

  viewtoggle2next() {window.scrollTo(0,0);
    this.CandName10= this.CandName100; this.District10=this.District100; this.Party10=this.Party100; this.State10=this.State100;
    this.Website10=this.Website100;this.PictureAttribution10=this.PictureAttribution100; this.Motto10=this.Motto100;
    this.OverallYea10=this.OverallYea100;this.OverallNay10=this.OverallNay100; this.s3file10=this.s3file100;this.Coms10=this.Coms100;
    this.Coms10new=this.Coms100new;this.urlA=this.urlAnext;this.FirstComPrefer10=this.FirstComPrefer100;this.SecondComPrefer10=this.SecondComPrefer100; this.ThirdComPrefer10=this.ThirdComPrefer100
    this.votedindexesissuecand10=this.votedindexesissuecand100; this.votedissuecounter10=this.votedissuecounter100;
    this.viewtoggle="no";this.initializerflag=""; this.onetimenextflag=""; this.clicked1=false;
    this.deleteindex0idrecur10Next();
  }

  onetimenextnext() {
    window.scrollTo(0,0);
    this.CandName10= this.CandName100; this.District10=this.District100; this.Party10=this.Party100; this.State10=this.State100;
    this.Website10=this.Website100;this.PictureAttribution10=this.PictureAttribution100; this.Motto10=this.Motto100;
    this.OverallYea10=this.OverallYea100;this.OverallNay10=this.OverallNay100; this.s3file10=this.s3file100;this.Coms10=this.Coms100;
    this.Coms10new=this.Coms100new;this.urlA=this.urlAnext;this.FirstComPrefer10=this.FirstComPrefer100;this.SecondComPrefer10=this.SecondComPrefer100; this.ThirdComPrefer10=this.ThirdComPrefer100
    this.votedindexesissuecand10=this.votedindexesissuecand100; this.votedissuecounter10=this.votedissuecounter100
    this.onetimenextflag='yes';this.deleteindex0idinitializeNext();}

  //moves itemid to end of array . deletes item at index0.  this two operations have to be sequenced.
  async deleteindex0idinitializeNext() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtontabhouseinstate(user.attributes.sub,this.tabinstatedisplayitemid).then((event1) => {
      this.gethompage1Arecur10()
    });
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtontabhouseinstate(user.attributes.sub,this.tabinstatedisplayitemidnext).then((event1) => {
      this.gethompage1Arecur10() })
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtontabhouseinstate(user.attributes.sub,this.tabinstatedisplayitemid).then((event1) => {
      this.gethompage1Arecur100()})
  }

  //anytime in UX journey user can click button and the candidates of their home state will be loaded into the main house array. it is a copy from their home array in usercandarraydisplay table into main house array.
  //index 0:AL. 1:AZ. 2:AR. 3:CA. 4:CO. 5:CT. 6:DE. 7:FL. 8:GA. 9:HI. 10:ID. 11:IL. 12:IN. 13: IA.
  // 14:KS. 15:KY. 16:LA. 17:ME. 18:MD. 19:MA. 20:MI. 21:MN. 22:MS. 23:MO. 24:MT. 25:NE. 26:NV.
  // 27:NH. 28:NJ. 29:NM. 30:NY. 31:NC. 32:ND. 33:OH. 34:OK. 35:OR. 36:PA. 37:RI. 38:SC. 39:SD.
  //40:TN. 41:TX. 42:UT. 43:VT. 44:VA. 45:WA. 46:WV. 47:WI. 48:WY.
  async sethomecands() {const user = await Auth.currentAuthenticatedUser();
    this.api.DropdownUpdateArray(user.attributes.sub, this.HOMEstate).then((event1) => {this.reloadComponent()})
  }

  //dropdown state if selected then candidates of that state are loaded
  async setdropdowncands() {const user = await Auth.currentAuthenticatedUser();
  if(this.statedropdown!='') {
    this.api.DropdownUpdateArray(user.attributes.sub,this.statedropdown).then((event1) => {this.reloadComponent()})
  } }

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Binitialize() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("initializeuserarrayt4", "/init/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tabinstatedisplayitemid=response1.data[0];
      this.tabinstatedisplayitemidnext=response1.data[1]; this.tabinstatedisplayitemidtwo=response1.data[2];
      this.tabinstatelength=response1.data[3]; this.tabinstateendarrayitemidinitialize=response1.data[4];
      this.HOMEstate=response1.data[6]; //default is that the statedropdown is same as HOMEstate. thus, a brand new user will via initialization be served their home array.
      console.log(this.tabinstatedisplayitemid); console.log(this.tabinstatedisplayitemidnext);
      this.gethompageF1Ainitialize()
      if(+this.tabinstatelength==1) {this.clicked0=true}
    }).catch(error => {console.log(error.response1)});
  }

  async gethompageF1Ainitialize() {
    const user = await Auth.currentAuthenticatedUser();
    //retrieves basic info on itemid1
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemid} };
    API.get("storeresultt4", "/store/m", paramsp1).then(response1 => { console.log(response1)
      this.District10=response1.data[0].District; this.Party10=response1.data[0].Party; this.Website10=response1.data[0].Website;
      this.State10=response1.data[0].StateCand;this.statedropdown=response1.data[0].StateCand; this.PictureAttribution10=response1.data[0].PictureAttribution;
      this.CandName10=this.tabinstatedisplayitemid; this.Motto10=response1.data[0].Motto; this.OverallYea10=response1.data[0].OverallYea;
      this.OverallNay10=response1.data[0].OverallNay; this.s3file10=response1.data[0].s3file;
      this.Coms10=response1.data[0].Coms; this.Coms10new=JSON.parse(response1.data[0].Coms)
      Storage.get(response1.data[0].s3file).then( res => {this.urlA=res});
      this.FirstComPrefer10=response1.data[0].FirstComPrefer;
      this.SecondComPrefer10=response1.data[0].SecondComPrefer; this.ThirdComPrefer10=response1.data[0].ThirdComPrefer;
      this.initializerflag = "yes";     }).catch(error => {console.log(error.response1)});
      //Issue category-gets kill flags on whether overall issue category has been voted. votedindexesissue is an array of indicies, position0 index in this array is I0 categ, position1 index in this array is I1 categ
      this.api.ListVotedIdsIssuesflagshouse(user.attributes.sub,this.tabinstatedisplayitemid).then((event4) => {
        this.votedissuecounter10 = event4.VotedIdsFlagArray as number[];
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
    //Step0: searchcateg field could be blank or it could have the search candidate name for whom results need to be displayed.
    this.api.GetIssueCateg(user.attributes.sub).then((event3) => {console.log
      this.searchcandname = event3.searchcateg as unknown as any;this.votedindexes = event3.VotedIdsFlagArray as unknown as any;
      this.CandNameNeutral=this.tabinstatedisplayitemid; this.CandNeutralflag="yes"; console.log(this.CandNameNeutral)
      if(this.searchcandname!='') {this.CandNameNeutral=event3.searchcateg as unknown as any;
        //Com results. has the results of all categories from the ushouserepcandscoms table
        let paramsp6 = {headers: {}, response: true, queryStringParameters: {CandName:this.searchcandname} };
        API.get("comsresultt4", "/coms/m", paramsp6).then(response6 => {this.CAgricultureYea=+response6.data[0].CAgricultureYea; this.CAgricultureNay=+response6.data[0].CAgricultureNay;	this.CFinancialYea=+response6.data[0].CFinancialYea;	this.CFinancialNay=+response6.data[0].CFinancialNay; this.CEducationYea=+response6.data[0].CEducationYea;	this.CEducationNay=+response6.data[0].CEducationNay;	this.CAppropriationsYea=+response6.data[0].CAppropriationsYea;	this.CAppropriationsNay=+response6.data[0].CAppropriationsNay;	this.CAdminstrationYea=+response6.data[0].CAdminstrationYea;	this.CAdminstrationNay=+response6.data[0].CAdminstrationNay;	this.CForeignYea=+response6.data[0].CForeignYea;	this.CForeignNay=+response6.data[0].CForeignNay;	this.CTransportationYea=+response6.data[0].CTransportationYea;	this.CTransportationNay=+response6.data[0].CTransportationNay;	this.CVeteransYea=+response6.data[0].CVeteransYea;	this.CVeteransNay=+response6.data[0].CVeteransNay;	this.CClimateYea=+response6.data[0].CClimateYea;	this.CClimateNay=+response6.data[0].CClimateNay;	this.CEnergyYea=+response6.data[0].CEnergyYea;	this.CEnergyNay=+response6.data[0].CEnergyNay;	this.CEthicsYea=+response6.data[0].CEthicsYea;	this.CEthicsNay=+response6.data[0].CEthicsNay;	this.CWaysYea=+response6.data[0].CWaysYea;	this.CWaysNay=+response6.data[0].CWaysNay;	this.CScienceYea=+response6.data[0].CScienceYea;	this.CScienceNay=+response6.data[0].CScienceNay;	this.CArmedYea=+response6.data[0].CArmedYea;	this.CArmedNay=+response6.data[0].CArmedNay;	this.CJudiciaryYea=+response6.data[0].CJudiciaryYea;	this.CJudiciaryNay=+response6.data[0].CJudiciaryNay;	this.CHomelandYea=+response6.data[0].CHomelandYea;	this.CHomelandNay=+response6.data[0].CHomelandNay;	this.CBudgetYea=+response6.data[0].CBudgetYea;	this.CBudgetNay=+response6.data[0].CBudgetNay;	this.CNaturalYea=+response6.data[0].CNaturalYea;	this.CNaturalNay=+response6.data[0].CNaturalNay;	this.COversightYea=+response6.data[0].COversightYea;	this.COversightNay=+response6.data[0].COversightNay;	this.CSmallYea=+response6.data[0].CSmallYea;	this.CSmallNay=+response6.data[0].CSmallNay;	this.CTaxationYea=+response6.data[0].CTaxationYea;	this.CTaxationNay=+response6.data[0].CTaxationNay;	this.CIntelligenceYea=+response6.data[0].CIntelligenceYea;	this.CIntelligenceNay=+response6.data[0].CIntelligenceNay;}).catch(error => {console.log(error.response6)});
        //Issues results from the ushouserepcandsissues table
        let paramsp7 = {headers: {}, response: true, queryStringParameters: {CandName:this.searchcandname} };
        API.get("issresultt4", "/iss/m", paramsp7).then(response7 => {this.IAbortionYea=+response7.data[0].IAbortionYea; this.IAbortionNay=+response7.data[0].IAbortionNay; this.IGunsYea=+response7.data[0].IGunsYea; this.IGunsNay=+response7.data[0].IGunsNay; this.IJobsYea=+response7.data[0].IJobsYea; this.IJobsNay=+response7.data[0].IJobsNay; this.IVeteransYea=+response7.data[0].IVeteransYea; this.IVeteransNay=+response7.data[0].IVeteransNay; this.IBorderYea=+response7.data[0].IBorderYea; this.IBorderNay=+response7.data[0].IBorderNay; this.IFarmersYea=+response7.data[0].IFarmersYea; this.IFarmersNay=+response7.data[0].IFarmersNay; this.IClimateYea=+response7.data[0].IClimateYea; this.IClimateNay=+response7.data[0].IClimateNay; this.ISeniorsYea=+response7.data[0].ISeniorsYea; this.ISeniorsNay=+response7.data[0].ISeniorsNay; this.IDefenseYea=+response7.data[0].IDefenseYea; this.IDefenseNay=+response7.data[0].IDefenseNay; this.IEnergyYea=+response7.data[0].IEnergyYea; this.IEnergyNay=+response7.data[0].IEnergyNay; this.IInfrastructureYea=+response7.data[0].IInfrastructureYea; this.IInfrastructureNay=+response7.data[0].IInfrastructureNay; this.INaturalYea=+response7.data[0].INaturalYea; this.INaturalNay=+response7.data[0].INaturalNay; this.IManufacturingYea=+response7.data[0].IManufacturingYea; this.IManufacturingNay=+response7.data[0].IManufacturingNay; this.ILandsYea=+response7.data[0].ILandsYea; this.ILandsNay=+response7.data[0].ILandsNay; this.IHealthcareYea=+response7.data[0].IHealthcareYea; this.IHealthcareNay=+response7.data[0].IHealthcareNay; this.IEducationYea=+response7.data[0].IEducationYea; this.IEducationNay=+response7.data[0].IEducationNay; this.IEconomyYea=+response7.data[0].IEconomyYea; this.IEconomyNay=+response7.data[0].IEconomyNay;}).catch(error => {console.log(error.response7)});
        this.prefercateg = event3.prefercateg as unknown as any;
        this.isscateg = event3.isscateg as unknown as any;this.comcateg = event3.comcateg as unknown as any;
      } else if (this.searchcandname=='') {
        //Com results. has the results of all categories from the ushouserepcandscoms table
        let paramsp6 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemid} };
        API.get("comsresultt4", "/coms/m", paramsp6).then(response6 => {this.CAgricultureYea=+response6.data[0].CAgricultureYea; this.CAgricultureNay=+response6.data[0].CAgricultureNay;	this.CFinancialYea=+response6.data[0].CFinancialYea;	this.CFinancialNay=+response6.data[0].CFinancialNay; this.CEducationYea=+response6.data[0].CEducationYea;	this.CEducationNay=+response6.data[0].CEducationNay;	this.CAppropriationsYea=+response6.data[0].CAppropriationsYea;	this.CAppropriationsNay=+response6.data[0].CAppropriationsNay;	this.CAdminstrationYea=+response6.data[0].CAdminstrationYea;	this.CAdminstrationNay=+response6.data[0].CAdminstrationNay;	this.CForeignYea=+response6.data[0].CForeignYea;	this.CForeignNay=+response6.data[0].CForeignNay;	this.CTransportationYea=+response6.data[0].CTransportationYea;	this.CTransportationNay=+response6.data[0].CTransportationNay;	this.CVeteransYea=+response6.data[0].CVeteransYea;	this.CVeteransNay=+response6.data[0].CVeteransNay;	this.CClimateYea=+response6.data[0].CClimateYea;	this.CClimateNay=+response6.data[0].CClimateNay;	this.CEnergyYea=+response6.data[0].CEnergyYea;	this.CEnergyNay=+response6.data[0].CEnergyNay;	this.CEthicsYea=+response6.data[0].CEthicsYea;	this.CEthicsNay=+response6.data[0].CEthicsNay;	this.CWaysYea=+response6.data[0].CWaysYea;	this.CWaysNay=+response6.data[0].CWaysNay;	this.CScienceYea=+response6.data[0].CScienceYea;	this.CScienceNay=+response6.data[0].CScienceNay;	this.CArmedYea=+response6.data[0].CArmedYea;	this.CArmedNay=+response6.data[0].CArmedNay;	this.CJudiciaryYea=+response6.data[0].CJudiciaryYea;	this.CJudiciaryNay=+response6.data[0].CJudiciaryNay;	this.CHomelandYea=+response6.data[0].CHomelandYea;	this.CHomelandNay=+response6.data[0].CHomelandNay;	this.CBudgetYea=+response6.data[0].CBudgetYea;	this.CBudgetNay=+response6.data[0].CBudgetNay;	this.CNaturalYea=+response6.data[0].CNaturalYea;	this.CNaturalNay=+response6.data[0].CNaturalNay;	this.COversightYea=+response6.data[0].COversightYea;	this.COversightNay=+response6.data[0].COversightNay;	this.CSmallYea=+response6.data[0].CSmallYea;	this.CSmallNay=+response6.data[0].CSmallNay;	this.CTaxationYea=+response6.data[0].CTaxationYea;	this.CTaxationNay=+response6.data[0].CTaxationNay;	this.CIntelligenceYea=+response6.data[0].CIntelligenceYea;	this.CIntelligenceNay=+response6.data[0].CIntelligenceNay;}).catch(error => {console.log(error.response6)});
        //Issues results from the ushouserepcandsissues table
        let paramsp7 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemid} };
        API.get("issresultt4", "/iss/m", paramsp7).then(response7 => {this.IAbortionYea=+response7.data[0].IAbortionYea; this.IAbortionNay=+response7.data[0].IAbortionNay; this.IGunsYea=+response7.data[0].IGunsYea; this.IGunsNay=+response7.data[0].IGunsNay; this.IJobsYea=+response7.data[0].IJobsYea; this.IJobsNay=+response7.data[0].IJobsNay; this.IVeteransYea=+response7.data[0].IVeteransYea; this.IVeteransNay=+response7.data[0].IVeteransNay; this.IBorderYea=+response7.data[0].IBorderYea; this.IBorderNay=+response7.data[0].IBorderNay; this.IFarmersYea=+response7.data[0].IFarmersYea; this.IFarmersNay=+response7.data[0].IFarmersNay; this.IClimateYea=+response7.data[0].IClimateYea; this.IClimateNay=+response7.data[0].IClimateNay; this.ISeniorsYea=+response7.data[0].ISeniorsYea; this.ISeniorsNay=+response7.data[0].ISeniorsNay; this.IDefenseYea=+response7.data[0].IDefenseYea; this.IDefenseNay=+response7.data[0].IDefenseNay; this.IEnergyYea=+response7.data[0].IEnergyYea; this.IEnergyNay=+response7.data[0].IEnergyNay; this.IInfrastructureYea=+response7.data[0].IInfrastructureYea; this.IInfrastructureNay=+response7.data[0].IInfrastructureNay; this.INaturalYea=+response7.data[0].INaturalYea; this.INaturalNay=+response7.data[0].INaturalNay; this.IManufacturingYea=+response7.data[0].IManufacturingYea; this.IManufacturingNay=+response7.data[0].IManufacturingNay; this.ILandsYea=+response7.data[0].ILandsYea; this.ILandsNay=+response7.data[0].ILandsNay; this.IHealthcareYea=+response7.data[0].IHealthcareYea; this.IHealthcareNay=+response7.data[0].IHealthcareNay; this.IEducationYea=+response7.data[0].IEducationYea; this.IEducationNay=+response7.data[0].IEducationNay; this.IEconomyYea=+response7.data[0].IEconomyYea; this.IEconomyNay=+response7.data[0].IEconomyNay;}).catch(error => {console.log(error.response7)});
        this.prefercateg = event3.prefercateg as unknown as any;
        this.isscateg = event3.isscateg as unknown as any;this.comcateg = event3.comcateg as unknown as any;
      }  });
  }

  async getitem2initialize() {const user = await Auth.currentAuthenticatedUser();
    //retrieves info in itemid2
    let paramsp2 = {headers: {}, response: true, queryStringParameters: {CandName:this.tabinstatedisplayitemidnext} };
    API.get("storeresultt4", "/store/m", paramsp2).then(response2 => {
      this.CandName100=this.tabinstatedisplayitemidnext;  this.District100=response2.data[0].District; this.Party100=response2.data[0].Party; this.State100=response2.data[0].StateCand;
      this.Website100=response2.data[0].Website; this.PictureAttribution100=response2.data[0].PictureAttribution;
      this.Motto100=response2.data[0].Motto; this.OverallYea100=response2.data[0].OverallYea;
      this.OverallNay100=response2.data[0].OverallNay;  this.s3file100=response2.data[0].s3file;
      this.Coms100=response2.data[0].Coms;this.Coms100new=JSON.parse(response2.data[0].Coms)
      Storage.get(response2.data[0].s3file).then( res => {this.urlAnext=res});
      this.FirstComPrefer100=response2.data[0].FirstComPrefer;
      this.SecondComPrefer100=response2.data[0].SecondComPrefer; this.ThirdComPrefer100=response2.data[0].ThirdComPrefer;
      this.api.ListVotedIdsIssuesflagshouse(user.attributes.sub,this.tabinstatedisplayitemidnext).then((event5) => {
        this.votedissuecounter100 = event5.VotedIdsFlagArray as number[];
        this.votedindexesissuecand100=event5.VotedIdsFlagArrayCand as unknown as any;});}).catch(error => {console.log(error.response2)});
  }

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur10() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("initializeuserarrayt4", "/init/m", paramsp1).then(response1 =>
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
    API.get("storeresultt4", "/store/m", paramsp1).then(response1 => {
      this.CandName1000=var1; this.District1000=response1.data[0].District; this.Party1000=response1.data[0].Party; this.State1000=response1.data[0].StateCand;
      this.Website1000=response1.data[0].Website; this.PictureAttribution1000=response1.data[0].PictureAttribution;
      this.Motto1000=response1.data[0].Motto; this.OverallYea1000=response1.data[0].OverallYea;
      this.OverallNay1000=response1.data[0].OverallNay; this.s3file1000=response1.data[0].s3file;
      this.Coms1000=response1.data[0].Coms; this.Coms1000new=JSON.parse(response1.data[0].Coms)
      this.FirstComPrefer1000=response1.data[0].FirstComPrefer;this.SecondComPrefer1000=response1.data[0].SecondComPrefer; this.ThirdComPrefer1000=response1.data[0].ThirdComPrefer;
      Storage.get(response1.data[0].s3file).then( res => {this.urlA1000=res});
      this.api.ListVotedIdsIssuesflagshouse(user.attributes.sub,var1).then((event5) => {
        this.votedissuecounter1000 = event5.VotedIdsFlagArray as number[];
        this.votedindexesissuecand1000=event5.VotedIdsFlagArrayCand as unknown as any;});
    }).catch(error => {console.log(error.response1)});
  }


  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur100() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("initializeuserarrayt4", "/init/m", paramsp1).then(response1 =>
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
    API.get("storeresultt4", "/store/m", paramsp2).then(response2 => {
      this.CandName100=this.tabinstatedisplayitemidindex1next; this.District100=response2.data[0].District; this.Party100=response2.data[0].Party; this.State100=response2.data[0].StateCand;
      this.Website100=response2.data[0].Website; this.PictureAttribution100=response2.data[0].PictureAttribution;
      this.Motto100=response2.data[0].Motto; this.OverallYea100=response2.data[0].OverallYea;
      this.OverallNay100=response2.data[0].OverallNay; this.s3file100=response2.data[0].s3file;
      this.Coms100=response2.data[0].Coms;this.Coms100new=JSON.parse(response2.data[0].Coms)
      this.FirstComPrefer100=response2.data[0].FirstComPrefer; this.SecondComPrefer100=response2.data[0].SecondComPrefer; this.ThirdComPrefer100=response2.data[0].ThirdComPrefer;
      Storage.get(response2.data[0].s3file).then( res => {this.urlAnext=res});
      this.api.ListVotedIdsIssuesflagshouse(user.attributes.sub,this.tabinstatedisplayitemidindex1next).then((event5) => {
        this.votedissuecounter100 = event5.VotedIdsFlagArray as number[];
        this.votedindexesissuecand100=event5.VotedIdsFlagArrayCand as unknown as any;});
    }).catch(error => {console.log(error.response2)});
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle1back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtontabhouseinstate(user.attributes.sub,this.tabinstateendarrayitemid,
      +this.tabinstatelength).then((event1) => {;this.reloadComponent()})
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle2back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtontabhouseinstate(user.attributes.sub,this.tabinstateendarrayitemidnext,
      +this.tabinstatelengthnext).then((event1) => {;this.reloadComponent()})
  };

  //back button this is needed for one-time itemids
  async initializeclick1itemidback() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab2
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtontabhouseinstate(user.attributes.sub,this.tabinstateendarrayitemidinitialize,
      +this.tabinstatelength).then((event1) => {this.reloadComponent()})
  }

  //Step1: if the search button is clicked with cand last name, then query and display the profile.
  async executesearch() { const user = await Auth.currentAuthenticatedUser(); console.log(this.titlecasePipe.transform(this.CandLastNameSelect));console.log(this.State10)
    this.api.SearchHouseCandInstate({LastName: {eq:this.titlecasePipe.transform(this.CandLastNameSelect)},
      StateCand:{eq:this.State10}}).then((event8) => {this.CandSearch=event8 as unknown as any;
      //@ts-ignore
      Storage.get(this.CandSearch.items[0].s3file).then( res => {this.urlA=res}); this.s3file10=this.CandSearch.items[0].s3file; this.CandName10=this.CandSearch.items[0].CandName; this.District10=this.CandSearch.items[0].District; this.Party10=this.CandSearch.items[0].Party;this.State10=this.CandSearch.items[0].SateCand;this.Website10=this.CandSearch.items[0].Website; this.PictureAttribution10=this.CandSearch.items[0].PictureAttribution;  this.Coms10=this.CandSearch.items[0].Coms; this.Coms10new=JSON.parse(this.CandSearch.items[0].Coms); this.Motto10=this.CandSearch.items[0].Motto; this.OverallYea10=this.CandSearch.items[0].OverallYea; this.OverallNay10=this.CandSearch.items[0].OverallNay; this.FirstComPrefer10=this.CandSearch.items[0].FirstComPrefer; this.SecondComPrefer10=this.CandSearch.items[0].SecondComPrefer;this.ThirdComPrefer10=this.CandSearch.items[0].ThirdComPrefer
      //@ts-ignore
      this.api.ListVotedIdsIssuesflagshouse(user.attributes.sub,this.CandSearch.items[0].CandName).then((event4) => {
        this.votedissuecounter10 = event4.VotedIdsFlagArray as number[];
        this.votedindexesissuecand10=event4.VotedIdsFlagArrayCand as unknown as any;
        this.futurecomcandsvotedon10=event4.futurecomcandsvotedon as string[]; this.FutureComPreferArray10=event4.FutureComPreferArray as [];
        this.FutureComCandViewed=event4.FutureComCandViewed as unknown as any;
        this.initsearchflag = "yes";});
    }).catch(error => {console.log(error);this.nomatchinglastname='yes'});
  }

  //future comittee: this will do a temp store of the webpagevalue and prefercateg, so that after the ads we know where the user was.
  async ConfclickPreferResults(){
    const user = await Auth.currentAuthenticatedUser();
    //Step2: if a user votes on a committee, future committee preference, or an issue, then this will store the search cand name that is on display. so when it is time to display results we will know who it was.
    if(this.initsearchflag=='yes') {//one API call does both search save and prefercateg save.
      const paramspG = {body: {userid:user.attributes.sub, webpagevalue: "House", comcateg: "future", categcol:"prefercateg",searchname:this.CandName10,categcolS: "searchcateg"}}
      API.post("initializeuserarrayt4", "/init", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
    } else if (this.initsearchflag=='') {
      const paramspG = {body: {userid:user.attributes.sub, webpagevalue: "House", comcateg: "future", categcol:"prefercateg"}}
      API.post("initializeuserarrayt4", "/index", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
    } }

//enable the submit button when atleast one field of the committee is chosen
  async futcom(event:any) {this.clicked10=false};

  //store future committee assignments selection. var1 is cand name. var2 is array of firstpreference commitee with 22 indicies. var3 and var4 is secondpreference and thirdpreference committes. var5 is s3filename.
  async comprefer(var1:string, var2:number[],var3:number[],var4:number[]) {const user = await Auth.currentAuthenticatedUser(); console.log(var2); console.log(this.FutureCom1)
    this.api.FutureComPreferResult(var1,user.attributes.sub,var2,var3,var4,this.FutureCom1,this.FutureCom2,this.FutureCom3,100).then((event8) => {});
  }

  // this will do a temp store of the webpagevalue and comcateg, so that after the ads we know where the user was. var2 is category of committee.
  async ConfclickComResults( var2:string){
    const user = await Auth.currentAuthenticatedUser();
    if(this.initsearchflag=='yes') {//one API call does both search save and prefercateg save.
      const paramspG = {body: {userid:user.attributes.sub, webpagevalue: "House", comcateg: var2, categcol:"comcateg",searchname:this.CandName10,categcolS: "searchcateg"}}
      API.post("initializeuserarrayt4", "/init", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
    } else if (this.initsearchflag=='') {
      const paramspG = {body: {userid:user.attributes.sub, webpagevalue: "House", comcateg: var2, categcol:"comcateg"}}
      API.post("initializeuserarrayt4", "/index", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
    } }


  // this will do a temp store of the webpagevalue and issuecateg, so that after the ads we know where the user was. var2 is category of committee.
  async ConfclickIssResults( var2:string){
    const user = await Auth.currentAuthenticatedUser();
    if(this.initsearchflag=='yes') {//one API call does both search save and prefercateg save.
      const paramspG = {body: {userid:user.attributes.sub, webpagevalue: "House", comcateg: var2, categcol:"isscateg",searchname:this.CandName10,categcolS: "searchcateg"}}
      API.post("initializeuserarrayt4", "/init", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
    } else if (this.initsearchflag=='') {
      const paramspG = {body: {userid:user.attributes.sub, webpagevalue: "House", comcateg: var2, categcol:"isscateg"}}
      API.post("initializeuserarrayt4", "/index", paramspG).then(responseG => {console.log("successG");}).catch(error => {console.log(error.responseG);});
    } }

  //Issues confirmation button. Updates the voting results and store loyalty points. and stores that an ID has been voted on, so same button doesn't appear again.  var1 is candidatename. var2 is s3file picture filename.

  //scroll to appropriate section
  overallfunc(){try {const errorField = this.renderer.selectRootElement('.overall_class');errorField.scrollIntoView();} catch (err) {}}
  assignfunc(){try {const errorField = this.renderer.selectRootElement('.assign_class');errorField.scrollIntoView();} catch (err) {}}
  comperffunc(){try {const errorField = this.renderer.selectRootElement('.comperf_class');errorField.scrollIntoView();} catch (err) {}}
  issperffunc(){try {const errorField = this.renderer.selectRootElement('.issperf_class');errorField.scrollIntoView();} catch (err) {}}
  ontop(){try {const errorField = this.renderer.selectRootElement('.ontop_class');errorField.scrollIntoView();} catch (err) {}}
  searchresult(){try {const errorField = this.renderer.selectRootElement('.searchresult_class');errorField.scrollIntoView();} catch (err) {}}
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

  async YEAclick2z() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'Overally'},}).afterClosed().subscribe(result => {
    this.api.OverallResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"Overally", "Overall",100).then((event) => {});});}
  async NAYclick2z() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'Overalln'},}).afterClosed().subscribe(result => {
    this.api.OverallResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"Overalln", "Overall",100).then((event) => {});});}
  async YEAclickP0() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P0y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('PO');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P0y", "P0",100).then((event) => {});});}
  async NAYclickP0() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P0n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('PO');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P0n", "P0",100).then((event) => {});});}
  async YEAclickP1() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P1y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P1');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P1y", "P1",100).then((event) => {});});}
  async NAYclickP1() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P1n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P1');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P1n", "P1",100).then((event) => {});});}
  async YEAclickP2() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P2y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P2');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P2y", "P2",100).then((event) => {});});}
  async NAYclickP2() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P2n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P2');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P2n", "P2",100).then((event) => {});});}
  async YEAclickP3() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P3y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P3');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P3y", "P3",100).then((event) => {});});}
  async NAYclickP3() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P3n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P3');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P3n", "P3",100).then((event) => {});});}
  async YEAclickP4() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P4y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P4');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P4y", "P4",100).then((event) => {});});}
  async NAYclickP4() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P4n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P4');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P4n", "P4",100).then((event) => {});});}
  async YEAclickP5() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P5y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P5');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P5y", "P5",100).then((event) => {});});}
  async NAYclickP5() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P5n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P5');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P5n", "P5",100).then((event) => {});});}
  async YEAclickP6() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P6y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P6');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P6y", "P6",100).then((event) => {});});}
  async NAYclickP6() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P6n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P6');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P6n", "P6",100).then((event) => {});});}
  async YEAclickP7() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P7y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P7');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P7y", "P7",100).then((event) => {});});}
  async NAYclickP7() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P7n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P7');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P7n", "P7",100).then((event) => {});});}
  async YEAclickP8() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P8y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P8');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P8y", "P8",100).then((event) => {});});}
  async NAYclickP8() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P8n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P8');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P8n", "P8",100).then((event) => {});});}
  async YEAclickP9() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P9y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P9');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P9y", "P9",100).then((event) => {});});}
  async NAYclickP9() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P9n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P9');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P9n", "P9",100).then((event) => {});});}
  async YEAclickP10() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P10y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P10');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P10y", "P10",100).then((event) => {});});}
  async NAYclickP10() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P10n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P1O');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P10n", "P10",100).then((event) => {});});}
  async YEAclickP11() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P11y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P11');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P11y", "P11",100).then((event) => {});});}
  async NAYclickP11() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P11n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P11');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P11n", "P11",100).then((event) => {});});}
  async YEAclickP12() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P12y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P12');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P12y", "P12",100).then((event) => {});});}
  async NAYclickP12() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P12n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P12');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P12n", "P12",100).then((event) => {});});}
  async YEAclickP13() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P13y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P13');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P13y", "P13",100).then((event) => {});});}
  async NAYclickP13() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P13n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P13');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P13n", "P13",100).then((event) => {});});}
  async YEAclickP14() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P14y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P14');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P14y", "P14",100).then((event) => {});});}
  async NAYclickP14() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P14n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P14');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P14n", "P14",100).then((event) => {});});}
  async YEAclickP15() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P15y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P15');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P15y", "P15",100).then((event) => {});});}
  async NAYclickP15() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P15n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P15');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P15n", "P15",100).then((event) => {});});}
  async YEAclickP16() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P16y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P16');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P16y", "P16",100).then((event) => {});});}
  async NAYclickP16() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P16n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P16');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P16n", "P16",100).then((event) => {});});}
  async YEAclickP17() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P17y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P17');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P17y", "P17",100).then((event) => {});});}
  async NAYclickP17() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P17n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P17');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P17n", "P17",100).then((event) => {});});}
  async YEAclickP18() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P18y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P18');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P18y", "P18",100).then((event) => {});});}
  async NAYclickP18() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P18n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P18');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P18n", "P18",100).then((event) => {});});}
  async YEAclickP19() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P19y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P19');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P19y", "P19",100).then((event) => {});});}
  async NAYclickP19() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P19n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P19');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P19n", "P19",100).then((event) => {});});}
  async YEAclickP20() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P20y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P20');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P20y", "P20",100).then((event) => {});});}
  async NAYclickP20() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P20n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P2O');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P20n", "P20",100).then((event) => {});});}
  async YEAclickP21() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P21y'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P21');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P21y", "P21",100).then((event) => {});});}
  async NAYclickP21() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'P21n'},}).afterClosed().subscribe(result => {this.ConfclickComResults('P21');
    this.api.ComResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"P21n", "P21",100).then((event) => {});});}

  async YEAclickI0() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I0y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I0');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I0y", "I0",100).then((event) => {});});}
  async NAYclickI0() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I0n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I0');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I0n", "I0",100).then((event) => {});});}
  async YEAclickI1() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I1y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I1');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I1y", "I1",100).then((event) => {});});}
  async NAYclickI1() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I1n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I1');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I1n", "I1",100).then((event) => {});});}
  async YEAclickI2() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I2y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I2');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I2y", "I2",100).then((event) => {});});}
  async NAYclickI2() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I2n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I2');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I2n", "I2",100).then((event) => {});});}
  async YEAclickI3() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I3y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I3');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I3y", "I3",100).then((event) => {});});}
  async NAYclickI3() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I3n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I3');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I3n", "I3",100).then((event) => {});});}
  async YEAclickI4() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I4y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I4');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I4y", "I4",100).then((event) => {});});}
  async NAYclickI4() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I4n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I4');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I4n", "I4",100).then((event) => {});});}
  async YEAclickI5() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I5y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I5');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I5y", "I5",100).then((event) => {});});}
  async NAYclickI5() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I5n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I5');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I5n", "I5",100).then((event) => {});});}
  async YEAclickI6() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I6y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I6');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I6y", "I6",100).then((event) => {});});}
  async NAYclickI6() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I6n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I6');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I6n", "I6",100).then((event) => {});});}
  async YEAclickI7() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I7y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I7');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I7y", "I7",100).then((event) => {});});}
  async NAYclickI7() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I7n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I7');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I7n", "I7",100).then((event) => {});});}
  async YEAclickI8() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I8y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I8');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I8y", "I8",100).then((event) => {});});}
  async NAYclickI8() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I8n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I8');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I8n", "I8",100).then((event) => {});});}
  async YEAclickI9() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I9y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I9');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I9y", "I9",100).then((event) => {});});}
  async NAYclickI9() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I9n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I9');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I9n", "I9",100).then((event) => {});});}
  async YEAclickI10() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I10y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I10');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I10y", "I10",100).then((event) => {});});}
  async NAYclickI10() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I10n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I10');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I10n", "I10",100).then((event) => {});});}
  async YEAclickI11() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I11y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I11');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I11y", "I11",100).then((event) => {});});}
  async NAYclickI11() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I11n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I11');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I11n", "I11",100).then((event) => {});});}
  async YEAclickI12() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I12y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I12');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I12y", "I12",100).then((event) => {});});}
  async NAYclickI12() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I12n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I12');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I12n", "I12",100).then((event) => {});});}
  async YEAclickI13() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I13y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I13');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I13y", "I13",100).then((event) => {});});}
  async NAYclickI13() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I13n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I13');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I13n", "I13",100).then((event) => {});});}
  async YEAclickI14() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I14y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I14');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I14y", "I14",100).then((event) => {});});}
  async NAYclickI14() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I14n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I14');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I14n", "I14",100).then((event) => {});});}
  async YEAclickI15() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I15y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I15');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I15y", "I15",100).then((event) => {});});}
  async NAYclickI15() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I15n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I15');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I15n", "I15",100).then((event) => {});});}
  async YEAclickI16() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I16y'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I16');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I16y", "I16",100).then((event) => {});});}
  async NAYclickI16() {const user = await Auth.currentAuthenticatedUser();this.dialog.open(ConfdialogComponent,{
    data: {voteflag: 'I16n'},}).afterClosed().subscribe(result => {this.ConfclickIssResults('I16');
    this.api.IssResultUpdatetabhouseinstate(this.CandName10,user.attributes.sub,"I16n", "I16",100).then((event) => {});});}

  async loyaltyview() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub,}}
    API.put("datingapitest4", "/loyaltyadd", paramsp3).then(response3 => {console.log("success3");}).catch(error => {console.log(error.response3);});
  }

}

export interface DialogData {
  voteflag: 'Overally' | 'Overalln' |'P0y' |'P0n' |'P1y' |'P1n' |'P2y' |'P2n'|'P3y' |'P3n'|'P4y' |'P4n'|'P5y' |'P5n'|'P6y' |'P6n'
    |'P7y' |'P7n'|'P8y' |'P8n'|'P9y' |'P9n'|'P10y' |'P10n'|'P11y' |'P11n'|'P12y' |'P12n'|'P13y' |'P13n'|'P14y' |'P14n'|'P15y' |'P15n'
    |'P16y' |'P16n'|'P17y' |'P17n'|'P18y' |'P18n'|'P19y' |'P19n'|'P20y' |'P20n'|'P21y' |'P21n'
    |'I0y' |'I0n' |'I1y' |'I1n' |'I2y' |'I2n'|'I3y' |'I3n'|'I4y' |'I4n'|'I5y' |'I5n'|'I6y' |'I6n'
    |'I7y' |'I7n'|'I8y' |'I8n'|'I9y' |'I9n'|'I10y' |'I10n'|'I11y' |'I11n'|'I12y' |'I12n'|'I13y' |'I13n'|'I14y' |'I14n'|'I15y' |'I15n'
    |'I16y' |'I16n';
}
