import { Component, OnInit,Renderer2 } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {APIService, DatinguserdbStaging} from "../../API.service";
import Amplify, {API, Auth, Cache, Storage} from "aws-amplify";
import awsExports from "../../../aws-exports";
import {v4 as uuid} from "uuid";

@Component({
  selector: 'app-tab6displaynav',
  templateUrl: './tab6displaynav.component.html',
  styleUrls: ['./tab6displaynav.component.css']
})
export class Tab6displaynavComponent implements OnInit {

  router: Router;
  constructor(public authenticator: AuthenticatorService, private api: APIService, private route: ActivatedRoute, _router: Router,private renderer: Renderer2) {
    Amplify.configure(awsExports);
    this.router = _router;
  }

  ngOnInit(): void {
    this.gethompage1Binitialize()
    this.putindextab1B()
  }

  profilecompPartF=""; day30flag10="";day30flag100="";tab6expire30daycheck:string="";
  tab6displayitemid:string=""; //this has the itemid profile to display to user for tab1A which is index0 in array
  tab6displayitemidnext:string="";  //"next" is index1 in array and "nextnext" is index2 in array to check their unsubscribe status and whether needs to be deleted from array
  tab6displayitemidindex1:string=""; tab6displayitemidindex1next:string="";
  tab6endarrayitemid:string=""; tab6endarrayitemidnext:string=""; tab6endarrayitemidinitialize:string="";
  endofarray6=""; backflag=""; backflagnext="";
  interesttemp=[];  interdatetemp=""; interdate:any;
  interestcateginittemp1:any; interestcateginittemp2:any; interestcateginit1:any;interestdateinit1:any; interdatetempinit1="";
  interestcateginit2:any;interestdateinit2:any; interdatetempinit2="";
  public dealsPer10: DatinguserdbStaging;  public dealsPer100: DatinguserdbStaging;
  tab6length="0"; tab6lengthnext="0";
  clicked0: boolean=false;clicked: boolean=false; clicked1: boolean=false;
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

  //stores tab1B index in table
  async putindextab1B() {
    const expiration = new Date().valueOf()
    Cache.setItem('tab6index', '0', { expires: expiration +900000 }); //expires after 15minutes, time is in ms.
  }

  async delaytabPutIndex(ms: number) {
    await new Promise(resolve => setTimeout(()=>this.putindextab1B(), ms)).then(()=>console.log("fired"));
  }

  viewtoggle1next() {this.viewtoggle="yes"; this.initializerflag=""; this.onetimenextflag=""; this.clicked=false
    this.deleteindex0idrecur100Next();
  }

  viewtoggle2next() {this.viewtoggle="no";this.initializerflag=""; this.onetimenextflag=""; this.clicked1=false
    this.deleteindex0idrecur10Next();
  }

  onetimenextnext() {this.onetimenextflag='yes';
    this.deleteindex0idinitializeNext();
  }

  //deletes index0 and index1 itemid's
  async deleteindex0idinitializeNext() {
    const user = await Auth.currentAuthenticatedUser();
    //moves itemid to end of array
    //deletes item at index0.  this two operations have to be sequenced.
    this.api.NextButtonDatingitemtrackingStagingtab6(user.attributes.sub,this.tab6displayitemid).then((event1) => {
      this.gethompage1Arecur10()})
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtonDatingitemtrackingStagingtab6(user.attributes.sub,this.tab6displayitemidnext).then((event1) => {
      this.gethompage1Arecur10() })
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtonDatingitemtrackingStagingtab6(user.attributes.sub,this.tab6displayitemid).then((event1) => {
      this.gethompage1Arecur100()})
  }


  initializerflag=""; onetimenextflag=""
  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Binitialize() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab6dup/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab6displayitemid=response1.data[0];
      this.tab6displayitemidnext=response1.data[1];
      this.tab6length=response1.data[3]; this.tab6endarrayitemidinitialize=response1.data[4];
      console.log(this.tab6displayitemid); console.log(this.tab6displayitemidnext);
      this.gethompageF1Ainitialize()
      if(+this.tab6length==1) {this.clicked0=true}
      if(+this.tab6length==0) {this.endofarray6="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray6="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthAnext=''; newHeightAnext=''
  urlAnext:string; //signed url to the image stored in s3
  async gethompageF1Ainitialize() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    //retrieves info in itemid1
    if(this.tab6displayitemid!=null){
      this.api.GetDatinguserdbStaging(this.tab6displayitemid).then((event) => {
        console.log(event);
        this.dealsPer10 = event as unknown as any;
        console.log(this.dealsPer10);
        //flag sets to yes and email displayed only if user had consented to it
        Storage.get(this.dealsPer10.s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
          this.newWidthA=this.dealsPer10.newWidth; this.newHeightA=this.dealsPer10.newHeight
        });
        this.api.ListDatinguserdbStagingsQuery(user.attributes.sub, this.tab6displayitemid,{eventtype: {eq: "friendsrequestsent"}}).then((event) => {
          console.log(event);
          this.interestcateginittemp1 = event.interestcategory;
          this.interestcateginit1=JSON.stringify(this.interestcateginittemp1).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
          this.interdatetempinit1 = event.timestamp as string
          this.interestdateinit1 = new Date(this.interdatetempinit1);
          this.initializerflag = "yes"
        });
      });
      //retrieves info in itemid2
      if(this.tab6displayitemidnext!=null) {
        this.api.GetDatinguserdbStaging(this.tab6displayitemidnext).then((event) => {
          console.log(event);
          this.dealsPer100 = event as unknown as any;
          console.log(this.dealsPer100);
          Storage.get(this.dealsPer100.s3file).then(res => {
            this.urlAnext = res //this gets the signed url, which will be given to html
            this.newWidthAnext = this.dealsPer100.newWidth;
            this.newHeightAnext = this.dealsPer100.newHeight
          });
          this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab6displayitemidnext, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
            console.log(event);
            this.interestcateginittemp2 = event.interestcategory;
            this.interestcateginit2=JSON.stringify(this.interestcateginittemp2).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
            this.interdatetempinit2 = event.timestamp as string
            this.interestdateinit2 = new Date(this.interdatetempinit2);
          });
        });
      } }
  };

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur10() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab6dup/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab6displayitemid=response1.data[0];
      this.tab6displayitemidindex1=response1.data[1]
      this.tab6length=response1.data[3]; this.tab6endarrayitemid=response1.data[4];
      this.tab6expire30daycheck=response1.data[6]; //this is index5 in the itemid array
      console.log(this.tab6displayitemid);
      this.gethompageF1Arecur10()
      if(+this.tab6length==1) {this.clicked0=true}
      if(+this.tab6length==0) {this.endofarray6="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray6="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthA=''; newHeightA=''
  urlA:string; //signed url to the image stored in s3
  async gethompageF1Arecur10() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab6displayitemidindex1!=null){
      this.api.GetDatinguserdbStaging(this.tab6displayitemidindex1).then((event) => {
        console.log(event);
        this.dealsPer10 = event as unknown as any;
        console.log(this.dealsPer10);
        Storage.get(this.dealsPer10.s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
          this.newWidthA=this.dealsPer10.newWidth; this.newHeightA=this.dealsPer10.newHeight
        });
        this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab6displayitemidindex1, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
          console.log(event);
          this.interestcateginittemp1 = event.interestcategory;
          this.interestcateginit1=JSON.stringify(this.interestcateginittemp1).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
          this.interdatetempinit1 = event.timestamp as string
          this.interestdateinit1 = new Date(this.interdatetempinit1);
        });
      });
      //expire items that hv been in this field for >30days
      ;this.day30flag10="";  //this will ensure that a yes being set prevoisly is not used in this instance.
      if(this.tab6expire30daycheck!=null) {
        this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab6expire30daycheck,  {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
          console.log(event);
          this.interdatetemp = event.timestamp as string
          this.interdate = new Date(this.interdatetemp);
          console.log(this.interdate) //interactiondb timestamp
          console.log(this.interdate.setDate(this.interdate.getDate() + 30));
          console.log(new Date(this.interdate.setDate(this.interdate.getDate()) + 30) < new Date())
          //the day friendrequest was sent plus 30days is less than today's date when the user is looking at itemid, then move itemid to tab3B as expired
          if ((new Date(this.interdate.setDate(this.interdate.getDate()) + 30) < new Date()) == true) {
            this.day30flag10="yes";
            this.api.Updatetab6Expiration30days(user.attributes.sub, this.tab6expire30daycheck).then((event) => {})
          }     });
      }   }
  };

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur100() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab6dup/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab6displayitemidnext=response1.data[0];
      this.tab6displayitemidindex1next=response1.data[1];
      this.tab6lengthnext=response1.data[3]; this.tab6endarrayitemidnext=response1.data[4];
      this.tab6expire30daycheck=response1.data[6]; //this is index5 in the itemid array
      console.log(this.tab6displayitemidnext);
      this.gethompageF1Arecur100();
      if(+this.tab6lengthnext==1) {this.clicked0=true}
      if(+this.tab6lengthnext==0) {this.endofarray6="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray6="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  async gethompageF1Arecur100() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab6displayitemidindex1next!=null) {
      this.api.GetDatinguserdbStaging(this.tab6displayitemidindex1next).then((event) => {
        console.log(event);
        this.dealsPer100 = event as unknown as any;
        console.log(this.dealsPer100);
        Storage.get(this.dealsPer100.s3file).then(res => {
          this.urlAnext = res //this gets the signed url, which will be given to html
          this.newWidthAnext = this.dealsPer100.newWidth;
          this.newHeightAnext = this.dealsPer100.newHeight
        });
        this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab6displayitemidindex1next, {eventtype: {eq: "friendsrequestsent"}}).then((event) => {
          console.log(event);
          this.interestcateginittemp2 = event.interestcategory;
          this.interestcateginit2=JSON.stringify(this.interestcateginittemp2).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
          this.interdatetempinit2 = event.timestamp as string
          this.interestdateinit2 = new Date(this.interdatetempinit2);
        });
      });
      //expire items that hv been in this field for >30days
      this.day30flag100="";
      if(this.tab6expire30daycheck!=null) {
        this.api.ListDatinguserdbStagingsQuery(user.attributes.sub, this.tab6expire30daycheck,{eventtype: {eq: "friendsrequestsent"}}).then((event) => {
          console.log(event);
          this.interdatetemp = event.timestamp as string
          this.interdate = new Date(this.interdatetemp);
          console.log(this.interdate) //interactiondb timestamp
          console.log(this.interdate.setDate(this.interdate.getDate() + 30));
          console.log(new Date(this.interdate.setDate(this.interdate.getDate()) + 30) < new Date())
          //the day friendrequest was sent plus 30days is less than today's date when the user is looking at itemid, then move itemid to tab3B as expired
          if ((new Date(this.interdate.setDate(this.interdate.getDate()) + 30) < new Date()) == true) {
            this.day30flag100="yes";
            this.api.Updatetab6Expiration30days(user.attributes.sub, this.tab6expire30daycheck).then((event) => {})
          }     });
      }
    }
    //   this.unsubcribecheck()
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle1back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    if( this.day30flag10=="yes" || this.day30flag100=="yes") {
      this.api.BackinitializeButtonDatingitemtrackingStagingtab6(user.attributes.sub,this.tab6endarrayitemid,
        +this.tab6length-1).then((event1) => {;this.reloadComponent()})
    } else if ( this.day30flag10=="" || this.day30flag100=="") {
      this.api.BackinitializeButtonDatingitemtrackingStagingtab6(user.attributes.sub,this.tab6endarrayitemid,
        +this.tab6length).then((event1) => {;this.reloadComponent()})
    }
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle2back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    if( this.day30flag10=="yes" || this.day30flag100=="yes") {
      this.api.BackinitializeButtonDatingitemtrackingStagingtab6(user.attributes.sub,this.tab6endarrayitemidnext,
        +this.tab6lengthnext-1).then((event1) => {;this.reloadComponent()})
    } else if ( this.day30flag10=="" || this.day30flag100=="") {
      this.api.BackinitializeButtonDatingitemtrackingStagingtab6(user.attributes.sub,this.tab6endarrayitemidnext,
        +this.tab6lengthnext).then((event1) => {;this.reloadComponent()})
    }
  };

  //this is needed for one-time itemids
  async initializeclick1itemidback() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab2
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab6(user.attributes.sub,this.tab6endarrayitemidinitialize,
      +this.tab6length).then((event1) => {this.reloadComponent()})
  }

  async loyaltynext() {
    const user = await Auth.currentAuthenticatedUser();
    //20points for clicking the next button
    const paramsp3 = {body: {userid: user.attributes.sub,}}
    API.post("datingapitest4", "/loyaltyadd", paramsp3).then(response3 => {console.log("success3");}).catch(error => {console.log(error.response3);});
  }

  ontop(){try {const errorField = this.renderer.selectRootElement('.ontop_class');errorField.scrollIntoView();} catch (err) {}}

}
