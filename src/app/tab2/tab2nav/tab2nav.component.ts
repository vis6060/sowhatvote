import { Component, OnInit,Renderer2 } from '@angular/core';
import awsExports from 'src/aws-exports';

import {API, Cache} from 'aws-amplify';
import Amplify, {Auth, Storage} from "aws-amplify";
import { ActivatedRoute,Router } from '@angular/router';
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {APIService, DatinguserdbStaging} from "../../API.service";


@Component({
  selector: 'app-tab2nav',
  templateUrl: './tab2nav.component.html',
  styleUrls: ['./tab2nav.component.css']
})
export class Tab2navComponent implements OnInit {



  constructor(public authenticator: AuthenticatorService, private api: APIService, private route: ActivatedRoute, private router: Router,private renderer: Renderer2) {
    Amplify.configure(awsExports);
    if(this.authenticator.route!="authenticated") {this.router.navigate(['/MyAccount'])}  else
    if(Cache.getItem('profAevade')=="yes") {this.router.navigate(['/Meetup/Step0'])} else
    if(Cache.getItem('profDevade')=="yes") {this.router.navigate(['/Meetup/Step3'])} else
    if(Cache.getItem('profEevade')=="yes") {this.router.navigate(['/Meetup/Step4'])} else
    if(Cache.getItem('profFevade')=="yes") {this.router.navigate(['/Meetup/Step5'])}
  }

  ngOnInit(): void {
    this.gethompage1Binitialize()
  }

  profilecompPartF="";
  tab2displayitemid:string=""; //this has the itemid profile to display to user for tab1A which is index0 in array
  tab2displayitemidnext:string="";  //"next" is index1 in array and "nextnext" is index2 in array to check their unsubscribe status and whether needs to be deleted from array
  tab2displayitemidindex1:string=""; tab2displayitemidindex1next:string="";
  tab2endarrayitemid:string=""; tab2endarrayitemidnext:string=""; tab2endarrayitemidinitialize:string="";
  endofarray2=""; backflag=""; backflagnext="";
  interesttemp=[];  interdatetemp=""; interdate:any;
  interestcateginittemp1:any; interestcateginittemp2:any; interestcateginit1="";interestdateinit1:any; interdatetempinit1="";
  interestcateginit2="";interestdateinit2:any; interdatetempinit2="";
  public dealsPer10: DatinguserdbStaging;  public dealsPer100: DatinguserdbStaging;
  tab2length="0"; tab2lengthnext="0";
  clicked0: boolean=false;clicked: boolean=false; clicked1: boolean=false;
  viewtoggle="";
  emailshareflag10=""; emailshareflag100="";
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
    this.api.NextButtonDatingitemtrackingStagingtab2(user.attributes.sub,this.tab2displayitemid).then((event1) => {
      this.gethompage1Arecur10()})
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtonDatingitemtrackingStagingtab2(user.attributes.sub,this.tab2displayitemidnext).then((event1) => {
      this.gethompage1Arecur10() })
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtonDatingitemtrackingStagingtab2(user.attributes.sub,this.tab2displayitemid).then((event1) => {
      this.gethompage1Arecur100()})
  }

  initializerflag=""; onetimenextflag=""
  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Binitialize() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab2/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab2displayitemid=response1.data[0];
      this.tab2displayitemidnext=response1.data[1];
      this.tab2length=response1.data[3]; this.tab2endarrayitemidinitialize=response1.data[4];
      console.log(this.tab2displayitemid); console.log(this.tab2displayitemidnext);
      this.gethompageF1Ainitialize()
      if(+this.tab2length==1) {this.clicked0=true}
      if(+this.tab2length==0) {this.endofarray2="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray2="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthAnext=''; newHeightAnext=''
  urlAnext:string; //signed url to the image stored in s3
  async gethompageF1Ainitialize() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    //retrieves info in itemid1
    if(this.tab2displayitemid!=null){
      this.api.GetDatinguserdbStaging(this.tab2displayitemid).then((event) => {
        console.log(event);
        this.dealsPer10 = event as unknown as any;
        console.log(this.dealsPer10);
        //flag sets to yes and email displayed only if user had consented to it
        if(this.dealsPer10.emailshareagree=="true") {this.emailshareflag10="yes";}
        Storage.get(this.dealsPer10.s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
          this.newWidthA=this.dealsPer10.newWidth; this.newHeightA=this.dealsPer10.newHeight
        });
        this.api.ListDatinguserdbStagingsQuery(this.tab2displayitemid,user.attributes.sub, {eventtype: {eq: "requestaccepted"}}).then((event) => {
          console.log(event);
          this.interestcateginittemp1 = event.interestcategory;
          this.interestcateginit1 = JSON.stringify(this.interestcateginittemp1).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
          this.interdatetempinit1 = event.timestamp as string
          this.interestdateinit1 = new Date(this.interdatetempinit1);
          this.initializerflag = "yes"
        }).catch(error => {
          this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab2displayitemid, {eventtype: {eq: "requestaccepted"}}).then((event) => {
            console.log(event);
            this.interestcateginittemp1 = event.interestcategory;
            this.interestcateginit1 = JSON.stringify(this.interestcateginittemp1).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
            this.interdatetempinit1 = event.timestamp as string
            this.interestdateinit1 = new Date(this.interdatetempinit1);
            this.initializerflag = "yes"
          }); })
      });
      //retrieves info in itemid2
      if(this.tab2displayitemidnext!=null) {
        this.api.GetDatinguserdbStaging(this.tab2displayitemidnext).then((event) => {
          console.log(event);
          this.dealsPer100 = event as unknown as any;
          console.log(this.dealsPer100);
          //flag sets to yes and email displayed only if user had consented to it
          if(this.dealsPer100.emailshareagree=="true") {this.emailshareflag100="yes";}
          Storage.get(this.dealsPer100.s3file).then(res => {
            this.urlAnext = res //this gets the signed url, which will be given to html
            this.newWidthAnext = this.dealsPer100.newWidth;
            this.newHeightAnext = this.dealsPer100.newHeight
          });
          this.api.ListDatinguserdbStagingsQuery(this.tab2displayitemidnext,user.attributes.sub, {eventtype: {eq: "requestaccepted"}}).then((event) => {
            console.log(event);
            this.interestcateginittemp2 = event.interestcategory;
            this.interestcateginit2=JSON.stringify(this.interestcateginittemp2).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
            this.interdatetempinit2 = event.timestamp as string
            this.interestdateinit2 = new Date(this.interdatetempinit2);
          }).catch(error => {
            this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab2displayitemidnext, {eventtype: {eq: "requestaccepted"}}).then((event) => {
              console.log(event);
              this.interestcateginittemp2 = event.interestcategory;
              this.interestcateginit2=JSON.stringify(this.interestcateginittemp2).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
              this.interdatetempinit2 = event.timestamp as string
              this.interestdateinit2 = new Date(this.interdatetempinit2);}) })
        })
      };
    } }

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur10() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab2/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab2displayitemid=response1.data[0];
      this.tab2displayitemidindex1=response1.data[1]
      this.tab2length=response1.data[3]; this.tab2endarrayitemid=response1.data[4];
      console.log(this.tab2displayitemid);
      this.gethompageF1Arecur10()
      if(+this.tab2length==1) {this.clicked0=true}
      if(+this.tab2length==0) {this.endofarray2="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray2="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthA=''; newHeightA=''
  urlA:string; //signed url to the image stored in s3
  async gethompageF1Arecur10() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab2displayitemidindex1!=null){
      this.api.GetDatinguserdbStaging(this.tab2displayitemidindex1).then((event) => {
        console.log(event);
        this.dealsPer10 = event as unknown as any;
        console.log(this.dealsPer10);
        //flag sets to yes and email displayed only if user had consented to it
        if(this.dealsPer10.emailshareagree=="true") {this.emailshareflag10="yes";}
        Storage.get(this.dealsPer10.s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
          this.newWidthA=this.dealsPer10.newWidth; this.newHeightA=this.dealsPer10.newHeight
        });
        this.api.ListDatinguserdbStagingsQuery(this.tab2displayitemidindex1,user.attributes.sub, {eventtype: {eq: "requestaccepted"}}).then((event) => {
          console.log(event);
          this.interestcateginittemp1 = event.interestcategory;
          this.interestcateginit1=JSON.stringify(this.interestcateginittemp1).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
          this.interdatetempinit1 = event.timestamp as string
          this.interestdateinit1 = new Date(this.interdatetempinit1);
        }).catch(error => {
          this.api.ListDatinguserdbStagingsQuery(user.attributes.sub,this.tab2displayitemidindex1, {eventtype: {eq: "requestaccepted"}}).then((event) => {
            console.log(event);
            this.interestcateginittemp1 = event.interestcategory;
            this.interestcateginit1=JSON.stringify(this.interestcateginittemp1).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
            this.interdatetempinit1 = event.timestamp as string
            this.interestdateinit1 = new Date(this.interdatetempinit1);
          })
        });
      })
    }}

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur100() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab2/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab2displayitemidnext=response1.data[0];
      this.tab2displayitemidindex1next=response1.data[1];
      this.tab2lengthnext=response1.data[3]; this.tab2endarrayitemidnext=response1.data[4];
      console.log(this.tab2displayitemidnext);
      this.gethompageF1Arecur100();
      if(+this.tab2lengthnext==1) {this.clicked0=true}
      if(+this.tab2lengthnext==0) {this.endofarray2="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray2="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  async gethompageF1Arecur100() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab2displayitemidindex1next!=null) {
      this.api.GetDatinguserdbStaging(this.tab2displayitemidindex1next).then((event) => {
        console.log(event);
        this.dealsPer100 = event as unknown as any;
        console.log(this.dealsPer100);
        //flag sets to yes and email displayed only if user had consented to it
        if(this.dealsPer100.emailshareagree=="true") {this.emailshareflag100="yes";}
        Storage.get(this.dealsPer100.s3file).then(res => {
          this.urlAnext = res //this gets the signed url, which will be given to html
          this.newWidthAnext = this.dealsPer100.newWidth;
          this.newHeightAnext = this.dealsPer100.newHeight
        });
        this.api.ListDatinguserdbStagingsQuery(this.tab2displayitemidindex1next,user.attributes.sub, {eventtype: {eq: "requestaccepted"}}).then((event) => {
          console.log(event);
          this.interestcateginittemp2 = event.interestcategory;
          this.interestcateginit2=JSON.stringify(this.interestcateginittemp2).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
          this.interdatetempinit2 = event.timestamp as string
          this.interestdateinit2 = new Date(this.interdatetempinit2);
        }).catch(error => {
          this.api.ListDatinguserdbStagingsQuery(user.attributes.sub, this.tab2displayitemidindex1next, {eventtype: {eq: "requestaccepted"}}).then((event) => {
            console.log(event);
            this.interestcateginittemp2 = event.interestcategory;
            this.interestcateginit2 = JSON.stringify(this.interestcateginittemp2).replace("[", "").replace("[", "").replace("]", "").replace("]", "");
            this.interdatetempinit2 = event.timestamp as string
            this.interestdateinit2 = new Date(this.interdatetempinit2);
          })
        })
      });
    } };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle1back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab2(user.attributes.sub,this.tab2endarrayitemid,
      +this.tab2length).then((event1) => {;this.reloadComponent()})
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle2back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab2(user.attributes.sub,this.tab2endarrayitemidnext,
      +this.tab2lengthnext).then((event1) => {;this.reloadComponent()})
  };

  //this is needed for one-time itemids
  async initializeclick1itemidback() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab2
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab2(user.attributes.sub,this.tab2endarrayitemidinitialize,
      +this.tab2length).then((event1) => {this.reloadComponent()})
  }

  ontop(){try {const errorField = this.renderer.selectRootElement('.ontop_class');errorField.scrollIntoView();} catch (err) {}}


}
