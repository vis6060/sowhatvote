import { Component, OnInit } from '@angular/core';
import {API, Auth} from "aws-amplify";

@Component({
  selector: 'app-ad-a',
  templateUrl: './ad-a.component.html',
  styleUrls: ['./ad-a.component.css']
})
export class AdAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.webpageroute()
  }

  webpagevalue=""

  async webpageroute() {
    const user = await Auth.currentAuthenticatedUser();
//has the comcategory for whom the results need to be display as view results button was clicked and then there were two ad pages.
    let paramsp5 = {headers: {}, response: true, queryStringParameters: {userid:user.attributes.sub} };
    API.get("initializeuserarrayt4", "/index/m", paramsp5).then(response5 => {this.webpagevalue=response5.data[0].webpagevalue; console.log(this.webpagevalue)}).catch(error => {console.log(error.response5)});
  }

}
