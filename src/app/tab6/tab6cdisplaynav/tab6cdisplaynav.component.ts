import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {APIService, DatinguserdbStaging} from "../../API.service";
import Amplify, {API, Auth, Cache, Storage} from "aws-amplify";
import awsExports from "../../../aws-exports";
import {v4 as uuid} from "uuid";

@Component({
  selector: 'app-tab6cdisplaynav',
  templateUrl: './tab6cdisplaynav.component.html',
  styleUrls: ['./tab6cdisplaynav.component.css']
})
export class Tab6cdisplaynavComponent implements OnInit {

  router: Router;

  constructor(public authenticator: AuthenticatorService, private api: APIService, private route: ActivatedRoute, _router: Router) {
    Amplify.configure(awsExports);
    this.router = _router;
  }

  ngOnInit(): void {
    this.gethompage1Binitialize()
    this.putindextab1B()
  }

  profilecompPartF="";
  tab6Cdisplayitemid:string=""; //this has the itemid profile to display to user for tab1A which is index0 in array
  tab6Cdisplayitemidnext:string="";  //"next" is index1 in array and "nextnext" is index2 in array to check their unsubscribe status and whether needs to be deleted from array
  tab6Cdisplayitemidindex1:string=""; tab6Cdisplayitemidindex1next:string="";
  tab6Cendarrayitemid:string=""; tab6Cendarrayitemidnext:string=""; tab6Cendarrayitemidinitialize:string="";
  endofarray6C=""; backflag=""; backflagnext=""; interesttemp=[]
  public dealsPer10: DatinguserdbStaging;  public dealsPer100: DatinguserdbStaging;
  tab6Clength="0"; tab6Clengthnext="0";
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
    const expiration = new Date().valueOf()
    Cache.setItem('tab6index', '2', { expires: expiration +900000 }); //expires after 15minutes, time is in ms.
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
    this.api.UpdateConnectButton(user.attributes.sub,var1,"tab6connect",uuid(),this.interesttemp,new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),new Date().valueOf() ).then((event1) => {
      console.log(event1); this.categ=new Array();}).catch(error => {console.log(error.response1b);this.categ=new Array();});
  }

  //  tab1B when a user clicks on "dislike" button, move the itemid from tab1B to tab5.
  async disliketab51Apb(var3:string) {
    const user = await Auth.currentAuthenticatedUser();
    //reset the interest array in case it was clicked and then nextprofile was clicked, so nothing to store.
    this.categ=new Array();
    this.api.UpdateDislikeButton(user.attributes.sub,var3,"tab6dislike",uuid(),new Date().toLocaleDateString('en-us', {day:"numeric", month:"long", year:"numeric"}),new Date().valueOf() ).then((event1) => {})
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
    this.api.NextButtonDatingitemtrackingStagingtab6C(user.attributes.sub,this.tab6Cdisplayitemid).then((event1) => {
      this.gethompage1Arecur10()})
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10Next() {
    const user = await Auth.currentAuthenticatedUser();
    //reset the interest array in case it was clicked and then nextprofile was clicked, so nothing to store.
    this.categ=new Array();
    this.api.NextButtonDatingitemtrackingStagingtab6C(user.attributes.sub,this.tab6Cdisplayitemidnext).then((event1) => {
      this.gethompage1Arecur10() })
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100Next() {
    const user = await Auth.currentAuthenticatedUser();
    //reset the interest array in case it was clicked and then nextprofile was clicked, so nothing to store.
    this.categ=new Array();
    this.api.NextButtonDatingitemtrackingStagingtab6C(user.attributes.sub,this.tab6Cdisplayitemid).then((event1) => {
      this.gethompage1Arecur100()})
  }

  //deletes index0 and index1 itemid's
  async deleteindex0idinitializeConnectDislike() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab6C"}}
    API.post("datingapitest4", "/itemapitab6Cnext", paramsp3).then(response3 => {console.log("success3");
      this.gethompage1Arecur10()
    }).catch(error => {console.log(error.response3);});
  }

  //deletes index0 itemid's
  async deleteindex0idrecur10ConnectDislike() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab6C"}}
    API.post("datingapitest4", "/itemapitab6Cnext", paramsp3).then(response3 => {console.log("success3");
      this.gethompage1Arecur10();
    }).catch(error => {console.log(error.response3);});
  }

  //deletes index0 itemid's
  async deleteindex0idrecur100ConnectDislike() {
    const user = await Auth.currentAuthenticatedUser();
    //this removes the itemid from index 0 position, do this only once the itemid has move to the other tab
    const paramsp3 = {body: {userid: user.attributes.sub, itemattr:"itemidstab6C"}}
    API.post("datingapitest4", "/itemapitab6Cnext", paramsp3).then(response3 => {console.log("success3");
      this.gethompage1Arecur100()
    }).catch(error => {console.log(error.response3);});
  }

  initializerflag=""; onetimenextflag=""
  //for tab1A start, extract the itemid from the array in the itemtracking table
  async gethompage1Binitialize() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp1 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("datingapitest4", "/itemapitab6Cdup/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab6Cdisplayitemid=response1.data[0];
      this.tab6Cdisplayitemidnext=response1.data[1];
      this.tab6Clength=response1.data[3]; this.tab6Cendarrayitemidinitialize=response1.data[4];
      console.log(this.tab6Cdisplayitemid); console.log(this.tab6Cdisplayitemidnext);
      this.gethompageF1Ainitialize()
      if(+this.tab6Clength==1) {this.clicked0=true}
      if(+this.tab6Clength==0) {this.endofarray6C="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray6C="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthAnext=''; newHeightAnext=''
  urlAnext:string; //signed url to the image stored in s3
  async gethompageF1Ainitialize() {
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    //retrieves info in itemid1
    if(this.tab6Cdisplayitemid!=null){
      this.api.GetDatinguserdbStaging(this.tab6Cdisplayitemid).then((event) => {
        console.log(event);
        this.dealsPer10 = event as unknown as any;
        console.log(this.dealsPer10);
        Storage.get(this.dealsPer10.s3file).then( res => {this.urlA=res //this gets the signed url, which will be given to html
          this.newWidthA=this.dealsPer10.newWidth; this.newHeightA=this.dealsPer10.newHeight
          this.initializerflag="yes"
        });
      });
      //retrieves info in itemid2
      if(this.tab6Cdisplayitemidnext!=null) {
        this.api.GetDatinguserdbStaging(this.tab6Cdisplayitemidnext).then((event) => {
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
    API.get("datingapitest4", "/itemapitab6Cdup/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab6Cdisplayitemid=response1.data[0];
      this.tab6Cdisplayitemidindex1=response1.data[1]
      this.tab6Clength=response1.data[3]; this.tab6Cendarrayitemid=response1.data[4];
      console.log(this.tab6Cdisplayitemid);
      this.gethompageF1Arecur10()
      if(+this.tab6Clength==1) {this.clicked0=true}
      if(+this.tab6Clength==0) {this.endofarray6C="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray6C="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  newWidthA=''; newHeightA=''
  urlA:string; //signed url to the image stored in s3
  async gethompageF1Arecur10() {
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab6Cdisplayitemidindex1!=null){
      this.api.GetDatinguserdbStaging(this.tab6Cdisplayitemidindex1).then((event) => {
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
    API.get("datingapitest4", "/itemapitab6Cdup/m", paramsp1).then(response1 =>
    { console.log(response1) //this is the entire row of the user of itemtracking table
      this.tab6Cdisplayitemidnext=response1.data[0];
      this.tab6Cdisplayitemidindex1next=response1.data[1];
      this.tab6Clengthnext=response1.data[3]; this.tab6Cendarrayitemidnext=response1.data[4];
      console.log(this.tab6Cdisplayitemidnext);
      this.gethompageF1Arecur100();
      if(+this.tab6Clengthnext==1) {this.clicked0=true}
      if(+this.tab6Clengthnext==0) {this.endofarray6C="yes"}
    }).catch(error => {console.log(error.response1)
      this.endofarray6C="yes"  //with ngif statement it will say no more matches when this parameter is set to yes.
    });
  }

  async gethompageF1Arecur100() {
    //below code works, able to use graphql api to obtain id specific records from the graphql api attached table
    if(this.tab6Cdisplayitemidindex1next!=null) {
      this.api.GetDatinguserdbStaging(this.tab6Cdisplayitemidindex1next).then((event) => {
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
    this.api.BackinitializeButtonDatingitemtrackingStagingtab6C(user.attributes.sub,this.tab6Cendarrayitemid,
      +this.tab6Clength).then((event1) => {;this.reloadComponent()})
  };

  //in tab1A, back button clicked, bring the itemid from the end of the array to index0 position.
  async viewtoggle2back() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab3
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab6C(user.attributes.sub,this.tab6Cendarrayitemidnext,
      +this.tab6Clengthnext).then((event1) => {;this.reloadComponent()})
  };

  //this is needed for one-time itemids
  async initializeclick1itemidback() {
    const user = await Auth.currentAuthenticatedUser();
    //append the itemid in index 0 of tab2
    //this removes the itemid from index end of array position which is now one element bigger than the initial array due to append at begining of array
    this.api.BackinitializeButtonDatingitemtrackingStagingtab6C(user.attributes.sub,this.tab6Cendarrayitemidinitialize,
      +this.tab6Clength).then((event1) => {this.reloadComponent()})
  }


}
