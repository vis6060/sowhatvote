import { Component, OnInit } from '@angular/core';
import {Cache} from "aws-amplify";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-giftcard',
  templateUrl: './giftcard.component.html',
  styleUrls: ['./giftcard.component.css']
})
export class GiftcardComponent implements OnInit {

  constructor(public authenticator: AuthenticatorService) { }

  ngOnInit(): void {
  }

  async mimicmidtermclick() {
    const expiration = new Date().valueOf()
    Cache.setItem('midtermenter', 'yes', {expires: expiration + 1800000});
  }

}
