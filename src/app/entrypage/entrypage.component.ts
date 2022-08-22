import { Component, OnInit } from '@angular/core';
import {Cache} from "aws-amplify";


@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrls: ['./entrypage.component.css']
})
export class EntrypageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async mimicmidtermclick() {
    const expiration = new Date().valueOf()
    Cache.setItem('midtermenter', 'yes', {expires: expiration + 60000});
  }

}
