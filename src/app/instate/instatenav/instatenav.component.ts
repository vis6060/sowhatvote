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
//    this.ComPreferInitialize()
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

  //this works in initializing house candidates per array in midtermplaceholder-staging table
  async onetimearraycreateHouseOffice() {
    const user = await Auth.currentAuthenticatedUser();
    this.api.UpdateCandsArrayOneTime({State: {eq:"AL"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsAL"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"AR"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsAR"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"AZ"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsAZ"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"CA"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsCA"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"CO"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsCO"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"DE"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsDE"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"FL"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsFL"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"GA"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsGA"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"HI"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsHI"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"IA"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsIA"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"ID"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsID"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"IL"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsIL"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"IN"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsIN"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"KY"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsKY"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"LA"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsLA"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"MA"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsMA"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"MD"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsMD"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"ME"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsME"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"MI"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsMI"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"MN"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsMN"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"MO"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsMO"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"MS"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsMS"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"MT"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsMT"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"NC"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsNC"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"ND"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsND"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"NE"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsNE"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"NH"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsNH"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"NJ"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsNJ"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"NM"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsNM"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"NV"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsNV"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"NY"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsNY"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"OH"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsOH"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"OK"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsOK"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"OR"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsOR"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"PA"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsPA"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"RI"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsRI"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"SC"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsSC"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"SD"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsSD"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"TN"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsTN"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"TX"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsTX"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"UT"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsUT"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"VA"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsVA"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"WA"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsWA"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"WI"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsWI"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"WV"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsWV"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})
    this.api.UpdateCandsArrayOneTime({State: {eq:"WY"},Office: {eq:"House"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"HouseCandsWY"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})



  }

  numberarray=[]; candarray=[]
  //future committee initialize each candidate ushouserepcandsmain table with numeric list of 22 entries with column names FirstComPrefer, SecondComPrefer, ThirdComPrefer
  //comPreferInitializeAcands function applies to ushouserepcandsmain table
  //comPreferInitializeAcandsenate function applies to ussenaterepcandsmain table
  async ComPreferInitialize() {  const user = await Auth.currentAuthenticatedUser();
    this.api.ComPreferInitializeA("A").then((event2) => {this.numberarray = event2.numberarray as unknown as any; this.candarray=event2.candarray as unknown as any;
      for (let i = 0; i < 10; i++) {
        const paramsp9f = {body: {CandName: this.candarray[i], numberarray:this.numberarray}}
        // API.put("storeresult", "/store", paramsp9f).then(response9f => {console.log("success9f");}).catch(error => {console.log(error.response9f);});
        API.put("storeresultt4", "/storesenate", paramsp9f).then(response9f => {console.log("success9f");}).catch(error => {console.log(error.response9f);});
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
    this.api.UpdateCandsArrayOneTime({State: {eq:"TX"},Office: {eq:"Stater"} }).then((event1) => {this.temparray=event1.justcands as [];
      const paramspE = {body: {userid: user.attributes.sub, colvalue:this.temparray, colname:"StateCandsTX"}}; API.put("onetimemidtermarraystore", "/store", paramspE).then(responseE => {console.log("successE");}).catch(error => {console.log(error.responseE);});})

  }

}
