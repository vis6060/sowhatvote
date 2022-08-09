import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {APIService} from "../../API.service";
import Amplify, {API, Auth, Storage} from "aws-amplify";
import awsExports from "../../../aws-exports";

@Component({
  selector: 'app-instatenav',
  templateUrl: './instatenav.component.html',
  styleUrls: ['./instatenav.component.css']
})
export class InstatenavComponent implements OnInit {
  loadflaghouse="";
  tabinstateindex:number;

  constructor(private api: APIService, public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }

  ngOnInit(): void {
//  this.onetimearraycreateAllOffice()
//    this.onetimearraycreateHouseOffice()
//    this.onetimearraycreateSenateOffice()
//    this.onetimearraycreateStateOffice()
 //   this.ComPreferInitialize()
//    this.onetimeHouseArray()
    this.getindex()
  }

  //get index of tab to display
  async getindex() {
    const user = await Auth.currentAuthenticatedUser();
    let paramsp70 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("initializeuserarrayt4", "/index/m", paramsp70).then(response70 => {
      this.tabinstateindex=response70.data[0].tabinstateindex;
      this.loadflaghouse="yes";
    }).catch(error => {console.log(error.response70);
      this.loadflaghouse="yes"
    });}


//one-time create the arrays for the permutations of state and office, which will be stored in a side temp table and stored in a new variable based on user's filtration
  temparray=[String]
  async onetimearraycreateAllOffice() {
    const user = await Auth.currentAuthenticatedUser();
    //All Candidates for all states - All States tab default show
    //   this.api.UpdateCandsArrayOneTime().then((event1) => {this.temparray=event1.justcands as [];
    //     const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"AllCandsAllStates"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    //All Candidates - Texas State: Default view
    //   this.api.UpdateCandsArrayOneTime({State: {eq:"TX"}}).then((event1) => {this.temparray=event1.justcands as [];
    //    const paramspF = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"AllCandsTX"}}; API.put("onetimemidtermarraystore", "/store", paramspF).then(responseF => {console.log("successF");}).catch(error => {console.log(error.responseF);});})

  }

  async onetimeHouseArray() { console.log("onetimeentered")
    const user = await Auth.currentAuthenticatedUser(); //49 states
    let statearray=["AL","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
   //index 0:AL. 1:AZ. 2:AR. 3:CA. 4:CO. 5:CT. 6:DE. 7:FL. 8:GA. 9:HI. 10:ID. 11:IL. 12:IN. 13: IA.
    // 14:KS. 15:KY. 16:LA. 17:ME. 18:MD. 19:MA. 20:MI. 21:MN. 22:MS. 23:MO. 24:MT. 25:NE. 26:NV.
    // 27:NH. 28:NJ. 29:NM. 30:NY. 31:NC. 32:ND. 33:OH. 34:OK. 35:OR. 36:PA. 37:RI. 38:SC. 39:SD.
    //40:TN. 41:TX. 42:UT. 43:VT. 44:VA. 45:WA. 46:WV. 47:WI. 48:WY.
// API doesn't work gives template transformation failure message
    this.api.UpdateCandsArrayOneTime({StateCand: {eq:"AL"}},0).then((event1) => {})
}



  numberarray=[]; candarray=[]
  //future committee initialize each candidate ushouserepcandsmain table with numeric list of 22 entries with column names FirstComPrefer, SecondComPrefer, ThirdComPrefer
  //comPreferInitializeAcands function applies to ushouserepcandsmain table
  //comPreferInitializeAcandsenate function applies to ussenaterepcandsmain table
  async ComPreferInitialize() {  const user = await Auth.currentAuthenticatedUser();
    this.api.ComPreferInitializeA("A").then((event2) => {this.numberarray = event2.numberarray as unknown as any; this.candarray=event2.candarray as unknown as any;
      for (let i = 0; i < 730; i++) {
        const paramsp9f = {body: {CandName: this.candarray[i], numberarray:this.numberarray}}
        API.put("storeresultt4", "/store", paramsp9f).then(response9f => {console.log("success9f");}).catch(error => {console.log(error.response9f);});
      //  API.put("storeresultt4", "/storesenate", paramsp9f).then(response9f => {console.log("success9f");}).catch(error => {console.log(error.response9f);});
      }
    });
  }

  async onetimearraycreateSenateOffice() {
    const user = await Auth.currentAuthenticatedUser();
    //   this.api.UpdateCandsArrayOneTime({State: {eq:"CO"},Office: {eq:"Senate"} }).then((event1) => {this.temparray=event1.justcands as [];
    //    const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"SenateCandsCO"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})

  }

  async onetimearraycreateStateOffice() {
    const user = await Auth.currentAuthenticatedUser();
 //   this.api.UpdateCandsArrayOneTime({State: {eq:"TX"},Office: {eq:"Stater"} }).then((event1) => {this.temparray=event1.justcands as [];
  //    const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"StateCandsTX"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})

  }

}
