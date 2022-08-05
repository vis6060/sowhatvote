import {Component, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {APIService,CandNameOutArray} from "../../API.service";
import Amplify, {API, Auth, Storage} from "aws-amplify";
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
    this.router = _router; }

  ngOnInit(): void {
    this.gethompage1Binitialize();
    this.delaytabPutIndex(100)
  }

  tabinstatedisplayitemid:string=""; tabinstatedisplayitemidtwo:string=""; //this has the itemid profile to display to user for tab1A which is index0 in array
  tabinstatedisplayitemidnext:string="";  //"next" is index1 in array and "nextnext" is index2 in array to check their unsubscribe status and whether needs to be deleted from array
  tabinstatedisplayitemidindex1:string=""; tabinstatedisplayitemidindex1next:string="";
  tabinstateendarrayitemid:string=""; tabinstateendarrayitemidnext:string=""; tabinstateendarrayitemidinitialize:string="";
  initializerflag=""; onetimenextflag=""; backflag=""; backflagnext=""; futureflag=""; initsearchflag=""; CandNeutralflag=""
  tabinstatelength="0"; tabinstatelengthnext="0";
  clicked0: boolean=false;clicked: boolean=false; clicked1: boolean=false;
  viewtoggle=""; urlA:string;   urlAnext:string; urlA1000:string; urlSearch:string; s3file10=""; s3file100=""; s3file1000=""; //signed url to the image stored in s3
  stateuser=""; loyalty=0;
  click10=''; click11='';click12='';
  District10="";Party10="";State10="";Website10="";PictureAttribution10="";Coms10="";Motto10=""; OverallYea10=""; OverallNay10=""
  District100=""; Party100="";State100="";Website100="";PictureAttribution100="";Coms100="";Motto100=""; OverallYea100=""; OverallNay100=""
  District1000="";Party1000="";State1000="";Website1000="";PictureAttribution1000="";Coms1000="";Motto1000=""; OverallYea1000=""; OverallNay1000=""
  CandName10=""; CandName100="";CandName1000=""
  votedindexes=[]; comcateg=""; votedindexesissue=[]; isscateg=""; prefercateg=""; votedindexesissuecand10=[];votedindexesissuecand100=[];votedindexesissuecand1000=[];votedissuecounter10=[0]; votedissuecounter100=[0];votedissuecounter1000=[0];


  CAgricultureYea=0; CAgricultureNay=0; CAppropriationsYea=0;	CAppropriationsNay=0;	CArmedYea=0;	CArmedNay=0;	CBankingYea=0;	CBankingNay=0;	CBudgetYea=0;	CBudgetNay=0;	CCommerceYea=0;	CCommerceNay=0;	CEnergyYea=0;	CEnergyNay=0;	CEnvironmentYea=0;	CEnvironmentNay=0;	CFinanceYea=0;	CFinanceNay=0;	CForeignYea=0;	CForeignNay=0;	CHealthYea=0;	CHealthNay=0;	CHomelandYea=0;	CHomelandNay=0;	CIndianYea=0;	CIndianNay=0;	CPrintingYea=0;	CPrintingNay=0;	CTaxationYea=0;	CTaxationNay=0;	CLibraryYea=0;	CLibraryNay=0;	CEconomicYea=0;	CEconomicNay=0;	CJudiciaryYea=0;	CJudiciaryNay=0;	CRulesYea=0;	CRulesNay=0;	CEthicsYea=0;	CEthicsNay=0;	CIntelligenceYea=0;	CIntelligenceNay=0;	CBusinessYea=0;	CBusinessNay=0;	CAgingYea=0;	CAgingNay=0;	CVeteranYea=0;	CVeteranNay=0;

  Coms10new=[];  clicked10: boolean=true; CandLastNameSelect=""; nomatchinglastname="";
  Coms100new=[]; Coms1000new=[];

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  async putindextabinstate() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp2 = {body: {userid: user.attributes.sub, tabinstateindex:2,taballusaindex:0}} //place itemid in index0 position of tab2
    API.put("initializeuserarrayt4","/index", paramsp2).then(response2 => {console.log("success2");
    }).catch(error => {console.log(error.response2);});
  }
  async delaytabPutIndex(ms: number) {
    await new Promise(resolve => setTimeout(()=>this.putindextabinstate(), ms)).then(()=>console.log("fired"));
  }

  viewtoggle1next() {window.scrollTo(0,0);
    this.CandName10= this.CandName1000; this.Party10=this.Party1000; this.State10=this.State1000; this.District10=this.District1000;
    this.Website10=this.Website1000;this.PictureAttribution10=this.PictureAttribution1000; this.Motto10=this.Motto1000;
    this.OverallYea10=this.OverallYea1000;this.OverallNay10=this.OverallNay1000; this.s3file10=this.s3file1000;this.Coms10=this.Coms1000;
    this.Coms10new=this.Coms1000new;this.urlA=this.urlA1000;
    this.votedindexesissuecand10=this.votedindexesissuecand1000; this.votedissuecounter10=this.votedissuecounter1000
    this.viewtoggle="yes"; this.initializerflag=""; this.onetimenextflag=""; this.clicked=false;
    this.deleteindex0idrecur100Next();
  }

  viewtoggle2next() { window.scrollTo(0,0);
    this.CandName10= this.CandName100; this.Party10=this.Party100; this.State10=this.State100; this.District10=this.District100;
    this.Website10=this.Website100;this.PictureAttribution10=this.PictureAttribution100; this.Motto10=this.Motto100;
    this.OverallYea10=this.OverallYea100;this.OverallNay10=this.OverallNay100; this.s3file10=this.s3file100;this.Coms10=this.Coms100;
    this.Coms10new=this.Coms100new;this.urlA=this.urlAnext;
    this.votedindexesissuecand10=this.votedindexesissuecand100; this.votedissuecounter10=this.votedissuecounter100;
    this.viewtoggle="no";this.initializerflag=""; this.onetimenextflag=""; this.clicked1=false;
    this.deleteindex0idrecur10Next();
  }

  onetimenextnext() {window.scrollTo(0,0);
    this.CandName10= this.CandName100; this.Party10=this.Party100; this.State10=this.State100; this.District10=this.District100;
    this.Website10=this.Website100;this.PictureAttribution10=this.PictureAttribution100; this.Motto10=this.Motto100;
    this.OverallYea10=this.OverallYea100;this.OverallNay10=this.OverallNay100; this.s3file10=this.s3file100;this.Coms10=this.Coms100;
    this.Coms10new=this.Coms100new;this.urlA=this.urlAnext;
    this.votedindexesissuecand10=this.votedindexesissuecand100; this.votedissuecounter10=this.votedissuecounter100
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

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Binitialize() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("initializeuserarrayt4", "/initgovern/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tabinstatedisplayitemid=response1.data[0];
      this.tabinstatedisplayitemidnext=response1.data[1]; this.tabinstatedisplayitemidtwo=response1.data[2];
      this.tabinstatelength=response1.data[3]; this.tabinstateendarrayitemidinitialize=response1.data[4];
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
      this.Party10=response1.data[0].Party; this.State10=response1.data[0].StateCand; this.District10=response1.data[0].District;
      this.Website10=response1.data[0].Website; this.PictureAttribution10=response1.data[0].PictureAttribution;
      this.CandName10=this.tabinstatedisplayitemid; this.Motto10=response1.data[0].Motto; this.OverallYea10=response1.data[0].OverallYea;
      this.OverallNay10=response1.data[0].OverallNay; this.s3file10=response1.data[0].s3file;
      this.Coms10=response1.data[0].Coms; this.Coms10new=JSON.parse(response1.data[0].Coms)
      Storage.get(response1.data[0].s3file).then( res => {this.urlA=res});
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
      this.votedindexes = event3.VotedIdsFlagArray as unknown as any;
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
      this.CandName100=this.tabinstatedisplayitemidnext; this.Party100=response2.data[0].Party;
      this.State100=response2.data[0].StateCand; this.District100=response2.data[0].District;
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
    API.get("initializeuserarrayt4", "/initsenate/m", paramsp1).then(response1 =>
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
    API.get("storeresult", "/storesenate/m", paramsp1).then(response1 => {
      this.CandName1000=var1; this.Party1000=response1.data[0].Party;
      this.State1000=response1.data[0].StateCand; this.District1000=response1.data[0].District;
      this.Website1000=response1.data[0].Website; this.PictureAttribution1000=response1.data[0].PictureAttribution;
      this.Motto1000=response1.data[0].Motto; this.OverallYea100=response1.data[0].OverallYea;
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
    API.get("initializeuserarrayt4", "/initsenate/m", paramsp1).then(response1 =>
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
      this.CandName100=this.tabinstatedisplayitemidindex1next; this.Party100=response2.data[0].Party;
      this.State100=response2.data[0].StateCand; this.District100=response2.data[0].District;
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




}
