import {Component, OnInit} from '@angular/core';
import { v4 as uuid } from 'uuid';
import awsExports from 'src/aws-exports';

import { API } from 'aws-amplify';
import Amplify, {Auth, Storage} from "aws-amplify";
import { ActivatedRoute,Router } from '@angular/router';
import {AuthenticatorService} from "@aws-amplify/ui-angular";

import {APIService, DatinguserdbStaging} from "../../API.service";

@Component({
  selector: 'app-tab1adisplaynav',
  templateUrl: './tab1adisplaynav.component.html',
  styleUrls: ['./tab1adisplaynav.component.css']
})
export class Tab1adisplaynavComponent implements OnInit {

  router: Router;
  constructor(public authenticator: AuthenticatorService, private api: APIService, private route: ActivatedRoute, _router: Router) {
    Amplify.configure(awsExports); this.router = _router;
  }

  ngOnInit(): void {
    this.gethompage1Ainitialize()
    this.delaytabPutIndex(500)
  }

  profilecompPartF="";
  tab1Adisplayitemid:string=""; //this has the itemid profile to display to user for tab1A which is index0 in array
  tab1Adisplayitemidnext:string="";  //"next" is index1 in array and "nextnext" is index2 in array to check their unsubscribe status and whether needs to be deleted from array
  tab1Adisplayitemidindex1:string=""; tab1Adisplayitemidindex1next:string="";
  tab1Aunsubitemid:string=""; //stores the itemid on which to run unsub check
  tab1Aendarrayitemid:string=""; tab1Aendarrayitemidnext:string=""; tab1Aendarrayitemidinitialize:string="";
  endofarray1A=""; backflag=""; backflagnext=""; interesttemp=[]
  public dealsPer10: DatinguserdbStaging;  public dealsPer100: DatinguserdbStaging;
  tab1Alength="0"; tab1Alengthnext="0";
  clicked0: boolean=false;clicked: boolean=false; clicked1: boolean=false;
  viewtoggle="";

  //refreshes the browser upon button click of next or dislike or connectme
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    //   this.delay(10000);
  }

  //stores tab1A index in table
  async putindextab1A() {
    const user = await Auth.currentAuthenticatedUser();
    const paramsp2 = {body: {userid: user.attributes.sub, tab1index:0, tab3index:0, tab6index:0}} //place itemid in index0 position of tab2
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

  //var1 is this.tab1Adisplayitemid or this.tab1Adisplayitemidnext
  async connectmetab61Apb(var1:string) {
    const user = await Auth.currentAuthenticatedUser();
    //moves the itemid from tab1A or tab1B or tab1C to tab6 in itemtracking table when "connect me" button is clicked. tabname:"itemidstab6"
    //populate interaction table with new userid and itemid, with reason for interest, and category of interaction
    //reset the interest array to empty once the interest have been stored in interaction table with a succesful or failing API call
    //for each friendsrequestsent interaction by the user they get 20 loyalty points
    this.interesttemp=this.categ as [];
    this.api.UpdateConnectButton(user.attributes.sub,var1,"tab1connect",uuid(),this.interesttemp,new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),new Date().valueOf() ).then((event1) => {
      console.log(event1); this.categ=new Array();}).catch(error => {console.log(error.response1b);this.categ=new Array();});
  }

  //  tab1B when a user clicks on "dislike" button, move the itemid from tab1B to tab5.
  async disliketab51Apb(var3:string) {
    const user = await Auth.currentAuthenticatedUser();
    //reset the interest array in case it was clicked and then nextprofile was clicked, so nothing to store.
    this.categ=new Array();
    this.api.UpdateDislikeButton(user.attributes.sub,var3,"tab1dislike",uuid(),new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),new Date().valueOf() ).then((event1) => {})
  }

  async delaytabPutIndex(ms: number) {
    await new Promise(resolve => setTimeout(()=>this.putindextab1A(), ms)).then(()=>console.log("fired"));
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
    this.api.NextButtonDatingitemtrackingStagingtab1A(user.attributes.sub,this.tab1Adisplayitemid).then((event1) => {
      this.gethompage1Arecur10()})
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10Next() {
    const user = await Auth.currentAuthenticatedUser();
    //reset the interest array in case it was clicked and then nextprofile was clicked, so nothing to store.
    this.categ=new Array();
    this.api.NextButtonDatingitemtrackingStagingtab1A(user.attributes.sub,this.tab1Adisplayitemidnext).then((event1) => {
      this.gethompage1Arecur10() })
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100Next() {
    const user = await Auth.currentAuthenticatedUser();
    //reset the interest array in case it was clicked and then nextprofile was clicked, so nothing to store.
    this.categ=new Array();
    this.api.NextButtonDatingitemtrackingStagingtab1A(user.attributes.sub,this.tab1Adisplayitemid).then((event1) => {
      this.gethompage1Arecur100()})
  }

  //deletes index0 and index1 itemid's
  async deleteindex0idinitializeConnectDislike() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab1A"}}
    API.post("datingapi1At4", "/itemapitab1Adisp", paramsp3).then(response3 => {console.log("success3");
      this.gethompage1Arecur10()
    }).catch(error => {console.log(error.response3);});
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10ConnectDislike() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab1A"}}
    API.post("datingapi1At4", "/itemapitab1Adisp", paramsp3).then(response3 => {console.log("success3");
      this.gethompage1Arecur10();
    }).catch(error => {console.log(error.response3);});
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100ConnectDislike() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab1A"}}
    API.post("datingapi1At4", "/itemapitab1Adisp", paramsp3).then(response3 => {console.log("success3");
      this.gethompage1Arecur100()
    }).catch(error => {console.log(error.response3);});
  }

  initializerflag=""; onetimenextflag=""
  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Ainitialize() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapi1At4", "/itemapitab1Adisp/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab1Adisplayitemid=response1.data[0];
      this.tab1Adisplayitemidnext=response1.data[1];
      this.tab1Alength=response1.data[3]; this.tab1Aendarrayitemidinitialize=response1.data[4];
      console.log(this.tab1Adisplayitemid); console.log(this.tab1Adisplayitemidnext);
      this.gethompageF1Ainitialize()
      if(+this.tab1Alength==1) {this.clicked0=true}
      if(+this.tab1Alength==0) {this.endofarray1A="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray1A="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthAnext=''; newHeightAnext=''
  urlAnext:string; //signed url to the image stored in s3
  async gethompageF1Ainitialize() {
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    //retrieves info in itemid1
    if(this.tab1Adisplayitemid!=null){
      this.api.GetDatinguserdbStaging(this.tab1Adisplayitemid).then((event) => {
        console.log(event);
        this.dealsPer10 = event as unknown as any;
        console.log(this.dealsPer10);
        Storage.get(this.dealsPer10.s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
          this.newWidthA=this.dealsPer10.newWidth; this.newHeightA=this.dealsPer10.newHeight
          this.initializerflag="yes"
        });
      });
      //retrieves info in itemid2
      if(this.tab1Adisplayitemidnext!=null) {
        this.api.GetDatinguserdbStaging(this.tab1Adisplayitemidnext).then((event) => {
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
    API.get("datingapi1At4", "/itemapitab1Adisp/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab1Adisplayitemid=response1.data[0];
      this.tab1Adisplayitemidindex1=response1.data[1]
      this.tab1Aunsubitemid=response1.data[5]; ; //unsub check done on index3 (thus, 4th element) array position.
      this.tab1Alength=response1.data[3]; this.tab1Aendarrayitemid=response1.data[4];
      console.log(this.tab1Adisplayitemid);
      this.gethompageF1Arecur10()
      if(+this.tab1Alength==1) {this.clicked0=true}
      if(+this.tab1Alength==0) {this.endofarray1A="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray1A="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthA=''; newHeightA=''
  urlA:string; //signed url to the image stored in s3
  async gethompageF1Arecur10() {
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab1Adisplayitemidindex1!=null){
      this.api.GetDatinguserdbStaging(this.tab1Adisplayitemidindex1).then((event) => {
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
    API.get("datingapi1At4", "/itemapitab1Adisp/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab1Adisplayitemidnext=response1.data[0];
      this.tab1Adisplayitemidindex1next=response1.data[1];
      this.tab1Aunsubitemid=response1.data[5];
      this.tab1Alengthnext=response1.data[3]; this.tab1Aendarrayitemidnext=response1.data[4];
      console.log(this.tab1Adisplayitemidnext);
      this.gethompageF1Arecur100();
      if(+this.tab1Alengthnext==1) {this.clicked0=true}
      if(+this.tab1Alengthnext==0) {this.endofarray1A="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray1A="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  async gethompageF1Arecur100() {
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab1Adisplayitemidindex1next!=null) {
      this.api.GetDatinguserdbStaging(this.tab1Adisplayitemidindex1next).then((event) => {
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
    this.api.BackinitializeButtonDatingitemtrackingStagingtab1A(user.attributes.sub,this.tab1Aendarrayitemid,
      +this.tab1Alength).then((event1) => {;this.reloadComponent()})
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle2back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab1A(user.attributes.sub,this.tab1Aendarrayitemidnext,
      +this.tab1Alengthnext).then((event1) => {;this.reloadComponent()})
  };

  //this is needed for one-time itemids
  async initializeclick1itemidback() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab2
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab1A(user.attributes.sub,this.tab1Aendarrayitemidinitialize,
      +this.tab1Alength).then((event1) => {this.reloadComponent()})
  }

}
