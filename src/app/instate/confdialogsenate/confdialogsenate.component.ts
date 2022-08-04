import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogDatasenate} from "../instatesenatedisplaynav/instatesenatedisplaynav.component";

@Component({
  selector: 'app-confdialogsenate',
  templateUrl: './confdialogsenate.component.html',
  styleUrls: ['./confdialogsenate.component.css']
})
export class ConfdialogsenateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDatasenate) { }

  ngOnInit(): void {
  }

}
