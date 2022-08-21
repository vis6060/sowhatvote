import { Component, OnInit,Renderer2 } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {APIService, DatinginteractionStaging, DatinguserdbStaging} from "../../API.service";
import Amplify, {API, Auth, Cache, Storage} from "aws-amplify";
import awsExports from "../../../aws-exports";
import {v4 as uuid} from "uuid";

@Component({
  selector: 'app-tab3displaynav',
  templateUrl: './tab3displaynav.component.html',
  styleUrls: ['./tab3displaynav.component.css']
})
export class Tab3displaynavComponent implements OnInit {

  router: Router;
  constructor(public authenticator: AuthenticatorService, private api: APIService,private route: ActivatedRoute, _router: Router,private renderer: Renderer2) {
    Amplify.configure(awsExports); this.router = _router;
  }

  ngOnInit(): void {
    this.gethompage3initialize()
   this.putindextab3()
  }

  profilecompPartF="";day30flag10="";day30flag100="";day30flag4=""
  tab3displayitemid:string=""; //this has the itemid profile to display to user for tab1A which is index0 in array
  tab3displayitemidnext:string="";  //"next" is index1 in array and "nextnext" is index2 in array to check their unsubscribe status and whether needs to be deleted from array
  tab3displayitemidindex1:string=""; tab3displayitemidindex1next:string="";
  tab3displayitemidindex2:string=""; tab3displayitemidindex2next:string="";
  tab3unsubitemid:string=""; tab3expire30daycheck:string=""; //stores the itemid on which to run unsub check
  tab3endarrayitemid:string=""; tab3endarrayitemidnext:string=""; tab3endarrayitemidinitialize:string="";
  endofarray3=""; backflag=""; backflagnext="";
  interesttemp=[];  interdatetemp=""; interdate:any;
  interestcateginittemp1:any; interestcateginittemp2:any; interestcateginit1:any;interestdateinit1:any; interdatetempinit1="";
  interestcateginit2:any;interestdateinit2:any; interdatetempinit2="";
  public dealsPer10: DatinguserdbStaging;  public dealsPer100: DatinguserdbStaging;
  tab3length:number; tab3lengthnext:number;
  clicked0: boolean=false; clicked: boolean=false; clicked1: boolean=false;
  initializerflag=""; onetimenextflag=""
  newWidthA=''; newHeightA='';
  urlA:string; //signed url to the image stored in s3
  newWidthAnext=''; newHeightAnext=''
  urlAnext:string; //signed url to the image stored in s3
  viewtoggle="";
  delayflag1:boolean=true; delayflag2:boolean=true;


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


  async putindextab3() {
    const expiration = new Date().valueOf()
    Cache.setItem('tab3index', '0', { expires: expiration +900000 }); //expires after 15minutes, time is in ms.
  }

  async delaytabPutIndex(ms: number) {
    await new Promise(resolve => setTimeout(()=>this.putindextab3(), ms)).then(()=>console.log("fired"));
  }

  async delayunsub(ms: number) {
    await new Promise(resolve => setTimeout(()=>this.unsubcribecheck(), ms)).then(()=>console.log("fired"));
  }


  viewtoggle1AcceptDecline() {this.viewtoggle="yes"; this.initializerflag=""; this.onetimenextflag="";this.clicked=false
    this.deleteindex0idrecur100Accept();
    //   this.delayunsub(0)
  }

  viewtoggle2AcceptDecline() {this.viewtoggle="no";this.initializerflag=""; this.onetimenextflag="";this.clicked1=false
    this.deleteindex0idrecur10Accept();
    //   this.delayunsub(0)
  }

  onetimeAcceptDecline(){this.onetimenextflag='yes';
    this.deleteindex0idinitializeAccept()
  }

  viewtoggle1next() {this.viewtoggle="yes"; this.initializerflag=""; this.onetimenextflag=""; this.clicked=false
    this.deleteindex0idrecur100Next();
    //   this.delayunsub(0)
  }

  viewtoggle2next() {this.viewtoggle="no";this.initializerflag=""; this.onetimenextflag=""; this.clicked1=false
    this.deleteindex0idrecur10Next();
    //   this.delayunsub(0)
  }

  onetimenextnext() {this.onetimenextflag='yes';
    this.deleteindex0idinitializeNext();
  }

  //Next Button:deletes index0 itemid
  async deleteindex0idinitializeNext() {
    const user = await Auth.currentAuthenticatedUser();
    //moves itemid to end of array
    //deletes item at index0.  this two operations have to be sequenced.
    this.api.NextButtonDatingitemtrackingStagingtab3(user.attributes.sub,this.tab3displayitemid).then((event1) => {
      this.gethompage3recur10()})
  }

  //Next Button:deletes index0 itemid's
  async deleteindex0idrecur10Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtonDatingitemtrackingStagingtab3(user.attributes.sub,this.tab3displayitemidnext).then((event1) => {
      this.gethompage3recur10() })
  }

//Next Button: deletes index0 itemid's
  async deleteindex0idrecur100Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtonDatingitemtrackingStagingtab3(user.attributes.sub,this.tab3displayitemid).then((event1) => {
      this.gethompage3recur100()})
  }

  //Accept button: deletes index0 and index1 itemid's
  async deleteindex0idinitializeAccept() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemids from index 0 position
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab3"}}
    API.put("datingapitest4", "/itemapiupdates", paramsp3).then(response3 => {console.log("success3");
      this.gethompage3recur10()
    }).catch(error => {console.log(error.response3);});
  }

  //Accept button: deletes index0 itemid's
  async deleteindex0idrecur10Accept() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab3"}}
    API.post("datingapitest4", "/itemapiunsub1", paramsp3).then(response3 => {console.log("success3");
      this.gethompage3recur10();
    }).catch(error => {console.log(error.response3);});
  }

//Accept button: deletes index0 itemid's
  async deleteindex0idrecur100Accept() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab3"}}
    API.post("datingapitest4", "/itemapiunsub1", paramsp3).then(response3 => {console.log("success3");
      this.gethompage3recur100()
    }).catch(error => {console.log(error.response3);});
  }

  //for tab3 start, extract the itemid from the array in the itemtracking table
  async gethompage3initialize() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapistan2/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab3displayitemid=response1.data[0];
      this.tab3displayitemidnext=response1.data[1];
      this.tab3length=response1.data[3]; this.tab3endarrayitemidinitialize=response1.data[4];
      this.tab3expire30daycheck=response1.data[6];
      console.log(this.tab3displayitemid); console.log(this.tab3displayitemidnext);
      this.gethompageF3initialize()
      if(+this.tab3length==1) {this.clicked0=true}
      if(+this.tab3length==0) {this.endofarray3="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray3="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  async gethompageF3initialize() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    //retrieves info in itemid1
    if(this.tab3displayitemid!=null){
      this.api.GetDatinguserdbStaging(this.tab3displayitemid).then((event) => {
        console.log(event);
        this.dealsPer10 = event as unknown as any;
        console.log(this.dealsPer10);
        Storage.get(this.dealsPer10.s3file).then(res => {
          this.urlA = res //this gets the signed url, which will be given to html
          this.newWidthA = this.dealsPer10.newWidth;
          this.newHeightA = this.dealsPer10.newHeight
        });
        this.api.ListDatinguserdbStagingsQuery(this.tab3displayitemid,user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
          console.log(event);
          this.interestcateginittemp1 = event.interestcategory;
          this.interestcateginit1=JSON.stringify(this.interestcateginittemp1).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
          this.interdatetempinit1 = event.timestamp as string
          this.interestdateinit1 = new Date(this.interdatetempinit1);
          this.initializerflag = "yes"
        });
      });
      //retrieves info in itemid2
      if(this.tab3displayitemidnext!=null) {
        this.api.GetDatinguserdbStaging(this.tab3displayitemidnext).then((event) => {
          console.log(event);
          this.dealsPer100 = event as unknown as any;
          console.log(this.dealsPer100);
          Storage.get(this.dealsPer100.s3file).then(res => {
            this.urlAnext = res //this gets the signed url, which will be given to html
            this.newWidthAnext = this.dealsPer100.newWidth;
            this.newHeightAnext = this.dealsPer100.newHeight
          });
          this.api.ListDatinguserdbStagingsQuery(this.tab3displayitemidnext,user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
            console.log(event);
            this.interestcateginittemp2 = event.interestcategory;
            this.interestcateginit2=JSON.stringify(this.interestcateginittemp2).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
            this.interdatetempinit2 = event.timestamp as string
            this.interestdateinit2 = new Date(this.interdatetempinit2);
          });
        });
      } }
  }

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage3recur10() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapistan2/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab3displayitemid=response1.data[0];
      this.tab3displayitemidindex1=response1.data[1]
      this.tab3unsubitemid=response1.data[5]; this.tab3displayitemidindex2=response1.data[2];
      this.tab3length=response1.data[3]; this.tab3endarrayitemid=response1.data[4];
      this.tab3expire30daycheck=response1.data[6]; //this is index5 in the itemid array
      console.log(this.tab3displayitemidindex1);
      this.gethompageF3recur10()
      if(+this.tab3length==1) {this.clicked0=true}
      if(+this.tab3length==0) {this.endofarray3="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray3="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  async gethompageF3recur10() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab3displayitemidindex1!=null){
      this.api.GetDatinguserdbStaging(this.tab3displayitemidindex1).then((event) => {
        console.log(event);
        this.dealsPer10 = event as unknown as any;
        console.log(this.dealsPer10);
        Storage.get(this.dealsPer10.s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
          this.newWidthA=this.dealsPer10.newWidth; this.newHeightA=this.dealsPer10.newHeight
        });
        this.api.ListDatinguserdbStagingsQuery(this.tab3displayitemidindex1,user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
          console.log(event);
          this.interestcateginittemp1 = event.interestcategory;
          this.interestcateginit1=JSON.stringify(this.interestcateginittemp1).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
          this.interdatetempinit1 = event.timestamp as string
          this.interestdateinit1 = new Date(this.interdatetempinit1);
        });
      });
      //expire items that hv been in this field for >30days
      ;this.day30flag10="";  //this will ensure that a yes being set prevoisly is not used in this instance.
      if(this.tab3expire30daycheck!=null) {
        this.api.ListDatinguserdbStagingsQuery(this.tab3expire30daycheck, user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
          console.log(event);
          this.interdatetemp = event.timestamp as string
          this.interdate = new Date(this.interdatetemp);
          console.log(this.interdate) //interactiondb timestamp
          console.log(this.interdate.setDate(this.interdate.getDate() + 30));
          console.log(new Date(this.interdate.setDate(this.interdate.getDate()) + 30) < new Date())
          //the day friendrequest was sent plus 30days is less than today's date when the user is looking at itemid, then move itemid to tab3B as expired
          if ((new Date(this.interdate.setDate(this.interdate.getDate()) + 30) < new Date()) == true) {
            this.day30flag10="yes";
            this.api.Updatetab3Expiration30days(user.attributes.sub, this.tab3expire30daycheck).then((event) => {})
          }     });
      } }
  };

  //for tab3 start, extract the itemid from the array in the itemtracking table
  async gethompage3recur100() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapistan2/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab3displayitemidnext=response1.data[0];
      this.tab3displayitemidindex1next=response1.data[1];
      //this.tab3unsubitemid=response1.data[2];
      this.tab3unsubitemid=response1.data[5]; this.tab3displayitemidindex2next=response1.data[2];
      this.tab3lengthnext=response1.data[3]; this.tab3endarrayitemidnext=response1.data[4];
      console.log(this.tab3displayitemidindex1next); this.tab3expire30daycheck=response1.data[6];
      this.gethompageF3recur100();
      if(+this.tab3lengthnext==1) {this.clicked0=true}
      if(+this.tab3lengthnext==0) {this.endofarray3="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray3="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  async gethompageF3recur100() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab3displayitemidindex1next!=null){
      this.api.GetDatinguserdbStaging(this.tab3displayitemidindex1next).then((event) => {
        console.log(event);
        this.dealsPer100 = event as unknown as any;
        console.log(this.dealsPer100);
        Storage.get(this.dealsPer100.s3file).then( res => {this.urlAnext=res //this gets the signed url, which will be given to html
          this.newWidthAnext=this.dealsPer100.newWidth; this.newHeightAnext=this.dealsPer100.newHeight
        });
        this.api.ListDatinguserdbStagingsQuery(this.tab3displayitemidindex1next, user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
          console.log(event);
          this.interestcateginittemp2 = event.interestcategory;
          this.interestcateginit2=JSON.stringify(this.interestcateginittemp2).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
          this.interdatetempinit2 = event.timestamp as string
          this.interestdateinit2 = new Date(this.interdatetempinit2);
        });
      });
      //expire items that hv been in this field for >30days
      this.day30flag100="";
      if(this.tab3expire30daycheck!=null) {
        this.api.ListDatinguserdbStagingsQuery(this.tab3expire30daycheck,user.attributes.sub, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
          console.log(event);
          this.interdatetemp = event.timestamp as string
          this.interdate = new Date(this.interdatetemp);
          console.log(this.interdate) //interactiondb timestamp
          console.log(this.interdate.setDate(this.interdate.getDate() + 30));
          console.log(new Date(this.interdate.setDate(this.interdate.getDate()) + 30) < new Date())
          //the day friendrequest was sent plus 30days is less than today's date when the user is looking at itemid, then move itemid to tab3B as expired
          if ((new Date(this.interdate.setDate(this.interdate.getDate()) + 30) < new Date()) == true) {
            this.day30flag100="yes";
            this.api.Updatetab3Expiration30days(user.attributes.sub, this.tab3expire30daycheck).then((event) => {})
          }     });
      } }
  };

  async unsubcribecheck() {
    const user = await Auth.currentAuthenticatedUser();  console.log(this.tab3unsubitemid)
    //unsubscribematchingme from userdbapi table. check if the itemid to be displayed has elected to have their profile deleted
    if(this.tab3unsubitemid!=null) { console.log(this.tab3unsubitemid)
      let paramsp1a = {headers: {}, response: true, queryStringParameters: {userid:this.tab3unsubitemid} };
      API.get("datingapitest4", "/userdbapi/m", paramsp1a).then(response1a =>
      {    //profile will still get displayed one-time, but the below api calls will remove itemid, so in future not there.
        if(response1a.data[0].unsubscribematchingme=="yes") {
          console.log("unsub me")
          //this removes the itemid from index 1 position, by the time unsubcribecheck function is called index0 itemid will be removed from array, thus, what was index1 is now already index0, hence below API call is still removing index0 itemid
          const paramsp1b = {body: {userid: user.attributes.sub, itemattr:"itemidstab3", index:2}}
          API.put("datingapitest4", "/itemapi", paramsp1b).then(response1b => {}).catch(error => {console.log(error.response1b);});
        }
      }).catch(error => {console.log(error.response1a)});
    }
  };

//in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle1back() {
    const user = await Auth.currentAuthenticatedUser(); console.log("viewtoggle1back entered");
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    if( this.day30flag10=="yes" || this.day30flag100=="yes") {
      console.log("viewtoggle1back yes block entered");
      this.api.BackinitializeButtonDatingitemtrackingStagingtab3(user.attributes.sub,this.tab3endarrayitemid,
        +this.tab3length-1).then((event1) => {;this.reloadComponent()})
    } else if ( this.day30flag10=="" || this.day30flag100=="") {
      console.log("viewtoggle1back empty block entered");
      this.api.BackinitializeButtonDatingitemtrackingStagingtab3(user.attributes.sub,this.tab3endarrayitemid,
        +this.tab3length).then((event1) => {;this.reloadComponent()})
    }
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle2back() {
    const user = await Auth.currentAuthenticatedUser(); console.log("viewtoggle2back entered");
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    if( this.day30flag10=="yes" || this.day30flag100=="yes") {
      console.log("viewtoggle2back yes block entered");
      this.api.BackinitializeButtonDatingitemtrackingStagingtab3(user.attributes.sub,this.tab3endarrayitemidnext,
        +this.tab3lengthnext-1).then((event1) => {;this.reloadComponent()})
    } else if ( this.day30flag10=="" || this.day30flag100=="") {
      console.log("viewtoggle2back empty block entered");
      this.api.BackinitializeButtonDatingitemtrackingStagingtab3(user.attributes.sub,this.tab3endarrayitemidnext,
        +this.tab3lengthnext).then((event1) => {;this.reloadComponent()})
    }
  };

  //this is needed for one-time itemids
  async initializeclick1itemidback() {
    const user = await Auth.currentAuthenticatedUser();
    console.log("initializeback entered");
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    //day30flag will say if prior to back button being hit, if 30day graphql api if statement was activated and an element moved from tab3 to tab3B.  if it did, then correct the removal index below accordingly.
    this.api.BackinitializeButtonDatingitemtrackingStagingtab3(user.attributes.sub,this.tab3endarrayitemidinitialize,
      +this.tab3length).then((event1) => {this.reloadComponent()})
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
    this.api.UpdateAcceptRequestatb3Button(user.attributes.sub,var1,"tab3accept",uuid(),var2,new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),
      new Date().valueOf()).then((event1) => {})
  }

//var1 is the itemid which the front-end will provide.  var2 is the interestcategory array which front-end will give
  async declinerequesttab3(var1:string, var2:[]) {
    const user = await Auth.currentAuthenticatedUser();
    //moves the itemid from tab3 to tab6B in itemtracking table.
    //moves the userid from tab3 to tab6B in itemtracking table of the itemid's row
    //populate interaction table with userid and itemid, with "requestdeclined"
    this.api.UpdateDeclineRequestatb3Button(user.attributes.sub,var1,"tab3decline",uuid(),var2,new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),
      new Date().valueOf()).then((event1) => {})
  }

  ontop(){try {const errorField = this.renderer.selectRootElement('.ontop_class');errorField.scrollIntoView();} catch (err) {}}


}
