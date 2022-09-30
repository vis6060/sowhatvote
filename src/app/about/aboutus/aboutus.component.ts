import { Component, OnInit,Renderer2 } from '@angular/core';
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {Cache} from "aws-amplify";

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(public authenticator: AuthenticatorService,private renderer: Renderer2) {
    if(Cache.getItem('cookiedenied')=="yes") {this.cookiedenied="yes"}
    if(Cache.getItem('stateuser')=="CA") {this.stateuserCA="yes"}
    this.delayonTop(0)
  }

  ngOnInit(): void {

  }

  cookiedenied=""; stateuserCA=""

  async delayonTop(ms: number) {await new Promise(resolve => setTimeout(()=>this.ontop(), ms)).then();}
  ontop(){try {const errorField = this.renderer.selectRootElement('.ontop_class');errorField.scrollIntoView();} catch (err) {}}

  async mimicmidtermclick() {
    const expiration = new Date().valueOf()
    Cache.setItem('midtermenter', 'yes', {expires: expiration + 1800000});
  }

}
