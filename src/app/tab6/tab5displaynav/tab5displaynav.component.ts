import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {APIService, DatinguserdbStaging} from "../../API.service";
import Amplify, {API, Auth, Storage} from "aws-amplify";
import awsExports from "../../../aws-exports";
import {v4 as uuid} from "uuid";

@Component({
  selector: 'app-tab5displaynav',
  templateUrl: './tab5displaynav.component.html',
  styleUrls: ['./tab5displaynav.component.css']
})
export class Tab5displaynavComponent implements OnInit {

  router: Router;

  constructor(public authenticator: AuthenticatorService, private api: APIService, private route: ActivatedRoute, _router: Router) {
    Amplify.configure(awsExports);
    this.router = _router;
  }

  ngOnInit(): void {
    this.gethompage1Binitialize()
    this.delaytabPutIndex(500)
  }

  profilecompPartF="";
  tab5displayitemid:string=""; //this has the itemid profile to display to user for tab1A which is index0 in array
  tab5displayitemidnext:string="";  //"next" is index1 in array and "nextnext" is index2 in array to check their unsubscribe status and whether needs to be deleted from array
  tab5displayitemidindex1:string=""; tab5displayitemidindex1next:string="";
  tab5endarrayitemid:string=""; tab5endarrayitemidnext:string=""; tab5endarrayitemidinitialize:string="";
  endofarray5=""; backflag=""; backflagnext=""; interesttemp=[]
  public dealsPer10: DatinguserdbStaging;  public dealsPer100: DatinguserdbStaging;
  tab5length="0"; tab5lengthnext="0";
  clicked0: boolean=false;clicked: boolean=false; clicked1: boolean=false;
  viewtoggle="";

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  //stores tab1B index in table
  async putindextab1B() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp2 = {body: {userid: user.attributes.sub, tab1index:0, tab3index:0, tab6index:3}} //place itemid in index1 position of tab1
    API.put("datingapitabindext4","/datingapitabindex", paramsp2).then(response2 => {console.log("success2");
    }).catch(error => {console.log(error.response2);});
  }

//store the reason for connect in array
  categ=new Array();
  async categ1clicked() {this.categ.push("Dating or make new friends with similar interests"); console.log(this.categ)};
  async categ2clicked() {this.categ.push("Looking for a Mentor in my occupation/industry/education")};
  async categ3clicked() {this.categ.push("Interested in training a Mentee in my occupation/industry/education")};
  async categ4clicked() {this.categ.push("Looking for like-minded people to serve our community")};
  async categ5clicked() {this.categ.push("Other")};

  //var1 is this.tab1Bdisplayitemid or this.tab1Bdisplayitemidnext
  async connectmetab61Apb(var1:string) {
    const user = await Auth.currentAuthenticatedUser();
    //moves the itemid from tab1A or tab1B or tab1C to tab6 in itemtracking table when "connect me" button is clicked. tabname:"itemidstab6"
    //populate interaction table with new userid and itemid, with reason for interest, and category of interaction
    //reset the interest array to empty once the interest have been stored in interaction table with a succesful or failing API call
    //for each friendsrequestsent interaction by the user they get 20 loyalty points
    this.interesttemp=this.categ as [];
    this.api.UpdateConnectButton(user.attributes.sub,var1,uuid(),this.interesttemp,new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),new Date().valueOf() ).then((event1) => {
      console.log(event1); this.categ=new Array();}).catch(error => {console.log(error.response1b);this.categ=new Array();});
  }

  async delaytabPutIndex(ms: number) {
    await new Promise(resolve => setTimeout(()=>this.putindextab1B(), ms)).then(()=>console.log("fired"));
  }

  viewtoggle1connectdislike() {this.viewtoggle="yes"; this.initializerflag=""; this.onetimenextflag=""; this.clicked=false
    this.deleteindex0idrecur100ConnectDislike();
  }

  viewtoggle2connectdislike() {this.viewtoggle="no";this.initializerflag=""; this.onetimenextflag=""; this.clicked1=false
    this.deleteindex0idrecur10ConnectDislike();
  }

  onetimenextconnectdislike() {this.onetimenextflag='yes';
    this.deleteindex0idinitializeConnectDislike();
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
    //reset the interest array in case it was clicked and then nextprofile was clicked, so nothing to store.
    this.categ=new Array();
    //moves itemid to end of array
    //deletes item at index0.  this two operations have to be sequenced.
    this.api.NextButtonDatingitemtrackingStagingtab5(user.attributes.sub,this.tab5displayitemid).then((event1) => {
      this.gethompage1Arecur10()})
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10Next() {
    const user = await Auth.currentAuthenticatedUser();
    //reset the interest array in case it was clicked and then nextprofile was clicked, so nothing to store.
    this.categ=new Array();
    this.api.NextButtonDatingitemtrackingStagingtab5(user.attributes.sub,this.tab5displayitemidnext).then((event1) => {
      this.gethompage1Arecur10() })
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100Next() {
    const user = await Auth.currentAuthenticatedUser();
    //reset the interest array in case it was clicked and then nextprofile was clicked, so nothing to store.
    this.categ=new Array();
    this.api.NextButtonDatingitemtrackingStagingtab5(user.attributes.sub,this.tab5displayitemid).then((event1) => {
      this.gethompage1Arecur100()})
  }

  //deletes index0 and index1 itemid's
  async deleteindex0idinitializeConnectDislike() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab5"}}
    API.post("datingapitest4", "/itemapitabremoveindex", paramsp3).then(response3 => {console.log("success3");
      this.gethompage1Arecur10()
    }).catch(error => {console.log(error.response3);});
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10ConnectDislike() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab5"}}
    API.post("datingapitest4", "/itemapitabremoveindex", paramsp3).then(response3 => {console.log("success3");
      this.gethompage1Arecur10();
    }).catch(error => {console.log(error.response3);});
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100ConnectDislike() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab5"}}
    API.post("datingapitest4", "/itemapitabremoveindex", paramsp3).then(response3 => {console.log("success3");
      this.gethompage1Arecur100()
    }).catch(error => {console.log(error.response3);});
  }

  initializerflag=""; onetimenextflag=""
  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Binitialize() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab5move/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab5displayitemid=response1.data[0];
      this.tab5displayitemidnext=response1.data[1];
      this.tab5length=response1.data[3]; this.tab5endarrayitemidinitialize=response1.data[4];
      console.log(this.tab5displayitemid); console.log(this.tab5displayitemidnext);
      this.gethompageF1Ainitialize()
      if(+this.tab5length==1) {this.clicked0=true}
      if(+this.tab5length==0) {this.endofarray5="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray5="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthAnext=''; newHeightAnext=''
  urlAnext:string; //signed url to the image stored in s3
  async gethompageF1Ainitialize() {
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    //retrieves info in itemid1
    if(this.tab5displayitemid!=null){
      this.api.GetDatinguserdbStaging(this.tab5displayitemid).then((event) => {
        console.log(event);
        this.dealsPer10 = event as unknown as any;
        console.log(this.dealsPer10);
        Storage.get(this.dealsPer10.s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
          this.newWidthA=this.dealsPer10.newWidth; this.newHeightA=this.dealsPer10.newHeight
          this.initializerflag="yes"
        });
      });
      //retrieves info in itemid2
      if(this.tab5displayitemidnext!=null) {
        this.api.GetDatinguserdbStaging(this.tab5displayitemidnext).then((event) => {
          console.log(event);
          this.dealsPer100 = event as unknown as any;
          console.log(this.dealsPer100);
          Storage.get(this.dealsPer100.s3file).then(res => {
            this.urlAnext = res //this gets the signed url, which will be given to html
            this.newWidthAnext = this.dealsPer100.newWidth;
            this.newHeightAnext = this.dealsPer100.newHeight
          });
        });
      } }
  };

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur10() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab5move/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab5displayitemid=response1.data[0];
      this.tab5displayitemidindex1=response1.data[1]
      this.tab5length=response1.data[3]; this.tab5endarrayitemid=response1.data[4];
      console.log(this.tab5displayitemid);
      this.gethompageF1Arecur10()
      if(+this.tab5length==1) {this.clicked0=true}
      if(+this.tab5length==0) {this.endofarray5="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray5="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthA=''; newHeightA=''
  urlA:string; //signed url to the image stored in s3
  async gethompageF1Arecur10() {
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab5displayitemidindex1!=null){
      this.api.GetDatinguserdbStaging(this.tab5displayitemidindex1).then((event) => {
        console.log(event);
        this.dealsPer10 = event as unknown as any;
        console.log(this.dealsPer10);
        Storage.get(this.dealsPer10.s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
          this.newWidthA=this.dealsPer10.newWidth; this.newHeightA=this.dealsPer10.newHeight
        });
      });
    }
  };

  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Arecur100() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab5move/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab5displayitemidnext=response1.data[0];
      this.tab5displayitemidindex1next=response1.data[1];
      this.tab5lengthnext=response1.data[3]; this.tab5endarrayitemidnext=response1.data[4];
      console.log(this.tab5displayitemidnext);
      this.gethompageF1Arecur100();
      if(+this.tab5lengthnext==1) {this.clicked0=true}
      if(+this.tab5lengthnext==0) {this.endofarray5="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray5="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  async gethompageF1Arecur100() {
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab5displayitemidindex1next!=null) {
      this.api.GetDatinguserdbStaging(this.tab5displayitemidindex1next).then((event) => {
        console.log(event);
        this.dealsPer100 = event as unknown as any;
        console.log(this.dealsPer100);
        Storage.get(this.dealsPer100.s3file).then(res => {
          this.urlAnext = res //this gets the signed url, which will be given to html
          this.newWidthAnext = this.dealsPer100.newWidth;
          this.newHeightAnext = this.dealsPer100.newHeight
        });
      });
    }
    //   this.unsubcribecheck()
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle1back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab5(user.attributes.sub,this.tab5endarrayitemid,
      +this.tab5length).then((event1) => {;this.reloadComponent()})
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle2back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab5(user.attributes.sub,this.tab5endarrayitemidnext,
      +this.tab5lengthnext).then((event1) => {;this.reloadComponent()})
  };

  //this is needed for one-time itemids
  async initializeclick1itemidback() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab2
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab5(user.attributes.sub,this.tab5endarrayitemidinitialize,
      +this.tab5length).then((event1) => {this.reloadComponent()})
  }




}
