import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {APIService, DatinguserdbStaging} from "../../API.service";
import Amplify, {API, Auth, Storage} from "aws-amplify";
import awsExports from "../../../aws-exports";

@Component({
  selector: 'app-tab6bdisplaynav',
  templateUrl: './tab6bdisplaynav.component.html',
  styleUrls: ['./tab6bdisplaynav.component.css']
})
export class Tab6bdisplaynavComponent implements OnInit {

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
  tab6Bdisplayitemid:string=""; //this has the itemid profile to display to user for tab1A which is index0 in array
  tab6Bdisplayitemidnext:string="";  //"next" is index1 in array and "nextnext" is index2 in array to check their unsubscribe status and whether needs to be deleted from array
  tab6Bdisplayitemidindex1:string=""; tab6Bdisplayitemidindex1next:string="";
  tab6Bendarrayitemid:string=""; tab6Bendarrayitemidnext:string=""; tab6Bendarrayitemidinitialize:string="";
  endofarray6B=""; backflag=""; backflagnext="";
  public dealsPer10: DatinguserdbStaging;  public dealsPer100: DatinguserdbStaging;
  tab6Blength="0"; tab6Blengthnext="0";
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
    const paramsp2 = {body: {userid: user.attributes.sub, tab1index:0, tab3index:0, tab6index:1}} //place itemid in index1 position of tab1
    API.put("datingapitabindext4","/datingapitabindex", paramsp2).then(response2 => {console.log("success2");
    }).catch(error => {console.log(error.response2);});
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
    this.api.NextButtonDatingitemtrackingStagingtab6B(user.attributes.sub,this.tab6Bdisplayitemid).then((event1) => {
      this.gethompage1Arecur10()})
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtonDatingitemtrackingStagingtab6B(user.attributes.sub,this.tab6Bdisplayitemidnext).then((event1) => {
      this.gethompage1Arecur10() })
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100Next() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.NextButtonDatingitemtrackingStagingtab6B(user.attributes.sub,this.tab6Bdisplayitemid).then((event1) => {
      this.gethompage1Arecur100()})
  }

  initializerflag=""; onetimenextflag=""
  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Binitialize() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab6B/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab6Bdisplayitemid=response1.data[0];
      this.tab6Bdisplayitemidnext=response1.data[1];
      this.tab6Blength=response1.data[3]; this.tab6Bendarrayitemidinitialize=response1.data[4];
      console.log(this.tab6Bdisplayitemid); console.log(this.tab6Bdisplayitemidnext);
      this.gethompageF1Ainitialize()
      if(+this.tab6Blength==1) {this.clicked0=true}
      if(+this.tab6Blength==0) {this.endofarray6B="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray6B="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthAnext=''; newHeightAnext=''
  urlAnext:string; //signed url to the image stored in s3
  async gethompageF1Ainitialize() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    //retrieves info in itemid1
    if(this.tab6Bdisplayitemid!=null){
      this.api.GetDatinguserdbStaging(this.tab6Bdisplayitemid).then((event) => {
        console.log(event);
        this.dealsPer10 = event as unknown as any;
        console.log(this.dealsPer10);
        Storage.get(this.dealsPer10.s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
          this.newWidthA=this.dealsPer10.newWidth; this.newHeightA=this.dealsPer10.newHeight
        });
        this.initializerflag = "yes"
      });
      //retrieves info in itemid2
      if(this.tab6Bdisplayitemidnext!=null) {
        this.api.GetDatinguserdbStaging(this.tab6Bdisplayitemidnext).then((event) => {
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
    API.get("datingapitest4", "/itemapitab6B/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab6Bdisplayitemid=response1.data[0];
      this.tab6Bdisplayitemidindex1=response1.data[1]
      this.tab6Blength=response1.data[3]; this.tab6Bendarrayitemid=response1.data[4];
      console.log(this.tab6Bdisplayitemid);
      this.gethompageF1Arecur10()
      if(+this.tab6Blength==1) {this.clicked0=true}
      if(+this.tab6Blength==0) {this.endofarray6B="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray6B="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthA=''; newHeightA=''
  urlA:string; //signed url to the image stored in s3
  async gethompageF1Arecur10() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab6Bdisplayitemidindex1!=null){
      this.api.GetDatinguserdbStaging(this.tab6Bdisplayitemidindex1).then((event) => {
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
    API.get("datingapitest4", "/itemapitab6B/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab6Bdisplayitemidnext=response1.data[0];
      this.tab6Bdisplayitemidindex1next=response1.data[1];
      this.tab6Blengthnext=response1.data[3]; this.tab6Bendarrayitemidnext=response1.data[4];
      console.log(this.tab6Bdisplayitemidnext);
      this.gethompageF1Arecur100();
      if(+this.tab6Blengthnext==1) {this.clicked0=true}
      if(+this.tab6Blengthnext==0) {this.endofarray6B="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray6B="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  async gethompageF1Arecur100() {
    const user = await Auth.currentAuthenticatedUser();
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab6Bdisplayitemidindex1next!=null) {
      this.api.GetDatinguserdbStaging(this.tab6Bdisplayitemidindex1next).then((event) => {
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
    this.api.BackinitializeButtonDatingitemtrackingStagingtab6B(user.attributes.sub,this.tab6Bendarrayitemid,
      +this.tab6Blength).then((event1) => {;this.reloadComponent()})
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle2back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab6B(user.attributes.sub,this.tab6Bendarrayitemidnext,
      +this.tab6Blengthnext).then((event1) => {;this.reloadComponent()})
  };

  //this is needed for one-time itemids
  async initializeclick1itemidback() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab2
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab6B(user.attributes.sub,this.tab6Bendarrayitemidinitialize,
      +this.tab6Blength).then((event1) => {this.reloadComponent()})
  }

}
